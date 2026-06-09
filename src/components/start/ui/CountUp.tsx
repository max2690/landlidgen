"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type CountUpProps = {
  value: string;
  className?: string;
  duration?: number;
};

function parseNumeric(value: string) {
  const cleaned = value.replace(/\s/g, "");
  const match = cleaned.match(/(~?)(\d+)/);
  if (!match) return null;

  return {
    prefix: match[1] ?? "",
    target: Number(match[2]),
    suffix: cleaned.slice(match[0].length),
  };
}

export function CountUp({
  value,
  className = "",
  duration = 1400,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const parsed = useMemo(() => parseNumeric(value), [value]);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const node = ref.current;
    if (!node || !parsed) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    const { prefix, target, suffix } = parsed;

    const runAnimation = () => {
      cancelAnimationFrame(frameRef.current);
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * eased);
        setDisplay(`${prefix}${current}${suffix}`);

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick);
        } else {
          setDisplay(value);
        }
      };

      frameRef.current = requestAnimationFrame(tick);
    };

    const reset = () => {
      cancelAnimationFrame(frameRef.current);
      setDisplay(`${prefix}0${suffix}`);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          runAnimation();
        } else {
          reset();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameRef.current);
    };
  }, [duration, parsed, value]);

  return (
    <span ref={ref} className={className} data-countup={parsed ? "true" : undefined}>
      {display}
    </span>
  );
}
