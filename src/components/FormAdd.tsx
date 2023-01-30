import { useActions } from "@/hooks/actions";
import { useAppSelector } from "@/hooks/redux";
import { FormMProps, IData, IDay, IMonth } from "@/interfaces";
import { ChangeEvent, FormEvent, FC, useState } from "react";

const FormM: FC<FormMProps> = ({ setIsModalOpen }) => {
  const { chosenMonth, chosenDay } = useAppSelector((state) => state.calendar);
  const {
    pushEvent
  } = useActions();
  const [title, setTitle] = useState<string>("");
  const [time, setTime] = useState<string>("12:00");
  const [description, setDescription] = useState<string>("");
  const date = setDateHandler(chosenMonth, chosenDay);

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeTime = (e: ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  const handleChangeDesc = (e: ChangeEvent<HTMLInputElement>) => {      
    setDescription(e.target.value);
  };

  const sendEventHadler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    pushEvent({title, time, description, date, id: Math.random().toString(), createdAt: new Date()})
    setIsModalOpen(false)
  }  

  return (
    <form className="outlined-none border-none" onSubmit={sendEventHadler}>
      <div className="mt-8">
        <label htmlFor="title" className="font-bold"/>
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
        <label htmlFor="date"className="font-bold">Date:</label>
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
        <label htmlFor="time"className="font-bold">Time:</label>
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
        <input type="submit" value="SAVE" className="border py-1 px-3 font-bold mt-4 cursor-pointer hover:bg-slate-200 transition ease-in-out duration-300"/>
      </div>  

    </form>
  );
};

export default FormM;

const setDateHandler = (chosenMonth: IMonth, chosenDay: IDay | null) => {
    const todayDate = new Date(
      +chosenMonth.year,
      getMonthNumber(chosenMonth.month) + 1,
      chosenDay?.number
    );
    const formatDate =
      todayDate.getDate() < 10
        ? `0${todayDate.getDate()}`
        : todayDate.getDate();
    const formatMonth =
      todayDate.getMonth() < 10
        ? `0${todayDate.getMonth()}`
        : todayDate.getMonth();
    const formattedDate = [
      todayDate.getFullYear(),
      formatMonth,
      formatDate,
    ].join("-");

    return formattedDate;
  };

const getMonthNumber = (key: string) => {
  const DATA: IData = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };

  return DATA[key as keyof IData];
};