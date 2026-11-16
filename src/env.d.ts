/// <reference types="astro/client" />

interface Window {
  AOS?: {
    init: (options?: Record<string, unknown>) => void;
    refresh: () => void;
    refreshHard: () => void;
  };
  Swiper?: new (selector: string, options?: Record<string, unknown>) => {
    update: () => void;
  };
  jarallax?: (elements: NodeListOf<Element> | Element[], options?: Record<string, unknown> | string) => void;
  jQuery?: (selector: string) => {
    lightGallery?: (options?: Record<string, unknown>) => void;
  };
}
