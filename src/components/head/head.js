import React from 'react'
import s from './head.module.scss'
import logo from './img/logo.png'
import chicken from './img/птичка.png'
import {Link} from "react-router-dom";

import styled, {keyframes} from "styled-components";
import {HEADER} from '../../translate/translate_header'
import {bounce} from "react-animations";


const Head = ({lang, handleLang}) => {

    const Bounce = styled.div`animation: 5s ${keyframes`${bounce}`} infinite`;

    return (
        <div className={s.wrapperHead}>
            <div className={s.chicken}>
                <Bounce><Link to="/contacts"> <img src={chicken}/></Link></Bounce>

            </div>
            <div className={s.logo}>
                <Link to="/main"><img src={logo}/></Link>
            </div>
            <div className={s.list}>
                {HEADER[lang].menu.map(({title, link}, index) => <Link to={link} key={index}
                                                                       className={s.Links}>{title}</Link>)}


            </div>
            <div className={s.langs}>
                {HEADER.lang.map(item => <span key={item} onClick={() => handleLang(item)}>{item}</span>)}
            </div>

        </div>
    )
}

export default Head