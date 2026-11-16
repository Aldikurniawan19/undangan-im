export interface OrnamentLayer {
  src: string;
  aos: string;
  duration?: number;
  delay?: number;
  offset?: number;
  containerStyle: string;
  imgStyle: string;
  isPopupElement?: boolean;
}

export interface GalleryItem {
  src: string;
  colClass: 'col-4' | 'col-6' | 'col-8';
  alt: string;
}

export interface BankAccount {
  id: string;
  bankName: string;
  logoSrc: string;
  logoClass: string;
  chipSrc: string;
  formattedNumber: string;
  rawNumber: string;
  owner: string;
}

export const WEDDING_INFO = {
  pageTitle: 'The Wedding of Imam & Wulan',
  shortTitle: 'Imam & Wulan',
  fullTitle: 'Imam Saputra & Wulan Permata',
  dateDisplay: 'Sabtu, 16 Januari 2027',
  timeDisplay: '19:00 - 21:00 WIB',
  countdownTargetIso: '2027-01-16T19:00:00+07:00',
  venue: {
    name: 'Jalan Malonas 14',
    addressLine: 'Jaya Mulya, Kec. Rimbo Bujang,',
    regionLine: 'Kabupaten Tebo, Jambi',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=-1.346734,102.072724',
  },
  calendarUrl:
    'https://calendar.google.com/calendar/render?action=TEMPLATE&text=The+Wedding+of+Imam+Saputra+%26+Wulan+Permata&dates=20270116T190000/20270116T210000&ctz=Asia%2FJakarta&details=You%20are%20invited%20to%20celebrate%20our%20special%20day.%0A%0AEvent%20%3A%20The%20Wedding%20of%20Imam%20Saputra%20%26%20Wulan%20Permata%0ADate%20%20%3A%20Saturday%2C%2016%20January%202027%0ATime%20%20%3A%2019%3A00%20-%2021%3A00%0A%0AVenue%20%3A%20Jalan%20Malonas%2014%2C%20Jaya%20Mulya%2C%20Kec.%20Rimbo%20Bujang%2C%20Kabupaten%20Tebo%2C%20Jambi%0AGoogle%20Maps%20%3A%20https%3A%2F%2Fwww.google.com%2Fmaps%2Fsearch%2F%3Fapi%3D1%26query%3D-1.346734%2C102.072724%0A&location=Jalan+Malonas+14%2C+Jaya+Mulya%2C+Kec.+Rimbo+Bujang%2C+Kabupaten+Tebo%2C+Jambi&trp=false',
  groom: {
    name: 'Imam Saputra',
    orderLabel: 'Putra Kedua',
    parents: ['Bapak Z. Abidin', 'Ibu Marilah'],
    photoSrc: '/foto/imam.webp',
  },
  bride: {
    name: 'Wulan Permata',
    orderLabel: 'Putri Pertama',
    parents: ['Bapak Gasim Abdul Kadir', 'Ibu Melva Dewi Karneti (Almh)'],
    photoSrc: '/foto/wulan.webp',
  },
  heroSlides: [
    '/foto/Prewedding Portrait.webp',
    '/foto/Engagement Portrait.webp',
    '/foto/Prewedding Portrait.webp',
  ],
  backgrounds: {
    temple: '/aseets/bg-temple.webp',
    errol: '/aseets/bg-errol.webp',
    resepsi: '/foto/Engagement Portrait.webp',
    ucapan: '/foto/Prewedding Portrait.webp',
    closing: '/foto/Engagement Portrait.webp',
  },
  audioSrc: '/media/audio/sound.mp3',
  creditName: 'Aldi Kurniawan',
};

export const GALLERY_PHOTOS: GalleryItem[] = [
  { src: '/foto/imam.webp', colClass: 'col-4', alt: 'Galeri 1' },
  { src: '/foto/Prewedding Portrait.webp', colClass: 'col-4', alt: 'Galeri 2' },
  { src: '/foto/wulan.webp', colClass: 'col-4', alt: 'Galeri 3' },
  { src: '/foto/Engagement Portrait.webp', colClass: 'col-6', alt: 'Galeri 4' },
  { src: '/foto/Prewedding Portrait.webp', colClass: 'col-6', alt: 'Galeri 5' },
  { src: '/foto/wulan.webp', colClass: 'col-4', alt: 'Galeri 6' },
  { src: '/foto/Engagement Portrait.webp', colClass: 'col-8', alt: 'Galeri 7' },
  { src: '/foto/Prewedding Portrait.webp', colClass: 'col-8', alt: 'Galeri 8' },
  { src: '/foto/imam.webp', colClass: 'col-4', alt: 'Galeri 9' },
  { src: '/foto/Engagement Portrait.webp', colClass: 'col-4', alt: 'Galeri 10' },
  { src: '/foto/imam.webp', colClass: 'col-4', alt: 'Galeri 11' },
  { src: '/foto/wulan.webp', colClass: 'col-4', alt: 'Galeri 12' },
  { src: '/foto/Prewedding Portrait.webp', colClass: 'col-6', alt: 'Galeri 13' },
  { src: '/foto/Engagement Portrait.webp', colClass: 'col-6', alt: 'Galeri 14' },
  { src: '/foto/imam.webp', colClass: 'col-4', alt: 'Galeri 15' },
  { src: '/foto/Prewedding Portrait.webp', colClass: 'col-8', alt: 'Galeri 16' },
  { src: '/foto/Engagement Portrait.webp', colClass: 'col-8', alt: 'Galeri 17' },
  { src: '/foto/wulan.webp', colClass: 'col-4', alt: 'Galeri 18' },
  { src: '/foto/imam.webp', colClass: 'col-6', alt: 'Galeri 19' },
  { src: '/foto/wulan.webp', colClass: 'col-6', alt: 'Galeri 20' },
];

export const BANK_ACCOUNTS: BankAccount[] = [
  {
    id: 'mandiri',
    bankName: 'Logo Mandiri',
    logoSrc: '/media/ui/mandiri.webp',
    logoClass: 'banklogo1',
    chipSrc: '/media/ui/chip.webp',
    formattedNumber: '1260 0117 2187 4',
    rawNumber: '1260011721874',
    owner: 'Imam Saputra',
  },
  {
    id: 'bca',
    bankName: 'Logo BCA',
    logoSrc: '/media/ui/bca.webp',
    logoClass: 'banklogo2',
    chipSrc: '/media/ui/chip.webp',
    formattedNumber: '1450 1213 60',
    rawNumber: '1450121360',
    owner: 'Wulan Permata',
  },
];

export const COVER_ORNAMENTS: OrnamentLayer[] = [
  { src: '/aseets/pohon-errol-b3.webp', aos: 'fade-up', offset: 0, duration: 1300, containerStyle: 'position:absolute;bottom:60px;left:0px;right:0px;', imgStyle: 'width:100%;', isPopupElement: true },
  { src: '/aseets/pohon-candi-l2.webp', aos: 'fade-right', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;bottom:160px;left:30px;', imgStyle: 'width:120px;animation:anim_bottom_l 15s linear 1s infinite normal forwards;', isPopupElement: true },
  { src: '/aseets/pohon-candi.webp', aos: 'fade-left', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;bottom:160px;left:0px;right:30px;', imgStyle: 'width:120px;animation:anim_bottom_r 15s linear 1s infinite normal forwards;', isPopupElement: true },
  { src: '/aseets/pohon-candi-al.webp', aos: 'fade-right', offset: 0, duration: 1100, containerStyle: 'text-align:left;position:absolute;top:0px;left:0px;right:0px;', imgStyle: 'width:50%;animation:anim_top_r 10s linear 1s infinite normal forwards;', isPopupElement: true },
  { src: '/aseets/pohon-candi-ar.webp', aos: 'fade-left', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;top:0px;left:0px;right:0px;', imgStyle: 'width:50%;animation:anim_top_l 10s linear 1s infinite normal forwards;', isPopupElement: true },
  { src: '/aseets/pohon-errol-bl.webp', aos: 'fade-right', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;bottom:0px;left:0px;', imgStyle: 'width:220px;animation:anim_bottom_l 5s linear 1s infinite normal forwards;', isPopupElement: true },
  { src: '/aseets/pohon-errol-r.webp', aos: 'fade-left', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;bottom:0px;left:0px;right:0px;', imgStyle: 'width:220px;animation:anim_bottom_r 5s linear 1s infinite normal forwards;', isPopupElement: true },
  { src: '/aseets/pilar-errol.webp', aos: 'zoom-out', offset: 0, containerStyle: 'position:absolute;top:0px;left:0px;right:0px;', imgStyle: 'width:100%;', isPopupElement: true },
  { src: '/aseets/chanderlier-candi.webp', aos: 'fade-right', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;top:0px;left:0px;', imgStyle: 'width:100px;', isPopupElement: true },
  { src: '/aseets/chanderlier-candi.webp', aos: 'fade-left', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;top:0px;left:0px;right:0px;', imgStyle: 'width:100px;', isPopupElement: true },
  { src: '/aseets/daun-candi.webp', aos: 'fade-down', offset: 0, duration: 1300, containerStyle: 'position:absolute;top:0px;left:0px;right:0px;', imgStyle: 'width:100%;', isPopupElement: true },
  { src: '/aseets/daun-candi-2.webp', aos: 'fade-up', offset: 0, duration: 1300, containerStyle: 'position:absolute;bottom:30px;left:0px;right:0px;', imgStyle: 'width:100%;animation:anim_rl 20s linear 1s infinite normal forwards;', isPopupElement: true },
  { src: '/aseets/candi.webp', aos: 'zoom-out-up', offset: 0, duration: 1200, containerStyle: 'position:absolute;bottom:0px;left:0px;right:0px;text-align:center;', imgStyle: 'width:80%;', isPopupElement: true },
  { src: '/aseets/wayang-candi-l.webp', aos: 'fade-right', offset: 0, duration: 1100, containerStyle: 'position:absolute;bottom:0px;left:0px;', imgStyle: 'width:110px;animation:anim_bottom_l 10s linear 1s infinite normal forwards;', isPopupElement: true },
  { src: '/aseets/wayang-candi-r.webp', aos: 'fade-left', offset: 0, duration: 1100, containerStyle: 'position:absolute;bottom:0px;right:0px;text-align:right;', imgStyle: 'width:120px;animation:anim_bottom_r 10s linear 1s infinite normal forwards;', isPopupElement: true },
  { src: '/aseets/bunga-candi-b2.webp', aos: 'zoom-out-up', offset: 0, duration: 1000, containerStyle: 'position:absolute;bottom:0px;left:0px;right:0px;', imgStyle: 'width:100%;animation:anim_rl 15s linear 1s infinite normal forwards;', isPopupElement: true },
  { src: '/aseets/bunga-candi-l.webp', aos: 'fade-right', offset: 0, duration: 1100, containerStyle: 'text-align:left;position:absolute;bottom:0px;left:0px;', imgStyle: 'width:150px;animation:anim_bottom_l 12s linear 1s infinite normal forwards;', isPopupElement: true },
  { src: '/aseets/bunga-candi-r.webp', aos: 'fade-left', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;bottom:0px;left:0px;right:0px;', imgStyle: 'width:150px;animation:anim_bottom_r 12s linear 1s infinite normal forwards;', isPopupElement: true },
];

export const MEMPELAI_ORNAMENTS: OrnamentLayer[] = [
  { src: '/aseets/pohon-errol-b3.webp', aos: 'fade-up', offset: 0, duration: 1300, containerStyle: 'position:absolute;bottom:60px;left:0px;right:0px;', imgStyle: 'width:100%;' },
  { src: '/aseets/pohon-candi-l2.webp', aos: 'fade-right', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;bottom:160px;left:30px;', imgStyle: 'width:120px;animation:anim_bottom_l 15s linear 1s infinite normal forwards;' },
  { src: '/aseets/pohon-candi.webp', aos: 'fade-left', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;bottom:160px;left:0px;right:30px;', imgStyle: 'width:120px;animation:anim_bottom_l 15s linear 1s infinite normal forwards;' },
  { src: '/aseets/pohon-candi-al.webp', aos: 'fade-right', offset: 0, duration: 1100, containerStyle: 'text-align:left;position:absolute;top:0px;left:0px;right:0px;', imgStyle: 'width:50%;animation:anim_top_r 10s linear 1s infinite normal forwards;' },
  { src: '/aseets/pohon-candi-ar.webp', aos: 'fade-left', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;top:0px;left:0px;right:0px;', imgStyle: 'width:50%;animation:anim_top_l 10s linear 1s infinite normal forwards;' },
  { src: '/aseets/pohon-errol-bl.webp', aos: 'fade-right', offset: 0, duration: 1100, containerStyle: 'text-align:left;position:absolute;bottom:0px;left:0px;', imgStyle: 'width:220px;animation:anim_bottom_l 5s linear 1s infinite normal forwards;' },
  { src: '/aseets/pohon-errol-r.webp', aos: 'fade-left', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;bottom:0px;left:0px;right:0px;', imgStyle: 'width:220px;animation:anim_bottom_r 5s linear 1s infinite normal forwards;' },
  { src: '/aseets/pilar-hidden-side.webp', aos: 'fade-up', offset: 0, containerStyle: 'position:absolute;bottom:350px;left:0px;right:0px;', imgStyle: 'width:100%;' },
  { src: '/aseets/pilar-errol.webp', aos: 'fade-up', offset: 0, containerStyle: 'position:absolute;bottom:20px;left:0px;right:0px;', imgStyle: 'width:100%;transform:rotateX(180deg);' },
  { src: '/aseets/pilar-errol.webp', aos: 'fade-down', offset: 0, containerStyle: 'position:absolute;top:0px;left:0px;right:0px;', imgStyle: 'width:100%;' },
  { src: '/aseets/chanderlier-candi.webp', aos: 'fade-right', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;top:0px;left:0px;', imgStyle: 'width:100px;' },
  { src: '/aseets/chanderlier-candi.webp', aos: 'fade-left', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;top:0px;left:0px;right:0px;', imgStyle: 'width:100px;' },
  { src: '/aseets/daun-candi.webp', aos: 'fade-down', offset: 0, duration: 1300, containerStyle: 'position:absolute;top:0px;left:0px;right:0px;', imgStyle: 'width:100%;' },
  { src: '/aseets/daun-candi-2.webp', aos: 'fade-up', offset: 0, duration: 1300, containerStyle: 'position:absolute;bottom:30px;left:0px;right:0px;', imgStyle: 'width:100%;animation:anim_rl 20s linear 1s infinite normal forwards;' },
  { src: '/aseets/candi.webp', aos: 'zoom-out-up', offset: 0, duration: 1200, containerStyle: 'position:absolute;bottom:0px;left:0px;right:0px;text-align:center;', imgStyle: 'width:80%;' },
  { src: '/aseets/wayang-candi-l.webp', aos: 'fade-right', offset: 0, duration: 1100, containerStyle: 'position:absolute;bottom:0px;left:0px;', imgStyle: 'width:110px;animation:anim_bottom_l 10s linear 1s infinite normal forwards;' },
  { src: '/aseets/wayang-candi-r.webp', aos: 'fade-left', offset: 0, duration: 1100, containerStyle: 'position:absolute;bottom:0px;right:0px;text-align:right;', imgStyle: 'width:120px;animation:anim_bottom_r 10s linear 1s infinite normal forwards;' },
  { src: '/aseets/bunga-candi-b2.webp', aos: 'zoom-out-up', offset: 0, duration: 1000, containerStyle: 'position:absolute;bottom:0px;left:0px;right:0px;', imgStyle: 'width:100%;animation:anim_rl 15s linear 1s infinite normal forwards;' },
  { src: '/aseets/bunga-candi-l.webp', aos: 'fade-right', offset: 0, duration: 1100, containerStyle: 'text-align:left;position:absolute;bottom:0px;left:0px;', imgStyle: 'width:150px;animation:anim_bottom_l 12s linear 1s infinite normal forwards;' },
  { src: '/aseets/bunga-candi-r.webp', aos: 'fade-left', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;bottom:0px;left:0px;right:0px;', imgStyle: 'width:150px;animation:anim_bottom_r 12s linear 1s infinite normal forwards;' },
];

export const RSVP_LOWER_ORNAMENTS: OrnamentLayer[] = [
  { src: '/aseets/pohon-errol-b3.webp', aos: 'fade-up', offset: 0, duration: 1300, containerStyle: 'position:absolute;bottom:60px;left:0px;right:0px;', imgStyle: 'width:100%;' },
  { src: '/aseets/pohon-candi.webp', aos: 'fade-right', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;bottom:160px;left:30px;', imgStyle: 'width:120px;transform:rotateY(180deg);' },
  { src: '/aseets/pohon-candi.webp', aos: 'fade-left', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;bottom:160px;left:0px;right:30px;', imgStyle: 'width:120px;' },
  { src: '/aseets/pohon-errol-a.webp', aos: 'fade-down', offset: 0, duration: 1300, containerStyle: 'text-align:center;position:absolute;top:0px;left:0px;right:0px;', imgStyle: 'width:100%;' },
  { src: '/aseets/pohon-errol-r.webp', aos: 'fade-right', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;bottom:0px;left:0px;', imgStyle: 'width:220px;transform:rotateY(180deg);' },
  { src: '/aseets/pohon-errol-r.webp', aos: 'fade-left', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;bottom:0px;left:0px;right:0px;', imgStyle: 'width:220px;' },
  { src: '/aseets/pilar-errol.webp', aos: 'fade-up', offset: 0, containerStyle: 'position:absolute;bottom:0px;left:0px;right:0px;', imgStyle: 'width:100%;transform:rotateX(180deg);' },
  { src: '/aseets/pilar-errol.webp', aos: 'fade-down', offset: 0, containerStyle: 'position:absolute;top:0px;left:0px;right:0px;', imgStyle: 'width:100%;' },
];

export const RSVP_UPPER_ORNAMENTS: OrnamentLayer[] = [
  { src: '/aseets/chanderlier-candi.webp', aos: 'fade-right', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;top:0px;left:0px;', imgStyle: 'width:100px;' },
  { src: '/aseets/chanderlier-candi.webp', aos: 'fade-left', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;top:0px;left:0px;right:0px;', imgStyle: 'width:100px;' },
  { src: '/aseets/daun-candi.webp', aos: 'fade-down', offset: 0, duration: 1300, containerStyle: 'position:absolute;top:0px;left:0px;right:0px;', imgStyle: 'width:100%;' },
  { src: '/aseets/daun-candi-2.webp', aos: 'fade-up', offset: 0, duration: 1300, containerStyle: 'position:absolute;bottom:30px;left:0px;right:0px;', imgStyle: 'width:100%;animation:anim_rl 20s linear 1s infinite normal forwards;' },
  { src: '/aseets/candi.webp', aos: 'zoom-out-up', offset: 0, duration: 1200, containerStyle: 'position:absolute;bottom:0px;left:0px;right:0px;text-align:center;', imgStyle: 'width:80%;' },
  { src: '/aseets/wayang-candi-l.webp', aos: 'fade-right', offset: 0, duration: 1100, containerStyle: 'position:absolute;bottom:0px;left:0px;', imgStyle: 'width:110px;animation:anim_bottom_l 10s linear 1s infinite normal forwards;' },
  { src: '/aseets/wayang-candi-r.webp', aos: 'fade-left', offset: 0, duration: 1100, containerStyle: 'position:absolute;bottom:0px;right:0px;text-align:right;', imgStyle: 'width:120px;animation:anim_bottom_r 10s linear 1s infinite normal forwards;' },
  { src: '/aseets/bunga-candi-b2.webp', aos: 'zoom-out-up', offset: 0, duration: 1000, containerStyle: 'position:absolute;bottom:0px;left:0px;right:0px;', imgStyle: 'width:100%;animation:anim_rl 15s linear 1s infinite normal forwards;' },
  { src: '/aseets/bunga-candi-l.webp', aos: 'fade-right', offset: 0, duration: 1100, containerStyle: 'text-align:left;position:absolute;bottom:0px;left:0px;', imgStyle: 'width:150px;animation:anim_bottom_l 12s linear 1s infinite normal forwards;' },
  { src: '/aseets/bunga-candi-r.webp', aos: 'fade-left', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;bottom:0px;left:0px;right:0px;', imgStyle: 'width:150px;animation:anim_bottom_r 12s linear 1s infinite normal forwards;' },
];

export const GIFT_ORNAMENTS: OrnamentLayer[] = [
  { src: '/aseets/pohon-candi-l.webp', aos: 'fade-right', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;bottom:50px;left:-50px;', imgStyle: 'width:160px;' },
  { src: '/aseets/pohon-candi-l2.webp', aos: 'fade-right', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;bottom:160px;left:0px;', imgStyle: 'width:120px;animation:anim_bottom_l 10s linear 1s infinite normal forwards;' },
  { src: '/aseets/pohon-candi-al.webp', aos: 'fade-right', offset: 0, duration: 1100, containerStyle: 'text-align:left;position:absolute;top:0px;left:0px;right:0px;', imgStyle: 'width:50%;animation:anim_top_r 10s linear 1s infinite normal forwards;' },
  { src: '/aseets/pohon-candi-ar.webp', aos: 'fade-left', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;top:0px;left:0px;right:0px;', imgStyle: 'width:50%;animation:anim_top_l 10s linear 1s infinite normal forwards;' },
  { src: '/aseets/pohon-errol-bl.webp', aos: 'fade-right', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;bottom:0px;left:60px;', imgStyle: 'width:220px;animation:anim_bottom_r 13s linear 1s infinite normal forwards;' },
  { src: '/aseets/chanderlier-candi.webp', aos: 'fade-right', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;top:0px;left:0px;', imgStyle: 'width:100px;' },
  { src: '/aseets/chanderlier-candi.webp', aos: 'fade-left', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;top:0px;left:0px;right:0px;', imgStyle: 'width:100px;' },
  { src: '/aseets/daun-candi.webp', aos: 'fade-down', offset: 0, duration: 1300, containerStyle: 'position:absolute;top:0px;left:0px;right:0px;', imgStyle: 'width:100%;' },
  { src: '/aseets/daun-candi-2.webp', aos: 'fade-up', offset: 0, duration: 1300, containerStyle: 'position:absolute;bottom:0px;left:0px;right:0px;', imgStyle: 'width:100%;animation:anim_rl 20s linear 1s infinite normal forwards;' },
  { src: '/aseets/candi.webp', aos: 'zoom-out-up', offset: 0, duration: 1200, containerStyle: 'position:absolute;bottom:0px;left:-120px;right:0px;text-align:left;', imgStyle: 'width:60%;' },
  { src: '/aseets/bunga-candi-b.webp', aos: 'zoom-out-up', offset: 0, duration: 1000, containerStyle: 'position:absolute;bottom:0px;left:0px;right:0px;', imgStyle: 'width:100%;' },
  { src: '/aseets/bunga-candi-r.webp', aos: 'fade-left', offset: 0, duration: 1100, containerStyle: 'text-align:right;position:absolute;bottom:0px;left:0px;right:0px;', imgStyle: 'width:150px;animation:anim_bottom_r 12s linear 1s infinite normal forwards;' },
];
