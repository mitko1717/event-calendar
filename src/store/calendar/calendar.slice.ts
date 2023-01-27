import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMonth } from "@/interfaces";
import { CALENDAR } from "../../../data/calendar"

interface State {
  chosenMonth: IMonth,
  monthIndex: number;
  calendar: IMonth[];
}

const initialState: State = {
  chosenMonth: CALENDAR[0],
  monthIndex: 0,
  calendar: CALENDAR,
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    increaseMonthIndex(state) {
      state.monthIndex = state.monthIndex + 1;
      state.chosenMonth = state.calendar[state.monthIndex]
    },
    decreaseMonthIndex(state) {
      state.monthIndex = state.monthIndex - 1;
      state.chosenMonth = state.calendar[state.monthIndex]
    },
    setChosenMonth(state, action: PayloadAction<IMonth>) {
      state.chosenMonth = action.payload
    }
  },
});

export const calendarActions = calendarSlice.actions;
export const calendarReducer = calendarSlice.reducer;
