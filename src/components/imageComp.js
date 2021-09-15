import React from 'react'
import style from './imageComp.module.css'
import LikeButton from "./LikeButton";
import ShareButton from "./shareButton";
const Images= ({image,earthdate,rovername,cameraname})=>{
    return (
        <div className={style.images}>
            <img src={image} alt="Mars Rover" className={style.pics}></img>
            <div className={style.buttons}>
                <LikeButton />
                <ShareButton link={image}/>
            </div>
            <p className={style.caption}>The {rovername} rover with its {cameraname}</p>
            <p className={style.date}>{earthdate}</p>
        </div>

    );
}

export default Images;
