import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IYear, IMonth } from "@/interfaces";

export const calendarApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spaceflightnewsapi.net/v3/",
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    getMonth: build.query<IMonth[], number>({
      query: (limit: number = 100) => ({
        url: `calendar?`,
        params: {
          _limit: limit,
        },
      }),
      transformResponse: (response: IMonth[]) => response,
    }),
  }),
});

export const { useGetMonthQuery } = calendarApi;
