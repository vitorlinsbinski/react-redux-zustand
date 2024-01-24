import { create } from "zustand";
import { api } from "../lib/axios";

interface Course {
  id: number;
  modules: Array<{
    id: number;
    title: string;
    lessons: Array<{
      id: string;
      title: string;
      duration: string;
    }>;
  }>;
}

export interface PlayerState {
  course: Course | null;
  currentModuleIndex: number;
  currentLessonIndex: number;
  isLoading: boolean;

  play: ([moduleIndex, lessonIndex]: [number, number]) => void;
  next: () => void;
  load: () => Promise<void>;
}

export const useStore = create<PlayerState>((set, get) => {
  return {
    course: null,
    currentLessonIndex: 0,
    currentModuleIndex: 0,
    isLoading: true,

    load: async () => {
      try {
        set({ isLoading: true });
        const response = await api.get("/courses/1");
        set({ course: response.data });
      } catch (error) {
        console.log(
          "It occured an error trying to fetch the course data: ",
          error
        );
      } finally {
        set({ isLoading: false });
      }
    },

    play: ([moduleIndex, lessonIndex]: [number, number]) => {
      set({
        currentModuleIndex: moduleIndex,
        currentLessonIndex: lessonIndex,
      });
    },

    next: () => {
      const { course, currentModuleIndex, currentLessonIndex } = get();
      const isNextLesson =
        course?.modules[currentModuleIndex].lessons[currentLessonIndex + 1];

      const isNextModule = course?.modules[currentModuleIndex + 1];

      if (isNextLesson) {
        set({
          currentLessonIndex: currentLessonIndex + 1,
        });
      } else if (isNextModule) {
        set({
          currentModuleIndex: currentModuleIndex + 1,
          currentLessonIndex: 0,
        });
      }
    },
  };
});

export const useCurrentLesson = () => {
  return useStore((state) => {
    const { currentModuleIndex, currentLessonIndex } = state;

    const currentModule = state.course?.modules[currentModuleIndex];
    const currentLesson = currentModule?.lessons[currentLessonIndex];

    return { currentModule, currentLesson };
  });
};
