import { Video } from "lucide-react";

export function LessonSkeleton() {
  return (
    <button className="flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-400 enabled:hover:text-zinc-100 transition-colors">
      <Video className="w-4 h-4 text-zinc-500" />
      <div className="w-16 h-2 bg-zinc-700 animate-pulse" />

      <span className="ml-auto font-mono text-xs text-zinc-500">00:00</span>
    </button>
  );
}
