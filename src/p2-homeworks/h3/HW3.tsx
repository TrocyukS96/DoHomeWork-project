import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import s from './HW3.module.scss';

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any +
        if (name.trim() !== "") {
            let user = {_id: v1(), name: name.trim()}
            let NewUSer = [...users, user]
            setUsers(NewUSer)
        }

        console.log(users)
    }

    return (
        <div className={s.hwBlock}>
            <h2 className={s.title}>Homework 3</h2>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
        </div>
    )
}

export default HW3
