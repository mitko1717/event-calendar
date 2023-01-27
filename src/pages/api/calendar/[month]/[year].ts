import type { NextApiRequest, NextApiResponse } from "next";
import { IMonth } from "@/interfaces";
import { CALENDAR } from "../../../../../data/calendar";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IMonth | undefined>
) {
  const { month, year } = req.query as unknown as { month: string, year: string };
  const monthObj = CALENDAR.find(y => y.year === year && y.month === month)
  
  res.status(200).json(monthObj);
}