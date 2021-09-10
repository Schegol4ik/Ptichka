import React from 'react'
import gallery from '../style/galimg.png'
import s from '../style/meAndFerm.module.css'

const Border = () => {
    return (
        <div className={s.gallery}>
            <div>
                <img src={gallery}/>
                <img src={gallery}/>
                <img src={gallery}/>
                <img src={gallery}/>
                <img src={gallery}/>
            </div>
            <div>
                <img src={gallery}/>
                <img src={gallery}/>
                <img src={gallery}/>
                <img src={gallery}/>
                <img src={gallery}/>
            </div>
        </div>
    );
};

export default Border;