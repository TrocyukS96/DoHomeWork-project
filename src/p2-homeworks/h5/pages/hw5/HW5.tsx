import React from 'react'
import {HashRouter} from "react-router-dom";
import Routes from "../../Routes";
import Header from "../header/Header";
import s from './HW5.module.scss';

function HW5() {
    return (
        <div className={s.wrap}>
            <h1 className={s.title}>HomeWorks from Ignat</h1>
            <HashRouter>
                <Header/>
                <Routes/>
            </HashRouter>
        </div>
    )
}

export default HW5
