export interface IDay {
  number: number;
  day: string;
  events: string[];
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
