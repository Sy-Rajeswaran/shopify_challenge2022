import React from 'react'
import style from './imageComp.css'
const Images= ({image,earthdate,rovername,cameraname})=>{
    return (
        <div className={style.images}>
            <img src={image} alt="Mars Rover"></img>
            <p>{rovername}</p>
        </div>

    );
}

export default Images;
