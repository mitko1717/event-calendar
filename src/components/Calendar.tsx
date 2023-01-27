import ArrowLeft from '@/icons/ArrowLeft'
import ArrowRight from '@/icons/ArrowRight'
import DateIcon from '@/icons/Date'
import { IMonth } from '@/interfaces'
import Button from '@mui/material/Button/'
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/actions";

interface CalendarDataProps {
    calendar: IMonth[]
  }

const Calendar = ({ calendar }: CalendarDataProps) => {   
  const { monthIndex, chosenMonth } = useAppSelector((state) => state.calendar);
  const { increaseMonthIndex, decreaseMonthIndex } = useActions();

  const rightArrowClickHandler = () => {    
    increaseMonthIndex()
  }

  const leftArrowClickHandler = () => {
      decreaseMonthIndex()
  }

  return (
    <div>
      <div className='flex p-2 justify-around h-[50px] items-center'>
        <Button variant="contained"><span className='text-3xl font-bold'>+</span></Button>

        <div className='flex h-40px'>
          <span className={`flex items-center cursor-pointer px-2 ${monthIndex === 0 && 'pointer-events-none opacity-30'}`} onClick={leftArrowClickHandler}><ArrowLeft /></span>
          <p className='w-[120px] text-center'>{chosenMonth.month} {" "} {chosenMonth.year}</p>
          <span className={`flex items-center cursor-pointer px-2 ${monthIndex === calendar.length - 1 && 'pointer-events-none opacity-30'}`} onClick={rightArrowClickHandler}><ArrowRight /></span>
          <span className='flex items-center border border-solid border-black mx-2 py-1 px-2 cursor-pointer'>
            <DateIcon />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Calendar