import type { NextApiRequest, NextApiResponse } from "next";
import { Month } from "@/interfaces";
import { CALENDAR } from "../../../../data/calendar";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Month | undefined>
) {
  const { id } = req.query as unknown as { id: number };
  const month = CALENDAR.find((month) => month.index === id);
  res.status(200).json(month);
}
