import Calendar from "@/components/Calendar";
import type { GetServerSideProps, NextPage } from "next";
import { IYear } from "@/interfaces";
import { Provider } from "react-redux";
import { store } from "../store";

type IData = {
  calendar: IYear[];
};

const Home: NextPage<{ data: IData }> = (props) => {
  let calendar: IYear[] = props?.data?.calendar
  
  return (
    <Provider store={store}>
      <div className="bg-[#3e3e3e] h-[100vh] w-full flex flex-col">
        <Calendar calendar={calendar}/>
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
      props: { data }
    };
  } catch {
    return {
      props: {}
    };
  }
};