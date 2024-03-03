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
      type: false,
      enabled: false,
      milliseconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
    },
  },
  reducers: {
    updateTime: (state) => {
      state.time = new Date();
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

    toggleStopwatch: (state, action) => {
      state.stopwatch.enabled = !state.stopwatch.enabled;
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
    },

    toggleTimer: (state) => {
      state.timer.enabled = !state.timer.enabled;
    },

    resetTimer: (state, action) => {
      state.timer = {
        type: false,
        enabled: false,
        milliseconds: 0,
        seconds: 0,
        minutes: 0,
        hours: 0,
      };
    },

    switchTimerType: (state, action) => {
      state.timer.type = !state.timer.type;
    },

    setTimer: (state, action) => {
      state.timer = {
        type: true,
        enabled: false,
        milliseconds: action.payload.milliseconds,
        seconds: action.payload.seconds,
        minutes: action.payload.minutes,
        hours: action.payload.hours,
      };
    },

    calculateTime: (state) => {
      let total_minutes = parseInt(
        Math.floor(state.timer.hours * 60 + parseInt(state.timer.minutes))
      );

      let total_seconds = parseInt(
        Math.floor(total_minutes * 60 + parseInt(state.timer.seconds))
      );

      let total_milliseconds = parseInt(Math.floor(total_seconds * 100));

      state.timer.milliseconds = total_milliseconds;
    },
  },
});

export const {
  updateTime,
  toggleStopwatch,
  updateStopwatch,
  resetStopwatch,
  updateTimer,
  toggleTimer,
  resetTimer,
  switchTimerType,
  setTimer,
  calculateTime,
} = slice.actions;

export default slice.reducer;
