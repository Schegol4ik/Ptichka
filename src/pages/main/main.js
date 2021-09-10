import React from 'react'
import s from "./main.module.css"
import Responsebility from "./Content/responsibility";
import AboutUs from "./Content/aboutUs";
import OurProduction from "./Content/ourProduction";
import MeAndFarm from "./Content/MeAndFarm";
import {MAIN_PAGE} from "../../translate/translate_main";
import {useLanguage} from "../../hooks/useLanguage";

const Main = () => {
    const {lang} = useLanguage()

    return (
        <div className={s.wrapperMain}>
            <div className={s.Content}>
                <div className={s.hello}>
                   <h1 className={s.famillyH}>{MAIN_PAGE[lang].main_title}</h1>
                    <p className={s.famillyH_content}>{MAIN_PAGE[lang].text_page}</p>
                </div>
                <Responsebility lang={lang}/>
                <AboutUs lang={lang}/>
                <OurProduction lang={lang}/>
                <MeAndFarm lang={lang}/>
            </div>
        </div>
    )
}

export default Main