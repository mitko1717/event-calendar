import type { NextApiRequest, NextApiResponse } from "next";
import { IYear } from "@/interfaces";
import { CALENDAR } from "../../../../../data/calendar";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IYear | undefined>
) {
  const { year } = req.query as unknown as { year: string };  
  const yearArr = CALENDAR.find(y => y.year === year)
  
  res.status(200).json(yearArr);
}
