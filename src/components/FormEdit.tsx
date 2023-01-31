import { useActions } from "@/hooks/actions";
import { useAppSelector } from "@/hooks/redux";
import { FormEditProps } from "@/interfaces";
import React, { ChangeEvent, FC, FormEvent, useState } from "react";

const FormEdit: FC<FormEditProps> = ({ setIsModalEditOpen }) => {
  const { chosenEvent } = useAppSelector((state) => state.calendar);
  const { editEvent, deleteEvent } = useActions();
  const [title, setTitle] = useState<string | undefined>(chosenEvent?.title);
  const [time, setTime] = useState<string | undefined>(chosenEvent?.time);
  const [description, setDescription] = useState<string | undefined>(
    chosenEvent?.description
  );
  const date = chosenEvent?.date;

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeTime = (e: ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  const handleChangeDesc = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const sendEditEventHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editEvent({
      title: title || "",
      time,
      description: description || "",
      updatedAt: new Date().toString(),
      id: chosenEvent?.id || "",
    });
    setIsModalEditOpen(false);
  };

  const deleteEventHandler = () => {
    if (chosenEvent !== null) {
      deleteEvent(chosenEvent);
      setIsModalEditOpen(false);
    }
  };

  const resetChanges = () => {
    if (chosenEvent !== null) {
      setTitle(chosenEvent.title);
      setDescription(chosenEvent.description);
      setTime(chosenEvent.time);
    }
  };

  return (
    <>
      {chosenEvent?.createdAt && (
        <p className="mt-4">
          Created at: {new Date(chosenEvent.createdAt).toLocaleString()}
        </p>
      )}
      {chosenEvent?.updatedAt && (
        <p>Updated at {new Date(chosenEvent.updatedAt).toLocaleString()}</p>
      )}

      <form
        className="outlined-none border-none"
        onSubmit={sendEditEventHandler}
      >
        <div className="mt-6">
          <label htmlFor="title" className="font-bold" />
          <input
            className="border border-solid my-2 p-1 w-full"
            type="text"
            placeholder="title"
            id="title"
            required
            aria-label="title"
            value={title}
            onChange={handleChangeTitle}
          />
        </div>
        <div>
          <label htmlFor="description" />
          <input
            className="border border-solid my-2 p-1 w-full"
            type="text"
            placeholder="description"
            id="description"
            required
            aria-label="description"
            value={description}
            onChange={handleChangeDesc}
          />
        </div>
        <div className="mt-2">
          <label htmlFor="date" className="font-bold">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="ml-2"
            readOnly
            value={date}
          />
        </div>

        <div>
          <label htmlFor="time" className="font-bold">
            Time:
          </label>
          <input
            type="time"
            id="time"
            name="time"
            min="00:00"
            max="24:00"
            value={time}
            onChange={handleChangeTime}
            className="ml-2"
            required
          />
        </div>

        <div>
          <span
            className="border py-1 px-3 font-bold mt-4 cursor-pointer hover:bg-slate-200 transition ease-in-out duration-300 mr-2"
            onClick={deleteEventHandler}
          >
            DELETE
          </span>
          <button
            type="submit"
            className="border py-1 px-3 font-bold mt-4 cursor-pointer hover:bg-slate-200 transition ease-in-out duration-300"
          >
            SAVE
          </button>
          <span
            className="border py-1 px-3 font-bold mt-4 cursor-pointer hover:bg-slate-200 transition ease-in-out duration-300 ml-2"
            onClick={resetChanges}
          >
            RESET CHANGES
          </span>
        </div>
      </form>
    </>
  );
};

export default FormEdit;
