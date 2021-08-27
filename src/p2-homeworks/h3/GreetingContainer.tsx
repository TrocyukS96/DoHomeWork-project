import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]// need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any   //коробка где будут храниться введенные имена
    const [error, setError] = useState<boolean>(true) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any +
        let inputValue = e.currentTarget.value
        if (inputValue.trim()!=='') {
            setError(false)
            setName(inputValue)
        } else {
            setError(true)
        }
    }

    const addUser = () => {
        addUserCallback(name) // need to fix +
        setName('') //чтобы при нажатии на кнопку введенное значение обновлялось на пустое
        // setError(true)
        alert('hello' + " " + name)
    }


    const totalUsers = users.length // need to fix +

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
