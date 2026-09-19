import Link from "next/link";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary: "bg-accent-500 text-brand-950 hover:bg-accent-400",
  secondary:
    "bg-transparent text-brand-900 border-2 border-brand-900 hover:bg-brand-900 hover:text-white",
  ghost:
    "bg-transparent text-white border-2 border-white/40 hover:border-white hover:bg-white/10",
};

const iconBoxClasses: Record<Variant, string> = {
  primary: "bg-brand-950/10",
  secondary: "bg-brand-900/8 group-hover:bg-white/15",
  ghost: "bg-white/10",
};

type ButtonProps = {
  variant?: Variant;
  href?: string;
  icon?: boolean;
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<ElementType>;

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M2.5 7h9M7.5 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Button({
  variant = "primary",
  href,
  icon = true,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = [
    "group inline-flex items-center justify-center gap-3 rounded-xl py-2 pr-2 pl-5",
    "text-[15px] font-semibold tracking-tight whitespace-nowrap transition-colors duration-150",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600",
    variantClasses[variant],
    className,
  ].join(" ");

  const content = (
    <>
      {children}
      {icon && (
        <span
          className={[
            "flex h-8 w-8 items-center justify-center rounded-lg transition-transform duration-150 group-hover:translate-x-0.5",
            iconBoxClasses[variant],
          ].join(" ")}
        >
          <ArrowIcon />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
