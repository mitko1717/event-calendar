import { useAppSelector } from "@/hooks/redux";
import { FC } from "react";
import { useActions } from "../hooks/actions";

const Calendar: FC = () => {
  const { chosenMonth, chosenDay } = useAppSelector((state) => state.calendar);
  const { setChosenDay } = useActions();

  return (
    <div className="w-[90%] m-auto mt-6 grid h-auto grid-cols-7 grid-rows-5 gap-1">
      {chosenMonth.days.map((day) => {
        return (
          <div
            key={day.index}
            className={`flex w-10% h-[150px] border border-solid border-black p-2 cursor-pointer ${
              chosenDay?.number === day.number ? "bg-white" : ""
            }`}
            onClick={() => {
              setChosenDay(day);
            }}
          >
            <div className="flex justify-between w-full">
              <span>{day.number}</span>
              <span>{day.day}</span>
            </div>
            {day.events.length > 0 && (
              <div>
                {day.events.map((event) => {
                  return <div key={event.id}>{event.title}</div>;
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;
