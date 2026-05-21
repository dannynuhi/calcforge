type AdSlotProps = {
  id: string;
  label?: string;
  className?: string;
};

export function AdSlot({ id, label = "Advertisement", className = "" }: AdSlotProps) {
  const enabled = process.env.NEXT_PUBLIC_ENABLE_ADS === "true";
  return (
    <div
      id={id}
      className={`my-8 flex min-h-28 items-center justify-center rounded border border-dashed border-zinc-300 bg-zinc-50 text-xs uppercase tracking-wide text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400 ${className}`}
      data-ads-enabled={enabled}
      aria-label={label}
    >
      {enabled ? label : "Ad space reserved"}
    </div>
  );
}
