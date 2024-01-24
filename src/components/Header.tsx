import { useCurrentLesson, useStore } from "../zustand-store";

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson();

  const isCourseLoading = useStore((store) => store.isLoading);

  return isCourseLoading ? (
    <div className="flex flex-col gap-2">
      <div className="w-40 h-4 bg-zinc-700 animate-pulse" />
      <div className="w-24 h-4 bg-zinc-700 animate-pulse" />
    </div>
  ) : (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
      <span className="text-sm text-zinc-400">{currentModule?.title}</span>
    </div>
  );
}
