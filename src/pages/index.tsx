import Calendar from "@/components/Calendar";
import type { GetServerSideProps, NextPage } from "next";
import { IMonth } from "@/interfaces";
import { Provider } from "react-redux";
import { store } from "../store";

type IData = {
  calendar: IMonth[];
};

const Home: NextPage<{ data: IData }> = (props) => {
  let calendar = props?.data?.calendar;

  return (
    <Provider store={store}>
      <div className="bg-[#3e3e3e] h-[100vh] w-full flex flex-col">
        <Calendar calendar={calendar} />
      </div>
    </Provider>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const result = await fetch(`http://localhost:3000/api/calendar`);
    const data = await result.json();

    return {
      props: { data },
    };
  } catch {
    return {
      props: {},
    };
  }
};
