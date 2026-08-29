import type { AnchorHTMLAttributes, CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type GlassmorphismCtaProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  spread?: string;
  shimmerColor?: string;
  speed?: string;
};

export default function GlassmorphismCta({
  label = "Generate My Site",
  avatarSrc: _avatarSrc,
  avatarAlt: _avatarAlt,
  spread = "90deg",
  shimmerColor = "rgba(59,130,246,0.95)",
  speed = "4s",
  className,
  href = "#",
  onClick,
  ...props
}: GlassmorphismCtaProps) {
  return (
    <a
      href={href}
      onClick={(event) => {
        if (href === "#") event.preventDefault();
        onClick?.(event);
      }}
      className={cn(
        "group isolate relative inline-flex cursor-pointer overflow-hidden rounded-full shadow-[0_8px_40px_rgba(37,99,235,0.22)] transition-all duration-150 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(37,99,235,0.35)]",
        className,
      )}
      style={{
        "--spread": spread,
        "--shimmer-color": shimmerColor,
        "--radius": "9999px",
        "--speed": speed,
        "--cut": "1px",
          "--bg": "rgba(5, 7, 12, 0.76)",
      } as CSSProperties}
      {...props}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-[-200%] h-[400%] w-[400%] [animation:rotate-gradient_var(--speed)_linear_infinite]">
          <div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
        </div>
      </div>
      <div className="absolute inset-[var(--cut)] rounded-full bg-[var(--bg)] backdrop-blur" />
      <div className="relative z-10 flex w-full items-center gap-2 overflow-hidden px-4 py-3 text-base font-medium text-white">
        <div className="absolute left-1/2 top-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 [animation:borderBeamRotation_4s_linear_infinite] bg-[linear-gradient(90deg,transparent,rgba(59,130,246,0.68),rgba(96,165,250,0.88),rgba(59,130,246,0.68),transparent)]" />
        <div className="absolute inset-px rounded-full bg-[linear-gradient(135deg,rgba(18,20,29,0.96),rgba(5,7,12,0.94)_55%,rgba(2,3,7,0.98))] backdrop-blur-[8px]" />
        <span className="relative z-10 whitespace-nowrap font-sans">{label}</span>
        <span className="relative z-10 ml-1 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-xl">
          <ArrowUpRight className="h-4 w-4 text-white" strokeWidth={1.7} />
        </span>
      </div>
    </a>
  );
}
