type AdSlotProps = {
  id: string;
  label?: string;
  className?: string;
  size?: "banner" | "sidebar";
};

const sizeClass = {
  banner: "min-h-24",
  sidebar: "min-h-64",
};

export function AdSlot({ id, label = "Advertisement", className = "", size = "banner" }: AdSlotProps) {
  const placeholdersEnabled = process.env.NEXT_PUBLIC_ENABLE_AD_PLACEHOLDERS === "true";

  if (!placeholdersEnabled) {
    return null;
  }

  return (
    <aside
      data-ad-slot={id}
      aria-label={label}
      className={`my-8 flex w-full items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 px-4 text-center text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-400 shadow-inner dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-500 ${sizeClass[size]} ${className}`}
    >
      <span>{label}</span>
    </aside>
  );
}
