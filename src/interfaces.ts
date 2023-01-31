import { Dispatch, SetStateAction } from "react";

export interface IState {
  chosenMonth: IMonth;
  monthIndex: number;
  calendar: IMonth[];
  chosenDay: IDay | null;
  chosenEvent: IEvent | null;
}

export interface IEvent {
  id: string;
  title: string;
  description: string;
  time?: string;
  date?: string;
  createdAt?: string;
  updatedAt?: string;
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

export interface EventProps {
  event: IEvent;
  setIsModalEditOpen: Dispatch<SetStateAction<boolean>>;
  day: IDay;
}
export type ModalEditProps = {
  isModalEditOpen: boolean;
  setIsModalEditOpen: Dispatch<SetStateAction<boolean>>;
};

export type FormEditProps = {
  setIsModalEditOpen: Dispatch<SetStateAction<boolean>>;
};

export type CalendarProps = {
  setIsModalEditOpen: Dispatch<SetStateAction<boolean>>;
};

export type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

export type FormMProps = {
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
