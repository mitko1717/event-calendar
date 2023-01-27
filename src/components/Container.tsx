import ArrowLeft from "@/icons/ArrowLeft";
import ArrowRight from "@/icons/ArrowRight";
import DateIcon from "@/icons/Date";
import { ContainerDataProps } from "@/interfaces";
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/actions";
import { useEffect, useState } from "react";
import DatePicker from "./DatePicker";
import Calendar from "./Calendar";
import Button from "@mui/material/Button/";

const Container = ({ calendar }: ContainerDataProps) => {
  const { monthIndex, chosenMonth } = useAppSelector((state) => state.calendar);
  const {
    increaseMonthIndex,
    decreaseMonthIndex,
    setCalendarAfterGetFromServer,
  } = useActions();
  const [isOpenDatePicker, setIsOpenDatePicker] = useState<boolean>(false);

  useEffect(() => {
    if (Array.isArray(calendar) && calendar.length > 0) {
      setCalendarAfterGetFromServer(calendar);
    }
  }, [calendar]);

  const rightArrowClickHandler = () => {
    increaseMonthIndex();
  };

  const leftArrowClickHandler = () => {
    decreaseMonthIndex();
  };

  const datePickerToggler = () => {
    setIsOpenDatePicker((prev) => !prev);
  };

  return (
    <div>
      <div className="flex p-2 justify-around h-[50px] items-center relative">
        <Button variant="contained">
          <span className="text-3xl font-bold">+</span>
        </Button>

        <div className="flex h-40px">
          <span
            className={`flex items-center cursor-pointer px-2 ${
              monthIndex === 0 && "pointer-events-none opacity-30"
            }`}
            onClick={leftArrowClickHandler}
          >
            <ArrowLeft />
          </span>
          <p className="w-[120px] text-center">
            {chosenMonth.month} {chosenMonth.year}
          </p>
          <span
            className={`flex items-center cursor-pointer px-2 ${
              monthIndex === calendar.length - 1 &&
              "pointer-events-none opacity-30"
            }`}
            onClick={rightArrowClickHandler}
          >
            <ArrowRight />
          </span>
          <span
            className="flex items-center border border-solid border-black mx-2 py-1 px-2 cursor-pointer"
            onClick={datePickerToggler}
          >
            <DateIcon />
          </span>
          {isOpenDatePicker && <DatePicker calendar={calendar} />}
        </div>
      </div>

      <Calendar />
    </div>
  );
};

export default Container;
