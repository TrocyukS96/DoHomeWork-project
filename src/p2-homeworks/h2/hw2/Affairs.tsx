import React from 'react'
import {AffairType, FilterType} from './HW2'
import Affair from "./Affair";
import s from './Affairs.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter:FilterType)=>(void)
    deleteAffairCallback: (id:number)=>(void)
    filter:FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')} // need to fix
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <div className={s.affairs}>

            {mappedAffairs}

            <Button variant="contained" onClick={setAll}>All</Button>
            <Button variant="contained" color="primary" onClick={setHigh}>High</Button>
            <Button variant="contained" color="primary" onClick={setMiddle}>Middle</Button>
            <Button  variant="contained" color="secondary" onClick={setLow}>Low</Button>
        </div>
    )
}

export default Affairs
