interface MarqueeItemProps {
  title: string;
}

export default function MarqueeItem({
  title,
}: MarqueeItemProps) {
  return (
    <div className="flex shrink-0 items-center gap-1">
      <span className="whitespace-nowrap text-base md:text-[22px] font-bold leading-6 md:leading-8 text-white avenir-700">
        {title}
      </span>

      <span className="relative top-1.5 inline-block size-1.5 shrink-0 bg-primary">▪</span>
    </div>
  );
}
