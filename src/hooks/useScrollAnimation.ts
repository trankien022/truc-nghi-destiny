import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    triggerOnce = true,
    delay = 0,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check if IntersectionObserver is available (not in test environment)
    if (typeof window === "undefined" || !window.IntersectionObserver) {
      setIsVisible(true);
      return;
    }

    // Check for reduced motion preference
    const prefersReducedMotion =
      typeof window !== "undefined" && window.matchMedia
        ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
        : false;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true);
              if (triggerOnce) {
                setHasTriggered(true);
              }
            }, delay);
          } else {
            setIsVisible(true);
            if (triggerOnce) {
              setHasTriggered(true);
            }
          }
        } else if (!triggerOnce && !hasTriggered) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, delay, hasTriggered]);

  return { elementRef, isVisible };
};

// Hook for staggered animations (for lists/grids)
export const useStaggeredAnimation = (
  itemCount: number,
  options: UseScrollAnimationOptions & { staggerDelay?: number } = {}
) => {
  const { staggerDelay = 100, ...scrollOptions } = options;
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(itemCount).fill(false)
  );
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if IntersectionObserver is available (not in test environment)
    if (typeof window === "undefined" || !window.IntersectionObserver) {
      setVisibleItems(new Array(itemCount).fill(true));
      return;
    }

    // Check for reduced motion preference
    const prefersReducedMotion =
      typeof window !== "undefined" && window.matchMedia
        ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
        : false;
    if (prefersReducedMotion) {
      setVisibleItems(new Array(itemCount).fill(true));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger items with staggered delay
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const newState = [...prev];
                newState[i] = true;
                return newState;
              });
            }, i * staggerDelay + (scrollOptions.delay || 0));
          }
        }
      },
      {
        threshold: scrollOptions.threshold || 0.1,
        rootMargin: scrollOptions.rootMargin || "0px 0px -50px 0px",
      }
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, [
    itemCount,
    staggerDelay,
    scrollOptions.threshold,
    scrollOptions.rootMargin,
    scrollOptions.delay,
  ]);

  return { containerRef, visibleItems };
};

// Utility function to get animation classes
export const getAnimationClasses = (
  isVisible: boolean,
  animationType:
    | "fade-in"
    | "fade-in-up"
    | "fade-in-down"
    | "fade-in-left"
    | "fade-in-right"
    | "scale-in"
    | "scale-in-bounce"
    | "slide-up" = "fade-in-up",
  duration:
    | "duration-300"
    | "duration-400"
    | "duration-500"
    | "duration-600" = "duration-600"
) => {
  const baseClasses = `transition-all ${duration} ease-out-expo`;

  if (isVisible) {
    return `${baseClasses} animate-${animationType}`;
  }

  // Initial hidden state
  switch (animationType) {
    case "fade-in-up":
    case "slide-up":
      return `${baseClasses} opacity-0 translate-y-8`;
    case "fade-in-down":
      return `${baseClasses} opacity-0 -translate-y-8`;
    case "fade-in-left":
      return `${baseClasses} opacity-0 -translate-x-8`;
    case "fade-in-right":
      return `${baseClasses} opacity-0 translate-x-8`;
    case "scale-in":
    case "scale-in-bounce":
      return `${baseClasses} opacity-0 scale-95`;
    default:
      return `${baseClasses} opacity-0`;
  }
};
