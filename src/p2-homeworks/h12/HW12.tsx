import React from "react";
import s from "./HW12.module.scss";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changePhoneColorAC, changeTextColorAC} from "./bll/themeReducer";

const phoneColors = ['gray', 'red', 'green', 'lightBlue', 'transparent'];
const textColors = ['green', 'red', 'darkgoldenrod'];

function HW12() {
    const phoneColor = useSelector<AppStoreType, string>(state => state.theme.phoneColor); // useSelector
    const textColor = useSelector<AppStoreType, string>(state => state.theme.textColor); // useSelector
    const dispatch = useDispatch()
    const onChangePhoneColor = (value: string) => {
        dispatch(changePhoneColorAC(value))
    }
    const onChangeTextColor = (value: string) => {
        dispatch(changeTextColorAC(value))
    }
    return (
        <div className={`${s.wrapper} ${s[phoneColor + '-phone']} ${s[textColor + '-text']}`}>
            <h1 className={`${s.title} ${s[phoneColor + '-phone']} ${s[textColor + '-text']}`}>homeworks 12</h1>
            <div className={s.themesBlock}>
                <div className={s.color}>
                    <p>Change color theme</p>
                    <SuperSelect onChangeOption={onChangePhoneColor} options={phoneColors} defaultValue={phoneColor}/>
                </div>
                <div className={s.color}>
                    <p>Change text theme</p>
                    <SuperSelect onChangeOption={onChangeTextColor} options={textColors} defaultValue={textColor}/>
                </div>

            </div>
        </div>

    );
}

export default HW12;
