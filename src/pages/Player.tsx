import { MessageCircle } from "lucide-react";
import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Module } from "../components/Module";
import * as Accordion from "@radix-ui/react-accordion";
import { useEffect, useState } from "react";
import { ModuleSkeleton } from "../components/ModuleSkeleton";
import { useCurrentLesson, useStore } from "../zustand-store";

export function Player() {
  const { course, load, isCourseLoading } = useStore((store) => {
    return {
      course: store.course,
      load: store.load,
      isCourseLoading: store.isLoading,
    };
  });

  const { currentModule, currentLesson } = useCurrentLesson();

  const [activeAccordion, setActiveAccordion] = useState(currentModule?.title);

  useEffect(() => {
    if (currentModule) {
      setActiveAccordion(currentModule.title);
    }
  }, [currentModule]);

  useEffect(() => {
    if (currentLesson) {
      document.title = `Assistindo: ${currentLesson.title}`;
    }
  }, [currentLesson]);

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center px-4">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          {/* Header */}
          <Header />

          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
            <MessageCircle className="w-4 h-4" />
            Deixar feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>

          <aside className="w-80 border-l border-zinc-800 bg-zinc-900 absolute top-0 bottom-0 right-0 overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 divide-y-2 divide-zinc-900">
            <Accordion.Root
              type="single"
              collapsible
              value={activeAccordion}
              onValueChange={(newActiveAccordion) =>
                setActiveAccordion(newActiveAccordion)
              }>
              {isCourseLoading ? (
                <>
                  <ModuleSkeleton id="1" />
                  <ModuleSkeleton id="2" />
                  <ModuleSkeleton id="3" />
                </>
              ) : (
                course &&
                course.modules.map((module, index) => {
                  return (
                    <Module
                      key={module.id}
                      moduleIndex={index}
                      title={module.title}
                      amountOfLessons={module.lessons.length}
                    />
                  );
                })
              )}
            </Accordion.Root>
          </aside>
        </main>
      </div>
    </div>
  );
}
