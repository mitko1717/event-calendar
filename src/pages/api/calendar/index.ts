import type { NextApiRequest, NextApiResponse } from "next";
import { Month } from "@/interfaces";
import { CALENDAR } from "../../../../data/calendar";

type Data = {
  calendar: Month[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ calendar: CALENDAR });
}
