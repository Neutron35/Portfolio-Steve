import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card.tsx';

function Timeline({ content }) {
  return (
    <div className="p-6 sm:p-10">
      <div className="relative grid gap-10 pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-white">
        {content.map((item, index) => (
          <div key={index} className="relative grid gap-1 text-sm">
            <HoverCard>
              <HoverCardTrigger>
                <div className="absolute left-1 top-1 z-10 aspect-square w-3 translate-x-[-33px] rounded-full bg-white md:left-0" />
                <div className="text-lg font-bold">{item.title}</div>
                <div className="text-gray-500 dark:text-gray-400">{item.description}</div>
              </HoverCardTrigger>
              <HoverCardContent>
                <ul>
                  <li>test</li>
                </ul>
              </HoverCardContent>
            </HoverCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;