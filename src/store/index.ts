import { configureStore } from "@reduxjs/toolkit";
import { calendarApi } from "./calendar/calendar.api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { calendarReducer } from "./calendar/calendar.slice";

export const store = configureStore({
  reducer: {
    [calendarApi.reducerPath]: calendarApi.reducer,
    calendar: calendarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(calendarApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
