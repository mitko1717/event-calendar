import { useAppSelector } from "@/hooks/redux";
import { IData } from "@/interfaces";
import { ChangeEvent, FC, useState } from "react";

const FormM: FC = () => {
  const { chosenMonth, chosenDay } = useAppSelector((state) => state.calendar);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const setDateHandler = () => {
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

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleChangeDesc = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  return (
    <form className="outlined-none border-none">
      <div>
        <label htmlFor="title" />
        <input
          className="border border-solid my-2 p-1"
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
          className="border border-solid my-2 p-1"
          type="text"
          placeholder="description"
          id="description"
          required
          aria-label="description"
          value={description}
          onChange={handleChangeDesc}
        />
      </div>
      <div>
        <label htmlFor="date">Start date:</label>

        <input
          type="date"
          id="date"
          name="date"
          className="ml-2"
          value={setDateHandler()}
        />
      </div>

      <div>
        <label htmlFor="time">Choose a time:</label>

        <input
          type="time"
          id="time"
          name="time"
          min="00:00"
          max="24:00"
          required
        />
      </div>
    </form>
  );
};

export default FormM;

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
