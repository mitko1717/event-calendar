import { FC } from "react";
import { DatePickerProps } from "@/interfaces";
import { useActions } from "@/hooks/actions";
import { useAppSelector } from "@/hooks/redux";

const DatePicker: FC<DatePickerProps> = ({ calendar }) => {
  const { chosenMonth } = useAppSelector((state) => state.calendar);
  const { setChosenMonth } = useActions();

  return (
    <div className="z-10 w-[200px] h-auto p-2 absolute right-0 top-0">
      {calendar.map((m) => {
        let sameMonth =
          m.year === chosenMonth.year && m.month === chosenMonth.month;
        return (
          <p
            key={m.year + m.month}
            className={`${
              sameMonth ? "cursor-pointer bg-white" : ""
            } text-center`}
            onClick={() => setChosenMonth(m)}
          >
            {m.month} {m.year}
          </p>
        );
      })}
    </div>
  );
};

export default DatePicker;
