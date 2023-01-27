import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IYear, IMonth } from "@/interfaces";

interface State {
  chosenYear: IYear | null,
  chosenMonth: IMonth | null;
}

const initialState: State = {
  chosenYear: null,
  chosenMonth: null
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setYear(state, action: PayloadAction<IYear>) {
      state.chosenYear = action.payload;
    },
  },
});

export const calendarActions = calendarSlice.actions;
export const calendarReducer = calendarSlice.reducer;
