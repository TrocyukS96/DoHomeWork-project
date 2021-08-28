import React from 'react'
import Message from "./Message";
import s from './HW1.module.scss';

export type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

const messageData: MessageDataType = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Casey',
    message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,',
    time: '22:00'
}
const messageData1: MessageDataType = {
    avatar: 'https://64.media.tumblr.com/1708413339ef8ea20071e07ae671cdc5/tumblr_ou8xjsOgri1vs9ch6o5_250.png',
    name: 'Jack',
    message: 'Lorem printing and typesetting i Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,',
    time: '16:00'
}

const messageData2: MessageDataType = {
    avatar: 'https://64.media.tumblr.com/6f2077af446112ac08622e730bb5d6bb/tumblr_ow306gOjup1v1u7rro3_250.jpg',
    name: 'Frogy',
    message: ' the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,',
    time: '11:00'
}

function HW1() {
    return (
        <div className={s.hwBlock}>

            <h2 className={s.title}>Homework №1</h2>

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <Message
                avatar={messageData1.avatar}
                name={messageData1.name}
                message={messageData1.message}
                time={messageData1.time}
            />

            <Message
                avatar={messageData2.avatar}
                name={messageData2.name}
                message={messageData2.message}
                time={messageData2.time}
            />
        </div>
    )
}

export default HW1
