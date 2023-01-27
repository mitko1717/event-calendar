import type { NextApiRequest, NextApiResponse } from "next";
import { IMonth } from "@/interfaces";
import { CALENDAR } from "../../../../../data/calendar";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IMonth | undefined>
) {
  const { id, year } = req.query as unknown as { id: number, year: string };
  
  const yearArr = CALENDAR.find(y => y.year === year)
  const month = yearArr?.months?.find(m => m.index === +id)
  
  res.status(200).json(month);
}