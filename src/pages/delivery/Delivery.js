import React from 'react';
import Head from "../../components/head/head";
import Footer from "../../components/footer/footer";
import exp from './img/export.png'
import s from './style/Delivery.module.css'
import {DELIVERY_PAGE} from "../../translate/translate_delivery";
import {useLanguage} from "../../hooks/useLanguage";

const Delivery = () => {
    const {lang} = useLanguage()
    return (
        <div>
            <div className={s.content}>
                <h3>{DELIVERY_PAGE[lang].title}</h3>
                <img src={exp}/>
            </div>
        </div>
    );
};

export default Delivery;