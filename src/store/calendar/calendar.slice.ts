import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMonth, IDay, IEvent } from "@/interfaces";
import { CALENDAR } from "../../../data/calendar";

interface State {
  chosenMonth: IMonth;
  monthIndex: number;
  calendar: IMonth[];
  chosenDay: IDay | null;
  chosenEvent: IEvent | null;
}

const initialState: State = {
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
      state.calendar = action.payload;
    },
    setChosenDay(state, action: PayloadAction<IDay>) {
      state.chosenDay = action.payload;
    },
    pushEvent(state, action: PayloadAction<IEvent>) {          
      let findMonth = state.calendar.find(month => month.month === state.chosenMonth.month && month.year === state.chosenMonth.year)
      let findDay = findMonth?.days.find(d => d.number === state.chosenDay?.number)
      findDay?.events.push(action.payload)

      let monthChanged = state.calendar.find(month => month.month === state.chosenMonth.month && month.year === state.chosenMonth.year)
      state.chosenMonth = monthChanged ? monthChanged : state.chosenMonth      
    },
    setChosenEvent(state, action: PayloadAction<IEvent>) {
      state.chosenEvent = action.payload;
    },
  },
});

export const calendarActions = calendarSlice.actions;
export const calendarReducer = calendarSlice.reducer;
