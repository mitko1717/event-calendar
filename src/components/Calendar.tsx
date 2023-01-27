import { IYear } from '@/interfaces'
interface CalendarDataProps {
    calendar: IYear[]
  }

const Calendar = ({ calendar }: CalendarDataProps) => {    
  return (
    <div>Calendar</div>
  )
}

export default Calendar