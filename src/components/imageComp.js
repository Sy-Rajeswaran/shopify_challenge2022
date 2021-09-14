import React from 'react'
import style from './imageComp.module.css'
import LikeButton from "./LikeButton";
const Images= ({image,earthdate,rovername,cameraname})=>{
    return (
        <div className={style.images}>
            <img src={image} alt="Mars Rover" className={style.pics}></img>
            <LikeButton />
            <p className={style.caption}>The {rovername} rover with its {cameraname}</p>
            <p className={style.date}>{earthdate}</p>
        </div>

    );
}

export default Images;
