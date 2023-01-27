export interface Day {
  number: number;
  day: string;
  events: string[];
  index: number;
}

export interface Month {
  index: number;
  month: string;
  days: Day[];
}
