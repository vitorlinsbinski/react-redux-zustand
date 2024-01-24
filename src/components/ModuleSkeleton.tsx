import { ChevronDown } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { LessonSkeleton } from "./LessonSkeleton";

export function ModuleSkeleton({ id }: { id: string }) {
  return (
    <Accordion.Item value={id} className="group border-b-2 border-zinc-900">
      <Accordion.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4 relative z-1">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs animate-pulse" />

        <div className="flex flex-col text-left gap-2">
          <div className="w-36 h-2 bg-zinc-700 animate-pulse" />
          <div className="w-12 h-2 bg-zinc-700 animate-pulse" />
        </div>

        <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-all ease-in-out duration-300" />
      </Accordion.Trigger>

      <Accordion.Content className="group data-[state=open]:animate-slideDownAndFade data-[state=closed]:animate-slideUpAndFade overflow-hidden">
        <nav className="relative flex flex-col gap-4 p-6 group-data-[state=open]:translate-y-0 group-data-[state=closed]:-translate-y-full transition-all duration-300">
          <LessonSkeleton />
          <LessonSkeleton />
          <LessonSkeleton />
          <LessonSkeleton />
        </nav>
      </Accordion.Content>
    </Accordion.Item>
  );
}
