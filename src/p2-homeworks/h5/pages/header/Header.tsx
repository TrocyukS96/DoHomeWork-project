import React, {ReactNode} from 'react'

import {NavLink} from 'react-router-dom';
import { PATH } from '../../Routes';
import s from './Header.module.scss';


function Header() {
    return (
        <header className={s.header}>
            <nav className={s.navMenu}>
                <ul className={s.navList}>
                    <li className={s.navItem}><NavLink className={s.navLink} to={PATH.PRE_JUNIOR}>PRE_JUNIOR</NavLink>
                    </li>
                    <li className={s.navItem}><NavLink className={s.navLink} to={PATH.JUNIOR}>JUNIOR</NavLink></li>
                    <li className={s.navItem}><NavLink className={s.navLink} to={PATH.JUNIORPlus}>JUNIOR+</NavLink></li>
                    <li className={s.navItem}><NavLink className={s.navLink} to={'/==='}>Error</NavLink></li>
                    <li className={s.navItem}></li>
                </ul>
            </nav>
        </header>

    )
}

export default Header
