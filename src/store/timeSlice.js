import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "time",
  initialState: {
    time: 0,
    date: "",
    stopwatch: {
      enabled: false,
      milliseconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
    },
    timer: {
      enabled: false,
      milliseconds: 7200000,
      seconds: 0,
      minutes: 0,
      hours: 0,
    },
  },
  reducers: {
    updateTime: (state, action) => {
      state.time = action.payload;
    },

    updateStopwatch: (state, action) => {
      if (state.stopwatch.enabled === false) return;

      state.stopwatch.milliseconds = state.stopwatch.milliseconds + 1;

      if (state.stopwatch.milliseconds === 100) {
        state.stopwatch.seconds = state.stopwatch.seconds + 1;
        state.stopwatch.milliseconds = 0;
      }

      if (state.stopwatch.seconds === 60) {
        state.stopwatch.minutes = state.stopwatch.minutes + 1;
        state.stopwatch.seconds = 0;
      }

      if (state.stopwatch.minutes === 60) {
        state.stopwatch.hours = state.stopwatch.hours + 1;
        state.stopwatch.minutes = 0;
      }
    },

    startStopwatch: (state, action) => {
      state.stopwatch.enabled = true;
    },

    stopStopwatch: (state, action) => {
      state.stopwatch.enabled = false;
    },

    resetStopwatch: (state, action) => {
      state.stopwatch = {
        enabled: false,
        milliseconds: 0,
        seconds: 0,
        minutes: 0,
        hours: 0,
      };
    },

    updateTimer: (state, action) => {
      if (state.timer.enabled === false) return;

      let total_seconds = parseInt(Math.floor(state.timer.milliseconds / 100));
      let total_minutes = parseInt(Math.floor(total_seconds / 60));
      let total_hours = parseInt(Math.floor(total_minutes / 60));

      state.timer.seconds = parseInt(total_seconds % 60);
      state.timer.minutes = parseInt(total_minutes % 60);
      state.timer.hours = parseInt(total_hours % 60);

      state.timer.milliseconds = state.timer.milliseconds - 1;

      /*
      if (state.timer.milliseconds === 0) {
        state.timer.seconds = state.timer.seconds - 1;
        state.timer.milliseconds = 0;
      }

      if (state.timer.seconds === 0) {
        state.timer.minutes = state.timer.minutes - 1;
        state.timer.seconds = 0;
      }

      if (state.timer.minutes === 0) {
        state.timer.hours = state.timer.hours - 1;
        state.timer.minutes = 0;
      }
      */
    },

    startTimer: (state, action) => {
      state.timer.enabled = true;
    },

    stopTimer: (state, action) => {
      state.timer.enabled = false;
    },

    resetTimer: (state, action) => {
      state.timer = {
        enabled: false,
        milliseconds: 0,
        seconds: 0,
        minutes: 0,
        hours: 0,
      };
    },
  },
});

export const {
  updateTime,
  startStopwatch,
  stopStopwatch,
  updateStopwatch,
  resetStopwatch,
  updateTimer,
  startTimer,
  stopTimer,
  resetTimer,
} = slice.actions;

export default slice.reducer;
