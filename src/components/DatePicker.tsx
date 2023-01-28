import { FC } from "react";
import { DatePickerProps } from "@/interfaces";
import { useActions } from "@/hooks/actions";
import { useAppSelector } from "@/hooks/redux";

const DatePicker: FC<DatePickerProps> = ({ calendar }) => {
  const { chosenMonth } = useAppSelector((state) => state.calendar);
  const { setChosenMonth } = useActions();

  return (
    <div className="z-10 w-[200px] h-auto p-2 absolute right-2 top-2 shadow-dp-1 bg-white text-bold text-black">
      {calendar.length > 0 &&
        calendar.map((m) => {
          let sameMonth =
            m.year === chosenMonth.year && m.month === chosenMonth.month;
          return (
            <p
              key={m.year + m.month}
              className={`${
                sameMonth ? "bg-black text-white" : ""
              } text-center rounded-xl my-1 cursor-pointer`}
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
