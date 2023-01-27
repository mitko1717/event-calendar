import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { calendarActions } from "../store/calendar/calendar.slice";

const actions = {
  ...calendarActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
