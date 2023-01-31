import React, { FC } from "react";
import { EventProps } from "@/interfaces";
import { useActions } from "@/hooks/actions";

const Event: FC<EventProps> = ({ event, setIsModalEditOpen, day }) => {
  const { setChosenEvent, setChosenDay } = useActions();

  const openEditEventHandler = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    setChosenDay(day);
    setChosenEvent(event);
    setIsModalEditOpen(true);
  };

  return (
    <div
      className="w-full my-2 bg-slate-200 border cursor pointer"
      onClick={openEditEventHandler}
    >
      <p className="font-bold">{event.time}</p>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
    </div>
  );
};

export default Event;
