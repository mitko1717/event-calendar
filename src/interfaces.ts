export interface IDay {
  number: number;
  day: string;
  events: string[];
  index: number;
}

export interface IMonth {
  index: number;
  month: string;
  days: IDay[];
}

export interface IYear {
  year: string;
  months: IMonth[]
}