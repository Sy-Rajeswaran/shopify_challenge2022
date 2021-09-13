import React from 'react'
import style from './imageComp.css'
const Images= ({image,earthdate,rovername,cameraname})=>{
    return (
        <div className={style.images}>
            <img src={image} alt="Mars Rover" className={style.image}></img>
            <p>The {rovername} rover with its {cameraname}</p>

        </div>

    );
}

export default Images;
