import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMonth, IDay } from "@/interfaces";
import { CALENDAR } from "../../../data/calendar";

interface State {
  chosenMonth: IMonth;
  monthIndex: number;
  calendar: IMonth[];
  chosenDay: IDay | null;
}

const initialState: State = {
  chosenMonth: CALENDAR[0],
  monthIndex: 0,
  calendar: [],
  chosenDay: null,
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    increaseMonthIndex(state) {
      state.monthIndex = state.monthIndex + 1;
      state.chosenMonth = state?.calendar[state.monthIndex];
      state.chosenDay = null
    },
    decreaseMonthIndex(state) {
      state.monthIndex = state.monthIndex - 1;
      state.chosenMonth = state?.calendar[state.monthIndex];
      state.chosenDay = null
    },
    setChosenMonth(state, action: PayloadAction<IMonth>) {
      state.chosenMonth = action.payload;
      state.chosenDay = null
    },
    setCalendarAfterGetFromServer(state, action: PayloadAction<IMonth[]>) {
      state.calendar = action.payload;
    },
    setChosenDay(state, action: PayloadAction<IDay>) {
      state.chosenDay = action.payload;
    },
  },
});

export const calendarActions = calendarSlice.actions;
export const calendarReducer = calendarSlice.reducer;
