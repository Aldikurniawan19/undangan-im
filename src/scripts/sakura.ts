/*!
 * Sakura.js 1.1.1 (TypeScript ES Module for Digital Wedding Invitation)
 */
export interface SakuraColor {
  gradientColorStart: string;
  gradientColorEnd: string;
  gradientColorDegree: number;
}

export interface SakuraOptions {
  className?: string;
  fallSpeed?: number;
  maxSize?: number;
  minSize?: number;
  delay?: number;
  colors?: SakuraColor[];
}

export class Sakura {
  private el: HTMLElement | null;
  private settings: Required<SakuraOptions>;

  constructor(selector: string, options: SakuraOptions = {}) {
    this.el = document.querySelector<HTMLElement>(selector);
    const defaults: Required<SakuraOptions> = {
      className: 'sakura',
      fallSpeed: 1,
      maxSize: 12,
      minSize: 8,
      delay: 300,
      colors: [
        {
          gradientColorStart: 'rgba(230, 196, 122, 0.9)',
          gradientColorEnd: 'rgba(230, 196, 122, 0.8)',
          gradientColorDegree: 120,
        },
      ],
    };

    this.settings = { ...defaults, ...options };
    if (!this.el) return;

    this.el.style.overflowX = 'hidden';
    this.el.setAttribute('data-sakura-anim-id', String(window.requestAnimationFrame(this.createPetal)));
  }

  private randomArrayElem<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  private randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private createPetal = (): void => {
    if (!this.el) return;

    if (this.el.dataset.sakuraAnimId) {
      window.setTimeout(() => {
        window.requestAnimationFrame(this.createPetal);
      }, this.settings.delay);
    }

    const blowAnimations = [
      'blow-soft-left',
      'blow-medium-left',
      'blow-soft-right',
      'blow-medium-right',
    ];
    const swayAnimations = [
      'sway-0',
      'sway-1',
      'sway-2',
      'sway-3',
      'sway-4',
      'sway-5',
      'sway-6',
      'sway-7',
      'sway-8',
    ];

    const blowAnimation = this.randomArrayElem(blowAnimations);
    const swayAnimation = this.randomArrayElem(swayAnimations);
    const fallTime =
      (document.documentElement.clientHeight * 0.007 + Math.round(Math.random() * 5)) *
      this.settings.fallSpeed;

    const animations = [
      `fall ${fallTime}s linear 0s 1`,
      `${blowAnimation} ${(fallTime > 30 ? fallTime : 30) - 20 + this.randomInt(0, 20)}s linear 0s infinite`,
      `${swayAnimation} ${this.randomInt(2, 4)}s linear 0s infinite`,
    ].join(', ');

    const petal = document.createElement('div');
    petal.classList.add(this.settings.className);

    const height = this.randomInt(this.settings.minSize, this.settings.maxSize);
    const width = height - Math.floor(this.randomInt(0, this.settings.minSize) / 3);
    const color = this.randomArrayElem(this.settings.colors);

    petal.style.background = `linear-gradient(${color.gradientColorDegree}deg, ${color.gradientColorStart}, ${color.gradientColorEnd})`;
    petal.style.animation = animations;
    petal.style.borderRadius = `${this.randomInt(
      this.settings.maxSize,
      this.settings.maxSize + Math.floor(Math.random() * 10)
    )}px ${this.randomInt(1, Math.floor(width / 4))}px`;
    petal.style.height = `${height}px`;
    petal.style.left = `${Math.random() * document.documentElement.clientWidth - 40}px`;
    petal.style.marginTop = `${-(Math.floor(Math.random() * 20) + 15)}px`;
    petal.style.width = `${width}px`;

    petal.addEventListener('animationend', (e: AnimationEvent) => {
      if (e.animationName === 'fall') {
        petal.remove();
      }
    });

    this.el.appendChild(petal);
  };

  public stop(graceful = false): void {
    if (!this.el) return;
    const animId = Number(this.el.dataset.sakuraAnimId);
    if (animId) {
      window.cancelAnimationFrame(animId);
      this.el.setAttribute('data-sakura-anim-id', '');
    }
    if (!graceful) {
      window.setTimeout(() => {
        const petals = document.getElementsByClassName(this.settings.className);
        while (petals.length > 0) {
          petals[0].parentNode?.removeChild(petals[0]);
        }
      }, this.settings.delay + 50);
    }
  }
}
