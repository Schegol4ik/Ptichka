import React from 'react';
import s from './style/meAndFerm.module.css'
import Border from "./UI/Border";
import {MAIN_PAGE} from "../../../translate/translate_main";

const MeAndFarm = ({lang}) => {
    return (
        <div className={s.wrapper}>
            <h3>{MAIN_PAGE[lang].weAndFarm_title}</h3>
            <div >
                <Border/>
            </div>
        </div>
    );
};

export default MeAndFarm;