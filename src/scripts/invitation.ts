import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import { Sakura } from './sakura';
import { WEDDING_INFO } from '../data/invitation';

gsap.registerPlugin(Flip);

let invitationOpened = false;
let userPausedMusic = false;
let heroSwiper: { update: () => void } | null = null;

class PopupManager {
  private popup: HTMLElement | null;
  private closeButton: HTMLElement | null;

  constructor() {
    this.popup = document.getElementById('popup');
    this.closeButton = document.getElementById('popupclose');
    this.init();
  }

  private init(): void {
    this.blockScroll();
    window.setTimeout(() => {
      if (this.popup) {
        this.popup.className = 'show';
        if (window.AOS) {
          window.setTimeout(() => window.AOS?.refresh(), 50);
        }
      }
    }, 0);
    if (this.closeButton) {
      this.closeButton.addEventListener('click', () => this.closePopup());
    }
  }

  private blockScroll(): void {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    document.body.style.touchAction = 'none';
    document.documentElement.style.overflow = 'hidden';
  }

  private enableScroll(): void {
    document.body.style.overflow = '';
    document.body.style.height = '';
    document.body.style.touchAction = '';
    document.documentElement.style.overflow = '';
  }

  public closePopup(): void {
    invitationOpened = true;
    const sound = document.getElementById('audio') as HTMLAudioElement | null;
    if (sound && !userPausedMusic) {
      sound.play().catch((e) => console.log('Audio gagal diputar:', e));
    }

    window.setTimeout(() => {
      this.hidePopup();
      this.showMainContent();
      this.initializeAOS();
      this.enableScroll();
    }, 10);
  }

  private hidePopup(): void {
    const blockWhite = document.getElementById('block_white');
    if (blockWhite) blockWhite.style.display = 'none';
    if (this.popup) this.popup.className = '';
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const topCover = document.querySelector('.top-cover');
    if (topCover) topCover.classList.add('hide');
  }

  private showMainContent(): void {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.style.display = 'block';
      document.querySelectorAll('.text_cvr').forEach((el) => el.classList.add('visible'));
      document.querySelectorAll('.floating-text').forEach((el) => el.classList.add('visible'));
      try {
        document.dispatchEvent(new Event('mainContentShown'));
      } catch {
        // Ignore legacy dispatch error
      }
    }
  }

  private initializeAOS(): void {
    window.setTimeout(() => {
      const targets = document.querySelectorAll<HTMLElement>('[data-aos]:not(.popup-aos-element)');
      targets.forEach((el) => {
        el.classList.remove('aos-animate');
        el.style.transition = 'opacity 0s';
        el.style.opacity = '0';
      });

      window.setTimeout(() => {
        targets.forEach((el) => {
          el.style.transition = '';
          el.style.removeProperty('opacity');
        });
        void document.body.offsetWidth;
        window.AOS?.refreshHard();
        heroSwiper?.update();
      }, 100);
    }, 0);
  }
}

function initMusicControls(): void {
  const btnPlayWrap = document.getElementById('btn_play');
  const btnStopWrap = document.getElementById('btn_stop');
  const btnPauseTrigger = document.getElementById('btnPauseTrigger');
  const btnPlayTrigger = document.getElementById('btnPlayTrigger');
  const sound = document.getElementById('audio') as HTMLAudioElement | null;

  const stopSound = () => {
    userPausedMusic = true;
    if (btnPlayWrap) btnPlayWrap.style.display = 'none';
    if (btnStopWrap) btnStopWrap.style.display = 'block';
    sound?.pause();
  };

  const playSound = () => {
    userPausedMusic = false;
    if (btnPlayWrap) btnPlayWrap.style.display = 'block';
    if (btnStopWrap) btnStopWrap.style.display = 'none';
    sound?.play().catch(() => {});
  };

  btnPauseTrigger?.addEventListener('click', stopSound);
  btnPlayTrigger?.addEventListener('click', playSound);

  document.addEventListener('visibilitychange', () => {
    if (!sound) return;
    if (document.hidden) {
      sound.pause();
    } else if (invitationOpened && !userPausedMusic) {
      if (btnPlayWrap) btnPlayWrap.style.display = 'block';
      if (btnStopWrap) btnStopWrap.style.display = 'none';
      sound.play().catch(() => {});
    }
  });
}

function applyGuestFromQuery(): void {
  const params = new URLSearchParams(window.location.search);
  const guest = params.get('to');
  if (guest && guest.trim()) {
    const cleanName = guest.trim();
    const penerimaEl = document.querySelector('.penerima');
    const rsvpNameInput = document.getElementById('f_10835_52') as HTMLInputElement | null;
    if (penerimaEl) penerimaEl.textContent = cleanName;
    if (rsvpNameInput) rsvpNameInput.value = cleanName;
  }
}

function initHeroScrollEffects(): void {
  window.addEventListener(
    'scroll',
    () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const startOffset = 100;
      const endOffset = 100;
      const effectRange = Math.max(viewportHeight - startOffset - endOffset, 1);
      const effectiveScroll = Math.max(scrollTop - startOffset, 0);
      const progress = Math.min(effectiveScroll / effectRange, 1);

      const overlay = document.getElementById('overlay');
      const blurTarget = document.getElementById('blurTarget');
      if (overlay) overlay.style.opacity = String(progress);
      if (blurTarget) blurTarget.style.filter = `blur(${progress * 15}px)`;

      const parallax = document.querySelector<HTMLElement>('.parallax .swiper-container');
      const parallaxElement = document.querySelector<HTMLElement>('.parallax');
      if (parallax && parallaxElement) {
        const parallaxTop = parallaxElement.offsetTop;
        const parallaxHeight = parallaxElement.offsetHeight;
        let moveProgress = (scrollTop - parallaxTop + viewportHeight) / (parallaxHeight + viewportHeight);
        moveProgress = Math.max(0, Math.min(1, moveProgress));
        const move = (moveProgress - 0.5) * 450;
        parallax.style.transform = `translateY(${move}px)`;
      }
    },
    { passive: true }
  );
}

function initFloatingScrollIndicator(): void {
  const floating = document.getElementById('floating');
  if (!floating) return;
  const FADE_DISTANCE = 150;
  let latestScroll = 0;
  let ticking = false;
  let isHidden = false;

  const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

  const updateFloating = () => {
    const progress = clamp(latestScroll / FADE_DISTANCE, 0, 1);
    if (progress >= 1) {
      if (!isHidden) {
        floating.style.display = 'none';
        isHidden = true;
      }
      ticking = false;
      return;
    }
    if (isHidden) {
      floating.style.display = '';
      isHidden = false;
    }
    floating.style.opacity = String(1 - progress);
    floating.style.transform = `translateX(-50%) translateY(${-40 * progress}px) scale(${1 - 0.04 * progress})`;
    ticking = false;
  };

  const onScroll = () => {
    latestScroll = window.scrollY || window.pageYOffset;
    if (!ticking) {
      window.requestAnimationFrame(updateFloating);
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
}

function initCountdown(): void {
  const countDownDate = new Date(WEDDING_INFO.countdownTargetIso).getTime();

  const updateTimer = () => {
    const distance = countDownDate - Date.now();
    const hariEl = document.getElementById('hari');
    const jamEl = document.getElementById('jam');
    const menitEl = document.getElementById('menit');
    const detikEl = document.getElementById('detik');
    if (!hariEl || !jamEl || !menitEl || !detikEl) return;

    if (distance > 0) {
      hariEl.textContent = String(Math.floor(distance / (1000 * 60 * 60 * 24)));
      jamEl.textContent = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      menitEl.textContent = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      detikEl.textContent = String(Math.floor((distance % (1000 * 60)) / 1000));
    } else {
      window.clearInterval(timerInterval);
      hariEl.textContent = '-';
      jamEl.textContent = '-';
      menitEl.textContent = '-';
      detikEl.textContent = '-';
    }
  };

  const timerInterval = window.setInterval(updateTimer, 1000);
  updateTimer();
}

function fallbackCopyTextToClipboard(text: string, onSuccess: () => void): void {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.top = '-9999px';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try {
    document.execCommand('copy');
    onSuccess();
  } catch (err) {
    console.error('Copy fallback failed', err);
  }
  document.body.removeChild(textarea);
}

function initGiftModal(): void {
  const modal = document.getElementById('myModal');
  const closeModal = document.getElementById('closeModal');
  const openModalGift = document.getElementById('openModalGift');
  if (!modal) return;

  const openModal = () => {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  };

  const closeModalFunc = () => {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  };

  openModalGift?.addEventListener('click', openModal);
  closeModal?.addEventListener('click', closeModalFunc);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModalFunc();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      closeModalFunc();
    }
  });

  document.querySelectorAll<HTMLButtonElement>('.copy-btn').forEach((btn) => {
    btn.addEventListener('click', function () {
      const card = this.closest('.atm-card');
      if (!card) return;
      const rawAttr = card.querySelector('.card-number')?.getAttribute('data-raw') || '';
      const number = rawAttr.replace(/<br\s*\/?>/gi, '').replace(/\r?\n/g, '').trim();

      const showToast = () => {
        const toast = card.querySelector<HTMLElement>('.toast');
        if (!toast) return;
        toast.textContent = btn.textContent?.includes('Salin Alamat')
          ? 'Alamat tersalin!'
          : 'Nomor rekening tersalin!';
        toast.classList.add('show');
        window.setTimeout(() => toast.classList.remove('show'), 2000);
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(number)
          .then(showToast)
          .catch(() => fallbackCopyTextToClipboard(number, showToast));
      } else {
        fallbackCopyTextToClipboard(number, showToast);
      }
    });
  });
}

function prependWishToDOM(name: string, message: string): void {
  const list = document.querySelector('.ucapan-list');
  if (!list) return;

  const emptyMsg = list.querySelector('.ucapan-empty');
  if (emptyMsg) emptyMsg.remove();

  const item = document.createElement('div');
  item.className = 'ucapan-item';

  const field = document.createElement('div');
  field.className = 'ucapan-field';
  field.style.color = '#333';

  const msgEl = document.createElement('div');
  msgEl.className = 'm_font3 ucapan-message sw108362';
  msgEl.textContent = message;

  const nameEl = document.createElement('div');
  nameEl.className = 'm_font3 ucapan-name sw108361';
  nameEl.textContent = name;

  field.appendChild(msgEl);
  field.appendChild(nameEl);
  item.appendChild(field);
  list.insertBefore(item, list.firstChild);
}

function initRSVPForm(): void {
  const STORAGE_KEY = 'undangan_imam_wulan_wishes_v1';
  const form = document.getElementById('rsvpForm_10835') as HTMLFormElement | null;
  const konfirmasiSelect = document.getElementById('f_10835_53') as HTMLSelectElement | null;
  const jumlahSelect = document.getElementById('f_10835_54') as HTMLSelectElement | null;
  const responseBox = document.getElementById('responseMessage_10835') as HTMLElement | null;
  const submitBtn = document.getElementById('submitBtn_10835') as HTMLButtonElement | null;

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    if (Array.isArray(saved)) {
      saved.forEach((entry: { name?: string; message?: string }) => {
        if (entry?.name && entry?.message) {
          prependWishToDOM(entry.name, entry.message);
        }
      });
    }
  } catch {
    // Ignore storage errors
  }

  if (!form || !konfirmasiSelect || !jumlahSelect) return;

  const syncConditionalAttendance = () => {
    if (konfirmasiSelect.value === 'Tidak') {
      jumlahSelect.value = '';
      jumlahSelect.disabled = true;
      jumlahSelect.removeAttribute('required');
    } else {
      jumlahSelect.disabled = false;
      jumlahSelect.setAttribute('required', 'required');
    }
  };

  konfirmasiSelect.addEventListener('change', syncConditionalAttendance);
  syncConditionalAttendance();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const namaInput = document.getElementById('f_10835_52') as HTMLInputElement | null;
    const ucapanInput = document.getElementById('f_10835_55') as HTMLTextAreaElement | null;
    const nama = (namaInput?.value || '').trim();
    const konfirmasi = konfirmasiSelect.value;
    const jumlah = jumlahSelect.value;
    const ucapan = (ucapanInput?.value || '').trim();

    if (!nama || !konfirmasi) return;
    if (konfirmasi === 'Hadir' && !jumlah) return;

    if (ucapan) {
      prependWishToDOM(nama, ucapan);
      try {
        const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        existing.push({ name: nama, message: ucapan, status: konfirmasi, guests: jumlah || 0 });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
      } catch {
        // Ignore storage errors
      }
    }

    if (responseBox) {
      responseBox.style.display = 'block';
      responseBox.className = 'response-message alert-info m_font3';
      responseBox.textContent = 'Terima kasih! Konfirmasi kehadiran dan ucapan Anda telah tersimpan.';
    }

    if (submitBtn) {
      submitBtn.style.display = 'none';
    }
  });
}

function initEnvelopeIntro(): void {
  const introEl = document.getElementById('envelope-intro');
  const unit = document.getElementById('envelopeUnit');
  const flap = document.getElementById('envelopeFlap');
  const seal = document.getElementById('gununganSeal');
  const shadow = document.getElementById('envelopeShadow');
  const hint = document.querySelector<HTMLElement>('.envelope-hint');
  const gleamBar = document.querySelector<HTMLElement>('.seal-gleam-bar');
  const glowEl = document.querySelector<HTMLElement>('.envelope-ambient-glow');
  const cardClone = document.getElementById('envelopeCardClone');
  const popupEl = document.getElementById('popup');

  if (!introEl || !unit || !flap || !cardClone || !popupEl) return;

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    introEl.style.display = 'none';
    return;
  }

  // Clone live Cover Gate (#popup) content into the emerging sheet
  const fragment = document.createDocumentFragment();
  Array.from(popupEl.children).forEach((child) => {
    const cloned = child.cloneNode(true) as HTMLElement;
    if (cloned.hasAttribute('id')) cloned.removeAttribute('id');
    cloned.removeAttribute('data-aos');
    cloned.removeAttribute('data-aos-offset');
    cloned.removeAttribute('data-aos-delay');
    cloned.removeAttribute('data-aos-duration');
    cloned.classList.remove('popup-aos-element', 'aos-init', 'aos-animate');
    cloned.querySelectorAll<HTMLElement>('[id], [data-aos], .popup-aos-element').forEach((node) => {
      node.removeAttribute('id');
      node.removeAttribute('data-aos');
      node.removeAttribute('data-aos-offset');
      node.removeAttribute('data-aos-delay');
      node.removeAttribute('data-aos-duration');
      node.classList.remove('popup-aos-element', 'aos-init', 'aos-animate');
    });
    fragment.appendChild(cloned);
  });
  cardClone.appendChild(fragment);

  // Initial state: softly floating closed envelope
  gsap.set(unit, { opacity: 0, y: 28, scale: 0.92, rotateX: 8, force3D: true });
  gsap.set(cardClone, { y: 0, scale: 0.7, force3D: true });

  // Entrance & subtle seal sheen loop
  gsap.to(unit, {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    duration: 0.9,
    ease: 'power3.out',
  });

  if (gleamBar) {
    gsap.fromTo(
      gleamBar,
      { xPercent: -160, skewX: -18 },
      { xPercent: 340, skewX: -18, duration: 1.6, ease: 'power1.inOut', repeat: -1, repeatDelay: 1.2 }
    );
  }

  let started = false;
  let autoTimer: number | null = null;

  const runSequence = () => {
    if (started) return;
    started = true;
    if (autoTimer !== null) {
      window.clearTimeout(autoTimer);
      autoTimer = null;
    }

    const tl = gsap.timeline({ defaults: { force3D: true } });

    // 1. Subtle unseal pulse + fade hint
    if (hint) {
      tl.to(hint, { opacity: 0, y: 6, duration: 0.3, ease: 'power2.out' }, 0);
    }
    if (seal) {
      tl.to(seal, { scale: 1.07, duration: 0.22, ease: 'power2.out', yoyo: true, repeat: 1 }, 0);
    }

    // 2. Smooth 3D flap opening to flat 180deg (swaps behind pocket slot once past 110deg)
    let swapped = false;
    tl.to(
      flap,
      {
        rotateX: 180,
        duration: 0.95,
        ease: 'power2.inOut',
        onUpdate: () => {
          const currentRot = Number(gsap.getProperty(flap, 'rotateX'));
          if (!swapped && currentRot >= 110) {
            swapped = true;
            flap.style.zIndex = '1';
          }
        },
        onComplete: () => {
          gsap.set(flap, { z: -1 });
        },
      },
      0.18
    );

    // 3. After flap settles open cleanly, envelope yields and sheet glides smoothly out
    tl.to(
      unit,
      {
        y: 62,
        scale: 0.96,
        duration: 0.95,
        ease: 'power2.inOut',
      },
      1.32
    );
    if (shadow) {
      tl.to(shadow, { scale: 0.9, opacity: 0.55, duration: 0.95, ease: 'power2.inOut' }, 1.32);
    }
    tl.to(
      cardClone,
      {
        y: -215,
        scale: 0.72,
        duration: 1.0,
        ease: 'power3.out',
      },
      1.36
    );

    // 4. GSAP Flip seamless expansion from pocket sheet to full Cover Gate (#popup)
    tl.add(() => {
      const state = Flip.getState(cardClone, { props: 'borderRadius' });

      introEl.appendChild(cardClone);
      cardClone.classList.add('is-stage-floating');
      gsap.set(cardClone, { clearProps: 'transform,y,scale' });

      Flip.from(state, {
        duration: 0.95,
        ease: 'expo.inOut',
        scale: true,
        absolute: true,
        simple: true,
      });

      gsap.to(unit, {
        y: 165,
        scale: 0.88,
        opacity: 0,
        duration: 0.75,
        ease: 'power2.in',
      });
      if (glowEl) {
        gsap.to(glowEl, { opacity: 0, duration: 0.65, ease: 'power2.out' });
      }
    }, 2.34);

    // 5. Crossfade seamlessly to live interactive Cover Gate (#popup)
    tl.to(
      introEl,
      {
        opacity: 0,
        duration: 0.35,
        ease: 'power1.out',
        onComplete: () => {
          introEl.style.display = 'none';
        },
      },
      3.28
    );
  };

  unit.addEventListener('click', runSequence);
  autoTimer = window.setTimeout(runSequence, 1150);
}

export function bootstrapInvitation(): void {
  document.addEventListener('DOMContentLoaded', () => {
    applyGuestFromQuery();
    new PopupManager();
    initEnvelopeIntro();
    initMusicControls();

    window.AOS?.init({
      offset: 0,
      delay: 200,
      duration: 1000,
      once: false,
    });

    initHeroScrollEffects();
    initFloatingScrollIndicator();
    initCountdown();
    initGiftModal();
    initRSVPForm();

    let sakuraStarted = false;
    let jarallaxInitialized = false;
    document.addEventListener('mainContentShown', () => {
      if (!jarallaxInitialized && window.jarallax) {
        jarallaxInitialized = true;
        window.setTimeout(() => {
          window.jarallax?.(document.querySelectorAll('.jarallax'), {
            speed: 0.5,
            type: 'scroll',
          });
        }, 60);
      }

      if (!sakuraStarted) {
        sakuraStarted = true;
        new Sakura('#main-content', {
          colors: [
            {
              gradientColorStart: 'rgba(230,196,122, 0.9)',
              gradientColorEnd: 'rgba(230,196,122, 0.8)',
              gradientColorDegree: 120,
            },
            {
              gradientColorStart: 'rgba(230,196,122, 1)',
              gradientColorEnd: 'rgba(230,196,122, 1)',
              gradientColorDegree: 120,
            },
            {
              gradientColorStart: 'rgba(230,196,122, 0.7)',
              gradientColorEnd: 'rgba(230,196,122, 0.7)',
              gradientColorDegree: 120,
            },
          ],
          delay: 1000,
        });
      }
    });
  });

  window.addEventListener('load', () => {
    if (window.Swiper) {
      heroSwiper = new window.Swiper('.swiper-container', {
        slidesPerView: 1,
        effect: 'fade',
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        speed: 3000,
        observer: true,
        observeParents: true,
        updateOnWindowResize: true,
      });
    }

    if (window.jQuery) {
      const $gallery = window.jQuery('#responsive-images');
      $gallery.lightGallery?.({
        selector: 'li',
        thumbnail: true,
      });
    }
  });
}
