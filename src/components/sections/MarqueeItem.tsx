interface MarqueeItemProps {
  title: string;
}

export default function MarqueeItem({
  title,
}: MarqueeItemProps) {
  return (
    <div className="flex shrink-0 items-center gap-1">
      <span className="whitespace-nowrap text-[16px] md:text-[22px] font-bold leading-[24px] md:leading-[32px] text-white">
        {title}
      </span>

     <span className="relative top-[6px] inline-block h-[6px] w-[6px] shrink-0 bg-[#1F6FD0]">▪</span>
    </div>
  );
}