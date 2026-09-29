import React from "react";

export default function GlassCard({
  children,
  variant = "default",
  className = "",
  hover = true,
  ...props
}) {
  let baseStyle = "glass-card";

  if (variant === "feature") {
    baseStyle = "glass-feature";
  } else if (variant === "floating") {
    baseStyle = "glass-floating";
  }

  const hoverStyle = hover ? "glass-card-hover" : "";

  return (
    <div
      className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative overflow-hidden ${baseStyle} ${hoverStyle} ${className}`}
      {...props}
    >
      {/* Subtle internal reflection hairline */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
