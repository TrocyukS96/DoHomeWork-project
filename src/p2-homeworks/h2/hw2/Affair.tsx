import React from 'react'
import {AffairType} from "./HW2";
import {IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import s from './Affair.module.scss';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any   / передается толь
    deleteAffairCallback: any // need to fix any
}



function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className={s.affair}>
            <p className={s.blockText}>Show name: {props.affair.name}, and show priority:{props.affair.priority}</p>

            <IconButton className={s.blockBtn}  aria-label="delete" onClick={deleteCallback}><DeleteIcon /></IconButton>
        </div>
    )
}

export default Affair
