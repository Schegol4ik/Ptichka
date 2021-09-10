import React from 'react'
import s from './style/responsibility.module.css'
import {useLanguage} from "../../../hooks/useLanguage";
import {MAIN_PAGE} from "../../../translate/translate_main";

const Responsebility = (props) => {
    const {lang} = useLanguage()
    return (
        <div className={s.responsibility}>
            <div className={s.content}>
                <h3>{MAIN_PAGE[lang].description_page.title}</h3>
                <div>
                    <p className={s.text}>
                        {MAIN_PAGE[lang].description_page.text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Responsebility