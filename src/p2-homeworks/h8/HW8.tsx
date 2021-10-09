import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.scss';

export type UsersType = UserType[]
export type UserType = {
    _id: number
    name: string
    age: number
}
const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
] as UsersType

function HW8() {
    const [people, setPeople] = useState<UsersType>(initialPeople) // need to fix any

    const finalPeople = people.map((p: UserType) => (
        <li className={s.item} key={p._id}>
            <div className={s.itemBlock}>
                <span className={s.userName}>{p.name}</span>
                <span className={s.userAge}>{p.age}</span>
            </div>
        </li>
    ))

    const sortUp = () => {
        setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    }
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const filterAge = () => setPeople(homeWorkReducer(initialPeople, {type: 'filterAge', payload: 18}))

    return (
        <div className={s.wrapper}>
            <hr/>
            <h2 className={s.title}>homeworks 8</h2>
            <ul className={s.list}>
                {finalPeople}
            </ul>
            <div className={s.buttons}>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={filterAge}>check 18</SuperButton>
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
