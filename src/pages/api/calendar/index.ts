import type { NextApiRequest, NextApiResponse } from "next";
import { IYear } from "@/interfaces";
import { CALENDAR } from "../../../../data/calendar";

type Data = {
  calendar: IYear[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ calendar: CALENDAR });
}
