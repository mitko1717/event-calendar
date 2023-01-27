import Calendar from "@/components/Calendar";
import type { GetServerSideProps, NextPage } from "next";
import { IYear } from "@/interfaces";

type IData = {
  calendar: IYear[];
};

const Home: NextPage<{ data: IData }> = (props) => {
  let calendar: IYear[] = props?.data?.calendar
  
  return (
    <div className="bg-[#3e3e3e] h-[100vh] w-full flex flex-col">
      <Calendar calendar={calendar}/>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const result = await fetch(`http://localhost:3000/api/calendar`);
    const data = await result.json();
    console.log(data);

    return {
      props: { data }
    };
  } catch {
    return {
      props: {}
    };
  }
};