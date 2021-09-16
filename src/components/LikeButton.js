import React, {useEffect, useState} from 'react'
import {AiFillHeart} from 'react-icons/ai'
import Cookies from 'js-cookie'
import "./likeButton.css";

function LikeButton(props){

    const[like,setLike]=useState(Cookies.get(props.image));
    useEffect(()=>{
        setLike(sessionCookies())
        console.log(like);

    },[]);
    //Getting the session cookie for the initial state for which photos have been liked or not
    const sessionCookies=()=>{
        const sessionCookie = Cookies.get(props.image);
        if (sessionCookie === undefined) {
            return {};
        } else {
            return JSON.parse(sessionCookie);
        }
    }
    const LikeFunc=()=>{
        if (like===false){
            setLike(true);
            Cookies.set(props.image,true)
        }
        else{
            setLike(false);
            Cookies.set(props.image,false)
        }
        console.log(like);//TODO: Take this away
    }
    let btn_state=like?"likes":"unlike";
    return(
        <AiFillHeart className={btn_state} onClick={LikeFunc} />
    );
}

export default LikeButton
