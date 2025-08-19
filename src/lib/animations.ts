import { cn } from "./utils";

// Animation class builders
export const fadeInUp = (delay: number = 0) => {
  const delayClass = delay > 0 ? `delay-[${delay}ms]` : "";
  return cn(
    "opacity-0 translate-y-8 transition-all duration-600 ease-out-expo",
    delayClass
  );
};

export const fadeInDown = (delay: number = 0) =>
  cn(
    "opacity-0 -translate-y-8 transition-all duration-600 ease-out-expo",
    delay > 0 && `delay-[${delay}ms]`
  );

export const fadeInLeft = (delay: number = 0) =>
  cn(
    "opacity-0 -translate-x-8 transition-all duration-600 ease-out-expo",
    delay > 0 && `delay-[${delay}ms]`
  );

export const fadeInRight = (delay: number = 0) =>
  cn(
    "opacity-0 translate-x-8 transition-all duration-600 ease-out-expo",
    delay > 0 && `delay-[${delay}ms]`
  );

export const scaleIn = (delay: number = 0) =>
  cn(
    "opacity-0 scale-95 transition-all duration-400 ease-out-expo",
    delay > 0 && `delay-[${delay}ms]`
  );

// Hover effect classes
export const cardHover = cn(
  "transition-all duration-300 ease-out",
  "hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10",
  "hover:bg-opacity-90"
);

export const buttonHover = cn(
  "transition-all duration-300 ease-out",
  "hover:scale-105 hover:shadow-lg hover:shadow-primary/25",
  "hover:-translate-y-0.5"
);

export const imageHover = cn(
  "transition-all duration-300 ease-out",
  "hover:scale-105 hover:brightness-110"
);

export const iconHover = cn(
  "transition-all duration-200 ease-out",
  "hover:scale-110 hover:rotate-3"
);

// Interactive element classes
export const focusRing = cn(
  "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
  "transition-all duration-200"
);

export const linkUnderline = cn(
  "relative overflow-hidden",
  "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0",
  "after:bg-primary after:transition-all after:duration-300",
  "hover:after:w-full"
);

// Loading and pulse animations
export const pulseAnimation = cn("animate-pulse");

export const loadingSpinner = cn(
  "animate-spin rounded-full border-2 border-gray-300 border-t-primary"
);

// Stagger delay utilities
export const getStaggerDelay = (index: number, baseDelay: number = 100) =>
  `delay-[${index * baseDelay}ms]`;

// Animation state classes
export const animationVisible = cn(
  "opacity-100 translate-y-0 translate-x-0 scale-100"
);

export const animationHidden = (
  type: "up" | "down" | "left" | "right" | "scale" = "up"
) => {
  switch (type) {
    case "up":
      return cn("opacity-0 translate-y-8");
    case "down":
      return cn("opacity-0 -translate-y-8");
    case "left":
      return cn("opacity-0 -translate-x-8");
    case "right":
      return cn("opacity-0 translate-x-8");
    case "scale":
      return cn("opacity-0 scale-95");
    default:
      return cn("opacity-0 translate-y-8");
  }
};

// Section animation presets
export const sectionAnimation = {
  container: cn("transition-all duration-600 ease-out-expo"),
  title: cn("transition-all duration-600 ease-out-expo delay-100"),
  subtitle: cn("transition-all duration-600 ease-out-expo delay-200"),
  content: cn("transition-all duration-600 ease-out-expo delay-300"),
};

// Hero section specific animations
export const heroAnimation = {
  title: cn("transition-all duration-800 ease-out-expo", "animate-fade-in-up"),
  subtitle: cn(
    "transition-all duration-600 ease-out-expo delay-200",
    "animate-fade-in-up"
  ),
  cta: cn(
    "transition-all duration-400 ease-out-expo delay-400",
    "animate-scale-in"
  ),
};

// Process step animations
export const processStepAnimation = (index: number) =>
  cn(
    "transition-all duration-600 ease-out-expo",
    `delay-[${index * 150}ms]`,
    "animate-fade-in-up"
  );

// Testimonial card animations
export const testimonialAnimation = (index: number) =>
  cn(
    "transition-all duration-600 ease-out-expo",
    `delay-[${index * 100}ms]`,
    "animate-fade-in-up"
  );

// FAQ accordion animations
export const accordionAnimation = cn(
  "transition-all duration-300 ease-out",
  "hover:bg-primary/5"
);

// Form input animations
export const inputAnimation = cn(
  "transition-all duration-200 ease-out",
  "focus:border-primary focus:ring-2 focus:ring-primary/20",
  "focus:scale-[1.02]"
);

// Micro-interaction utilities
export const microInteraction = {
  bounce: cn("hover:animate-bounce-subtle"),
  glow: cn("hover:animate-glow"),
  float: cn("animate-float"),
  pulse: cn("animate-pulse"),
};

// Responsive animation utilities
export const responsiveAnimation = {
  mobile: cn("sm:animate-none"), // Disable animations on mobile if needed
  desktop: cn("hidden sm:block"), // Show only on desktop
};

// Animation group utilities for complex sequences
export const animationGroup = {
  stagger: (items: number) =>
    Array.from({ length: items }, (_, i) =>
      cn("transition-all duration-600 ease-out-expo", `delay-[${i * 100}ms]`)
    ),
  sequence: (delays: number[]) =>
    delays.map((delay) =>
      cn("transition-all duration-600 ease-out-expo", `delay-[${delay}ms]`)
    ),
};
