import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.scss';

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)
    const [startClock, setStartClock] = useState<boolean>(false)

    const stop = () => {
        // stop
        clearInterval(timerId)

    }
    const start = () => {
        stop()
        setStartClock(true)
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }
    console.log(date)
    const stringTime = date.toLocaleTimeString()// fix with date
    const stringDate = date.toLocaleDateString() // fix with date
    return (
        <div className={s.clock}>
            <div className={s.clockTable}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {/*{show && (*/}
                {/*    <div className={s.date}>*/}
                {/*        {show &&  stringDate}*/}
                {/*    </div>*/}
                {/*)}*/}
                <div className={s.time}>{startClock && stringTime}</div>
                <div className={s.date}>{stringDate}</div>
            </div>



            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
