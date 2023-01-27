import { useAppSelector } from "@/hooks/redux";
import { FC, useState } from "react";
import { IDay } from "@/interfaces";
import { useActions } from "../hooks/actions";

const Calendar: FC = () => {
    const { chosenMonth } = useAppSelector((state) => state.calendar);
    const {
        setChosenDay
      } = useActions();

  }
  return (
    <div className="w-[90%] m-auto mt-6 grid h-auto grid-cols-7 grid-rows-5 gap-1">
        {chosenMonth.days.map(day => {
            return (
                <p 
                key={day.index} 
                className={`flex w-10% h-[150px] border border-solid border-black p-2 cursor-pointer ${chosenDay?.number === day.number ? "bg-gray" : ""}`} 
                onClick={() => setChosenDay(day)}>
                    <div className="flex justify-between w-full">
                    <span>{day.number}</span>
                   <span>{day.day}</span>
                    </div>
                </p>
            )
        })}
    </div>
  )
}

export default Calendar