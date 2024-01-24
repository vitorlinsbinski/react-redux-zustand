import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useAppSelector } from "..";
import { api } from "../../lib/axios";

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
}

const initialState: PlayerState = {
  course: null,
  currentLessonIndex: 0,
  currentModuleIndex: 0,
  isLoading: true,
};

// Actions assíncronas
export const loadCourse = createAsyncThunk("player/load", async () => {
  const response = await api.get("/courses/1");

  return response.data;
});

const playerSlice = createSlice({
  name: "player",
  initialState,

  reducers: {
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentModuleIndex = action.payload[0];
      state.currentLessonIndex = action.payload[1];
    },
    next: (state) => {
      const isNextLesson =
        state.course?.modules[state.currentModuleIndex].lessons[
          state.currentLessonIndex + 1
        ];

      const isNextModule = state.course?.modules[state.currentModuleIndex + 1];

      if (isNextLesson) {
        state.currentLessonIndex += 1;
      } else if (isNextModule) {
        state.currentModuleIndex += 1;
        state.currentLessonIndex = 0;
      }
    },
  },

  extraReducers(builder) {
    builder.addCase(
      loadCourse.fulfilled,
      (state, action: PayloadAction<Course>) => {
        state.course = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(loadCourse.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const player = playerSlice.reducer;

export const { play, next } = playerSlice.actions;

export const useCurrentLesson = () => {
  return useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player;

    const currentModule = state.player.course?.modules[currentModuleIndex];
    const currentLesson = currentModule?.lessons[currentLessonIndex];

    return { currentModule, currentLesson };
  });
};
