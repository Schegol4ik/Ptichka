import React from 'react';
import map from './img/Карта.png'
import s from './style/Contacts.module.css'
import {useLanguage} from "../../../hooks/useLanguage";
import {CONTACTS_PAGE} from "../../../translate/translate_contacts";

const ContentContacts = () => {
const {lang} = useLanguage()
    return (
        <div className={s.wrapper}>
            <div>
                <h3>{CONTACTS_PAGE[lang].title}</h3>
                <div className={s.text}>
                    {CONTACTS_PAGE[lang].farm}
                   <p style={{lineHeight:'1px',paddingBottom:'10px'}}>{CONTACTS_PAGE[lang].whereFarm}</p>

                    {CONTACTS_PAGE[lang].tradePoint}
                    <p style={{lineHeight:'1px',paddingBottom:'10px'}}>{CONTACTS_PAGE[lang].whereTraidPoint}</p>

                    {CONTACTS_PAGE[lang].number}
                </div>
            </div>
            <div className={s.map}>
                <img src={CONTACTS_PAGE[lang].image}/>
            </div>
        </div>
    );
};

export default ContentContacts;