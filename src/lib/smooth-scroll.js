// src/lib/smooth-scroll.js
import Lenis from "@studio-freight/lenis";

export class SmoothScroll {
  constructor() {
    this.lenis = null;
    this.isInitialized = false;
  }

  init() {
    if (this.isInitialized || typeof window === "undefined") return;

    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 1.5,
      wheelMultiplier: 1.2,
    });

    // RAF loop
    const raf = (time) => {
      this.lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    this.isInitialized = true;

    // Add CSS for smooth scrolling
    this.addSmoothScrollCSS();
  }

  addSmoothScrollCSS() {
    const style = document.createElement("style");
    style.textContent = `
      html.lenis, html.lenis body {
        height: auto;
      }
      
      .lenis.lenis-smooth {
        scroll-behavior: auto !important;
      }
      
      .lenis.lenis-smooth [data-lenis-prevent] {
        overscroll-behavior: contain;
      }
      
      .lenis.lenis-stopped {
        overflow: hidden;
      }
    `;
    document.head.appendChild(style);
  }

  destroy() {
    if (this.lenis) {
      this.lenis.destroy();
      this.lenis = null;
      this.isInitialized = false;
    }
  }
}

// Singleton instance
export const smoothScroll = new SmoothScroll();
