import { Dispatch, SetStateAction } from "react";

export interface IEvent {
  id: string;
  title: string;
  description: string;
  time: Date;
}

export interface IDay {
  number: number;
  day: string;
  events: IEvent[];
  index: number;
}

export interface IMonth {
  index: number;
  month: string;
  year: string;
  days: IDay[];
}

export interface DatePickerProps {
  calendar: IMonth[];
}

export interface ContainerDataProps {
  calendar: IMonth[];
}

export interface CalendarDataProps {
  calendar: IMonth[];
}

export type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

export interface IData {
  January: number;
  February: number;
  March: number;
  April: number;
  May: number;
  June: number;
  July: number;
  August: number;
  September: number;
  October: number;
  November: number;
  December: number;
}
