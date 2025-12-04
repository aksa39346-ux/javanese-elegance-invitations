import { cn } from "@/lib/utils";

interface JawaOrnamentProps {
  className?: string;
  variant?: "top" | "bottom" | "divider";
}

export function JawaOrnament({ className, variant = "divider" }: JawaOrnamentProps) {
  if (variant === "divider") {
    return (
      <div className={cn("flex items-center justify-center gap-4 py-4", className)}>
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent" />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-accent"
        >
          <path
            d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
            fill="currentColor"
          />
        </svg>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent" />
      </div>
    );
  }

  if (variant === "top") {
    return (
      <div className={cn("w-full overflow-hidden", className)}>
        <svg
          viewBox="0 0 400 60"
          className="w-full h-auto text-accent"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M0,60 Q50,40 100,50 T200,30 T300,50 T400,60"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.3"
          />
          <path
            d="M0,55 Q50,35 100,45 T200,25 T300,45 T400,55"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.5"
          />
          <circle cx="200" cy="30" r="4" fill="currentColor" />
          <circle cx="100" cy="45" r="2" fill="currentColor" opacity="0.5" />
          <circle cx="300" cy="45" r="2" fill="currentColor" opacity="0.5" />
        </svg>
      </div>
    );
  }

  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <svg
        viewBox="0 0 400 60"
        className="w-full h-auto text-accent rotate-180"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M0,60 Q50,40 100,50 T200,30 T300,50 T400,60"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.3"
        />
        <path
          d="M0,55 Q50,35 100,45 T200,25 T300,45 T400,55"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
        />
        <circle cx="200" cy="30" r="4" fill="currentColor" />
        <circle cx="100" cy="45" r="2" fill="currentColor" opacity="0.5" />
        <circle cx="300" cy="45" r="2" fill="currentColor" opacity="0.5" />
      </svg>
    </div>
  );
}
