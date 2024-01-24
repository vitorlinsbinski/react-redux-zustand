import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";
import * as Accordion from "@radix-ui/react-accordion";
import { useAppDispatch, useAppSelector } from "../store";
import { play } from "../store/slices/player";

interface ModuleProps {
  moduleIndex: number;
  title: string;
  amountOfLessons: number;
}

export function Module({ moduleIndex, title, amountOfLessons }: ModuleProps) {
  const dispatch = useAppDispatch();

  const { currentModuleIndex, currentLessonIndex } = useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player;

    return { currentModuleIndex, currentLessonIndex };
  });

  const lessons = useAppSelector(
    (state) => state.player.course?.modules[moduleIndex].lessons
  );

  return (
    <Accordion.Item value={title} className="group border-b-2 border-zinc-900">
      <Accordion.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4 relative z-1">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">
            {amountOfLessons} {amountOfLessons === 1 ? "aula" : "aulas"}
          </span>
        </div>

        <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-all ease-in-out duration-300" />
      </Accordion.Trigger>

      <Accordion.Content className="group data-[state=open]:animate-slideDownAndFade data-[state=closed]:animate-slideUpAndFade overflow-hidden">
        <nav className="relative flex flex-col gap-4 p-6 group-data-[state=open]:translate-y-0 group-data-[state=closed]:-translate-y-full transition-all duration-300">
          {lessons &&
            lessons.map((lesson, lessonIndex) => {
              const isCurrent =
                currentModuleIndex === moduleIndex &&
                currentLessonIndex === lessonIndex;

              return (
                <Lesson
                  key={lesson.id}
                  title={lesson.title}
                  duration={lesson.duration}
                  onPlay={() => dispatch(play([moduleIndex, lessonIndex]))}
                  isCurrent={isCurrent}
                />
              );
            })}
        </nav>
      </Accordion.Content>
    </Accordion.Item>
  );
}
