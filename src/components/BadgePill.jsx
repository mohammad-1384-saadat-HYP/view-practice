export default function BadgePill({ icon: Icon, label, variant = "gold" }) {
  const variants = {
    gold: "border-gold-500 text-ink dark:text-paper",
    muted: "border-gray-700/60 text-white",
  };
  return (
    <div
      className={`inline-flex items-center justify-center gap-2 rounded-full border px-4 py-1.5 ${variants[variant] || variants.gold}`}
    >
      {Icon && (
        <Icon aria-hidden="true" className="size-4 shrink-0 text-gold-500 lg:size-5" />
      )}
      <span className="text-[11px] font-bold uppercase lg:text-sm">
        {label}
      </span>
    </div>
  );
}
