type CounterProps = {
  to: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

/**
 * Renders a formatted number. Previously animated the count-up via
 * IntersectionObserver + React state, but that depended on client JS
 * hydrating successfully — unreliable on some mobile browsers/environments.
 * A static, always-correct number beats an animation that can get stuck.
 */
export function Counter({ to, prefix = "", suffix = "", className = "" }: CounterProps) {
  return (
    <span className={className}>
      {prefix}
      {to.toLocaleString()}
      {suffix}
    </span>
  );
}
