import React from "react";
import s from "./HW13.module.scss";
import Request from "./Request";


function HW13() {
    return(
        <div className={s.wrapper}>
            <h1 className={s.title}>HomeWork 13</h1>
            <div className={s.requestBlock}>
                Request to server
                <Request/>
            </div>

        </div>
    )
}

export default HW13;