import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW10.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingOffAC, loadingOnAC} from "./bll/loadingReducer";
import loader from './../../asstets/images/loader.gif';

function HW10() {
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()
    const setLoading = () => {
        setTimeout(()=>{
            dispatch(loadingOnAC())
        }, 100)
        setTimeout(()=>{
            dispatch(loadingOffAC())
        }, 3000)

    };

    return (
        <div className={s.wrapper}>
            <hr/>
            {/*<div><img className={s.loadingImg} src={loader} alt="loader-image"/></div>*/}
            <h2 className={s.title}>homeworks 10</h2>
            <div className={s.loadingBlock}>
                {/*should work (должно работать)*/}
                {loading
                    ? (
                        <div><img className={s.loadingImg} src={loader} alt="loader-image"/></div>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading} className={s.loadingBtn}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
