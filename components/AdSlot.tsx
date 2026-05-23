type AdSlotProps = {
  id: string;
  label?: string;
  className?: string;
  size?: "banner" | "rectangle" | "sidebar";
};

const sizeClass = {
  banner: "min-h-24 sm:min-h-28",
  rectangle: "min-h-64",
  sidebar: "min-h-72",
};

export function AdSlot({ id, label = "Advertisement", className = "", size = "banner" }: AdSlotProps) {
  const enabled = process.env.NEXT_PUBLIC_ENABLE_ADS === "true";
  return (
    <div
      id={id}
      className={`my-8 flex w-full items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 px-4 text-center text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-400 shadow-inner dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-500 ${sizeClass[size]} ${className}`}
      data-ads-enabled={enabled}
      data-ad-slot={id}
      aria-label={label}
    >
      {label}
    </div>
  );
}
