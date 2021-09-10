import React from 'react'
import s from './style/aboutUs.module.css'
import {MAIN_PAGE} from "../../../translate/translate_main";

const AboutUs = ({lang}) => {
    return (
        <div className={s.wrapper}>
            {MAIN_PAGE[lang].about_page.map(({image, title, text}, index) => <div>
                <img src={image} alt={title}/>
                <h1>{title}</h1>
                <div className={s.ciclyText}>
                    {text}
                </div>
            </div>)}
        </div>
    )

}

export default AboutUs