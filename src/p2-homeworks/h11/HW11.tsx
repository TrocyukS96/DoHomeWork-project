import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from "./HW11.module.scss";

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    const onChangeRange = (value1:number) => {
        setValue1(value1)
    }
    const onChangeDoubleRange = ([value1, value2]:Array<number>) => {
        setValue1(value1)
        setValue2(value2)
    }
    return (
        <div className={s.wrapper}>
            <hr/>
            <h2 className={s.title}>homeworks 11</h2>

            {/*should work (должно работать)*/}
            <div className={s.rangeBlock}>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={onChangeRange}
                    // сделать так чтоб value1 изменялось
                />
            </div >

            <div className={s.doubleRangeBlock}>
                <span>{value1}</span>
                <SuperDoubleRange
                    onChangeRange={onChangeDoubleRange}
                    // сделать так чтоб value1 и value2 изменялось
                />
                {/*<span>{value2}</span>*/}
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
