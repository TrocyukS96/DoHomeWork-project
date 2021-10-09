import React from 'react';
import Clock from './Clock';
import s from './HW9.module.scss';

function HW9() {
    return (
        <div className={s.wrapper}>
            <hr/>
            <h2 className={s.title}>homeworks 9</h2>

            {/*should work (должно работать)*/}
            <Clock />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
            <hr/>
        </div>
    )
}

export default HW9
