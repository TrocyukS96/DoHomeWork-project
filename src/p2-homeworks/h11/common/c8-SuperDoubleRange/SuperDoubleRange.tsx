import React, {ChangeEvent} from 'react'
// import s from "../c7-SuperRange/SuperRange.module.css";
import './SuperDoubleRange.scss';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    className?:string | undefined
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,className,

        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange && onChange(e) // сохраняем старую функциональность

        onChangeRange && onChangeRange([+e.currentTarget.value, +e.currentTarget.value])
    }
    // const finalRangeClassName = `${s.range} ${className ? className : ''}`
    return (
        <div className='doubleRangeBlock'>
            <input
                type={'range'}
                onChange={onChangeCallback}
                // className={finalRangeClassName}
                className="thumb thumb--zindex-3"
                min={0}
                max={100}
            />
            <input
                type={'range'}
                onChange={onChangeCallback}
                className="thumb thumb--zindex-4"
                min={0}
                max={100}
            />

            <div className="slider">
                <div className="slider__track" />
                <div className="slider__range" />
            </div>
        </div>
    )
}

export default SuperDoubleRange
