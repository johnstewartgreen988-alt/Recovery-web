import type { ReactNode } from "react";

type RevealProps = {
  children?: ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Fade-up entrance, driven entirely by CSS (no JS/hydration required).
 * Animates once on mount rather than on scroll-into-view — a deliberate
 * trade for reliability: content can never get stuck invisible, even if
 * client JS fails to hydrate on a given device/browser.
 */
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  return (
    <div
      className={`animate-fade-up ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
