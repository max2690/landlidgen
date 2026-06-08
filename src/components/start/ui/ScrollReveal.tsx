"use client";

import { useEffect } from "react";

function setupDelays(root: ParentNode) {
  root.querySelectorAll("[data-stagger]").forEach((container) => {
    const step = Number(container.getAttribute("data-stagger")) || 120;
    const items = container.querySelectorAll("[data-reveal]");

    items.forEach((item, index) => {
      const customDelay = item.getAttribute("data-reveal-delay");
      const delay = customDelay ?? String(index * step);
      (item as HTMLElement).style.setProperty("--reveal-delay", `${delay}ms`);
    });
  });

  root.querySelectorAll("[data-reveal-delay]").forEach((item) => {
    if (item.closest("[data-stagger]")) return;
    const delay = item.getAttribute("data-reveal-delay") ?? "0";
    (item as HTMLElement).style.setProperty("--reveal-delay", `${delay}ms`);
  });
}

export function ScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }

    setupDelays(document);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    const revealElements = document.querySelectorAll("[data-reveal]");
    revealElements.forEach((el) => observer.observe(el));

    let raf = 0;
    const parallaxElements = document.querySelectorAll<HTMLElement>(
      "[data-parallax]",
    );

    const isMobile =
      window.matchMedia("(max-width: 767px)").matches ||
      window.matchMedia("(hover: none)").matches;

    const onScroll = () => {
      if (isMobile) return;

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const viewport = window.innerHeight;

        parallaxElements.forEach((el) => {
          const speed = Number(el.dataset.parallax) || 0.15;
          const rect = el.getBoundingClientRect();
          const progress = (viewport - rect.top) / (viewport + rect.height);
          const clamped = Math.min(Math.max(progress, 0), 1);
          const shift = (clamped - 0.5) * speed * 120;
          el.style.transform = `translate3d(0, ${shift}px, 0) scale(1.05)`;
        });
      });
    };

    if (!isMobile) {
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    const tiltElements = document.querySelectorAll<HTMLElement>("[data-tilt]");

    const onPointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      tiltElements.forEach((el) => {
        const strength = Number(el.dataset.tilt) || 4;
        el.style.setProperty("--tilt-x", `${y * strength}deg`);
        el.style.setProperty("--tilt-y", `${-x * strength}deg`);
      });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
