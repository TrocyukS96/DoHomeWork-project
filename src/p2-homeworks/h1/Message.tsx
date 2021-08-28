import React from 'react';
import s from './Message.module.scss';
import {MessageDataType} from "./HW1";

function Message(props:MessageDataType) {
    return (
        <div className={s.messageBlock}>
            <img src={props.avatar} alt=""/>
            <div className={s.content}>
                <h3 className={s.name}>{props.name}
                    <span className={s.time}>{props.time}</span>
                </h3>
                <p className={s.message}>{props.message}</p>

            </div>
        </div>
    )
}

export default Message
