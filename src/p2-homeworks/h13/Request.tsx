import React, {useState} from "react";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {requestApi} from "./api/requestApi";

const s = {
    btn: {
        width: '120px',
        height: '60px',
        marginLeft: '20px'
    },
    block: {
        marginTop: '20px',
        display: 'flex',
    },
    error: {
        color: 'white',
        margin: '0 0 0 30px'
    }
}


function Request() {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState<string>('')

    const onChangeChecked = (value: boolean) => {
        setSuccess(value)
    }
    const submitRequest = () => {
        console.log('click on button')
        requestApi.simpleRequest(success)
            .catch (err => {
                return setError(err && err.response.data.errorText)
                // console.log(err.messages)
            })
        setError('request without errors')
    }
    console.log(success)
    return (
        <div style={s.block}>
            <SuperCheckbox onChangeChecked={onChangeChecked}/>
            <button style={s.btn} onClick={submitRequest}>Submit request</button>
            <p style={s.error}>{error}</p>

        </div>
    )
}

export default Request;




// catch (error) { console.log( {...error} ); console.log( error.response ? error.response.data.errorText : error.message );