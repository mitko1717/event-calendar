import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMonth, IDay, IEvent, IState } from "@/interfaces";
import { CALENDAR } from "../../../data/calendar";

const calendar =
  typeof window !== "undefined" && localStorage.getItem("calendar")
    ? JSON.parse(localStorage.getItem("calendar") || "")
    : [];

const initialState: IState = {
  chosenMonth: CALENDAR[0],
  monthIndex: 0,
  calendar: [],
  chosenDay: null,
  chosenEvent: null,
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    increaseMonthIndex(state) {
      state.monthIndex = state.monthIndex + 1;
      state.chosenMonth = state?.calendar[state.monthIndex];
      state.chosenDay = null;
    },
    decreaseMonthIndex(state) {
      state.monthIndex = state.monthIndex - 1;
      state.chosenMonth = state?.calendar[state.monthIndex];
      state.chosenDay = null;
    },
    setChosenMonth(state, action: PayloadAction<IMonth>) {
      state.chosenMonth = action.payload;
      state.chosenDay = null;
    },
    setCalendarAfterGetFromServer(state, action: PayloadAction<IMonth[]>) {
      state.calendar = calendar.length > 0 ? calendar : action.payload;
      state.chosenMonth = state.calendar[0];

      localStorage.setItem("calendar", JSON.stringify(state.calendar));
    },
    setChosenDay(state, action: PayloadAction<IDay>) {
      state.chosenDay = action.payload;
    },
    pushEvent(state, action: PayloadAction<IEvent>) {
      let findMonth = state.calendar.find(
        (month) =>
          month.month === state.chosenMonth.month &&
          month.year === state.chosenMonth.year
      );
      let findDay = findMonth?.days.find(
        (d) => d.number === state.chosenDay?.number
      );
      findDay?.events.push(action.payload);
      if (findDay !== undefined) state.chosenDay = findDay;

      let monthChanged = state.calendar.find(
        (month) =>
          month.month === state.chosenMonth.month &&
          month.year === state.chosenMonth.year
      );
      state.chosenMonth = monthChanged ? monthChanged : state.chosenMonth;

      localStorage.setItem("calendar", JSON.stringify(state.calendar));
    },
    setChosenEvent(state, action: PayloadAction<IEvent>) {
      state.chosenEvent = action.payload;
    },
    editEvent(state, action: PayloadAction<IEvent>) {
      const { title, time, description, updatedAt, id } = action.payload;
      // rewrite chosenDay
      let findMonth = state.calendar.find(
        (month) =>
          month.month === state.chosenMonth.month &&
          month.year === state.chosenMonth.year
      );
      let findDay = findMonth?.days.find(
        (d) => d.number === state.chosenDay?.number
      );
      let findEvent = findDay?.events.find((e) => e.id === id);
      if (findEvent !== undefined)
        findEvent = { ...findEvent, title, time, description, updatedAt };
      if (findEvent !== undefined && findDay !== undefined) {
        let foundIndex = findDay?.events.findIndex(
          (e) => e.id === findEvent?.id
        );

        if (foundIndex !== undefined) {
          findDay.events[foundIndex] = findEvent;
          state.chosenDay = findDay;
        }
      }
      // rewrite chosenMonth
      let monthToChange = state.calendar.find(
        (month) =>
          month.month === state.chosenMonth.month &&
          month.year === state.chosenMonth.year
      );
      if (monthToChange !== undefined && findDay !== undefined) {
        let foundIndex = monthToChange.days?.findIndex(
          (e) => e.number === findDay?.index
        );

        if (foundIndex !== undefined && typeof foundIndex === "number") {
          monthToChange.days[foundIndex] = findDay;
          state.chosenMonth = { ...monthToChange };
        }
      }

      localStorage.setItem("calendar", JSON.stringify(state.calendar));
    },
    deleteEvent(state, action: PayloadAction<IEvent>) {
      // get filteredEvents array
      let findMonth = state.calendar.find(
        (month) =>
          month.month === state.chosenMonth.month &&
          month.year === state.chosenMonth.year
      );
      let findDay = findMonth?.days.find(
        (d) => d.number === state.chosenDay?.number
      );
      let filteredEvents = findDay?.events.filter(
        (e) => e.id !== action.payload.id
      );

      // rewrite events of day
      if (Array.isArray(filteredEvents)) {
        if (findDay !== undefined) {
          findDay.events = filteredEvents;
          state.chosenDay = findDay;
        }
      }

      // rewrite chosenMonth
      let monthToChange = state.calendar.find(
        (month) =>
          month.month === state.chosenMonth.month &&
          month.year === state.chosenMonth.year
      );
      if (monthToChange !== undefined && findDay !== undefined) {
        let foundIndex = monthToChange.days?.findIndex(
          (e) => e.number === findDay?.index
        );

        if (foundIndex !== undefined && typeof foundIndex === "number") {
          monthToChange.days[foundIndex] = findDay;
          state.chosenMonth = { ...monthToChange };
        }
      }

      localStorage.setItem("calendar", JSON.stringify(state.calendar));
    },
  },
});

export const calendarActions = calendarSlice.actions;
export const calendarReducer = calendarSlice.reducer;
