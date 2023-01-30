import React, { FC } from 'react'
import { EventProps } from '@/interfaces'
import { useActions } from '@/hooks/actions';

const Event: FC <EventProps> = ({ event }) => {
  const { setChosenEvent } = useActions();

  const openEditEventHandler = (e: any) => {
    e.stopPropagation()
    e.preventDefault()
    setChosenEvent(event)
  }

  return (
    <div className='w-full my-2 bg-slate-200 border cursor pointer' onClick={openEditEventHandler}>
       <p className='font-bold'>{event.time}</p>
       <h3>{event.title}</h3>
       <p>{event.description}</p>
    </div>
  )
}

export default Event