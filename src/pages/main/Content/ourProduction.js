import React from 'react'
import s from './style/ourProduction.module.css'
import chick from '../../catalog/images/chik.png'
import turk from '../../catalog/images/turkey.png'
import sausag from '../../catalog/images/sausages.png'
import egg from '../../catalog/images/egg.png'
import semiFinish from '../../catalog/images/semiFinish.png'
import rabbit from '../../catalog/images/rabbit.png'
import MyButton from "../../../UI/myButton/MyButton";
import {MAIN_PAGE} from "../../../translate/translate_main";

const OurProduction = ({lang}) => {
    return (
        <div className={s.wrapper}>
            <div>
                <h1>{MAIN_PAGE[lang].ourProduction_title}</h1>
            </div>
            <div className={s.production}>
                <div
                    className={s.top_row}>
                {MAIN_PAGE[lang].ourProduction_top.map(({image, title, text, buttonText}, index) =>
                        <div className={s.b_chik}>
                            <div className={s.chick}>
                                <img src={image}/>
                                <h3>{title}</h3>
                                <p className={s.text}>{text}</p>
                                <MyButton>{buttonText}</MyButton>
                            </div>
                        </div>

                )}
                </div>
                <div
                    className={s.bottom_row}>
                    {MAIN_PAGE[lang].ourProduction_bot.map(({image, title, text, buttonText}, index) =>
                        <div className={s.b_chik}>
                            <div className={s.chick}>
                                <img src={image}/>
                                <h3>{title}</h3>
                                <p className={s.text}>{text}</p>
                                <MyButton>{buttonText}</MyButton>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default OurProduction