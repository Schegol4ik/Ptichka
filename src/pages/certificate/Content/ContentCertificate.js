import React from 'react';
import s from './style/Certificate.module.css'
import cicly from './img/цикл.png'
import topImg from './img/1.png'
import botImg from './img/3.png'
import {useLanguage} from "../../../hooks/useLanguage";
import {CERTIFICATE_PAGE} from "../../../translate/translate_certificate";


const ContentCertificate = () => {

    const {lang} = useLanguage()

    return (
        <div className={s.wrapper}>
            <div className={s.quality}>
                <h3>{CERTIFICATE_PAGE[lang].aboutCycle.title}</h3>
                <img src={CERTIFICATE_PAGE[lang].aboutCycle.image}/>
                <p>{CERTIFICATE_PAGE[lang].aboutCycle.text}</p>
            </div>
            <div className={s.discription}>
                <div className={s.top_row}>
                    {CERTIFICATE_PAGE[lang].ourRejection_top.map(({image, title, text}, index) => <div>
                        <img src={image}/>
                        <h3>{title}</h3>
                        <p className={s.textOne}>{text}</p>
                    </div>)}
                </div>
                <div className={s.bot_row}>
                    {CERTIFICATE_PAGE[lang].ourRejection_bot.map(({image, title, text}, index) =>
                        <div>
                            <img src={image}/>
                            <h3>{title}</h3>
                            <p className={s.textTree}>{text}</p>
                        </div>)}
                </div>
            </div>
            <div className={s.reference}>
                <h3>{CERTIFICATE_PAGE[lang].title}</h3>
                <div className={s.borders}>
                    <div className={s.borderOne}>
                        <div className={s.border}></div>
                    </div>
                    <div className={s.borderTwo}>
                        <div className={s.border}></div>
                    </div>
                    <div className={s.borderThree}>
                        <div className={s.border}></div>
                    </div>
                    <div className={s.borderFour}>
                        <div className={s.border}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentCertificate;