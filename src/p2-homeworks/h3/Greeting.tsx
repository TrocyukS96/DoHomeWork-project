import React, {ChangeEvent} from 'react';
import s from './Greeting.module.scss';
import {Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = (error)? s.error:'' // need to fix with (?:)

    return (
        <div className={s.greetingBlock}>
            <input value={name} onChange={setNameCallback} className={s.inputClass}/>
            <span>{error}</span>
            <Button variant="contained" onClick={addUser} disabled={error?true:false}>add</Button>
            <span className={s.greetingSpan}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
