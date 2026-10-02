// src/lib/smooth-scroll.js
import Lenis from "@studio-freight/lenis";

export class SmoothScroll {
  constructor() {
    this.lenis = null;
    this.isInitialized = false;
    this.rafId = null;
    this.styleElement = null;
    this.raf = this.raf.bind(this);
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

    this.rafId = requestAnimationFrame(this.raf);
    this.isInitialized = true;

    // Add CSS for smooth scrolling
    this.addSmoothScrollCSS();
  }

  raf(time) {
    if (!this.lenis) return;
    this.lenis.raf(time);
    this.rafId = requestAnimationFrame(this.raf);
  }

  addSmoothScrollCSS() {
    if (this.styleElement || typeof document === "undefined") return;

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
    this.styleElement = style;
  }

  stop() {
    if (this.lenis) this.lenis.stop();
  }

  start() {
    if (this.lenis) this.lenis.start();
  }

  destroy() {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }

    if (this.lenis) {
      this.lenis.destroy();
      this.lenis = null;
    }

    if (this.styleElement) {
      this.styleElement.remove();
      this.styleElement = null;
    }

    this.isInitialized = false;
  }
}

// Singleton instance
export const smoothScroll = new SmoothScroll();
