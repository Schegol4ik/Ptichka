import React from 'react'
import s from './footer.module.css'
import {Link} from "react-router-dom";
import {FOOTER} from "../../translate/translate_footer";

const Footer = ({lang}) => {
    console.log(FOOTER[lang].menu)
    return (
        <div className={s.wrapperFoot}>
            <div className={s.list}>
                {FOOTER[lang].menu.map(({title,link},index)=><Link to={link} className={s.Links}>{title}</Link>)}
            </div>
            <div className={s.organization}>
                {FOOTER[lang].text}
            </div>

        </div>
    )
}

export default Footer