import type { NextApiRequest, NextApiResponse } from "next";
import { IMonth } from "@/interfaces";
import { CALENDAR } from "../../../../data/calendar";

type Data = {
  calendar: IMonth[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ calendar: CALENDAR });
}
