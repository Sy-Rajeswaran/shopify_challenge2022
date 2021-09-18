import React, {useEffect, useState} from 'react'
import {AiFillHeart} from 'react-icons/ai'
import Cookies from 'js-cookie'
import "./likeButton.css";

function LikeButton(props){

    const[like,setLike]=useState(Cookies.get(props.image));// loads the state with the saved session cookie
    useEffect(()=>{
        setLike(sessionCookies())

    },[]);
    //Getting the session cookie for the liked photos that have been liked or not from the previous session
    const sessionCookies=()=>{
        const sessionCookie = Cookies.get(props.image);
        if (sessionCookie === undefined) {
            return false;
        } else {
            return JSON.parse(sessionCookie);
        }
    }
    //Function controls toggling between liking and unliking the image
    const LikeFunc=()=>{
        if (like===false){
            setLike(true);
            Cookies.set(props.image,true)
        }
        else{
            setLike(false);
            Cookies.set(props.image,false)
        }
    }
    let btn_state=like?"likes":"unlike"; //Switches between the state of the button
    return(
        <AiFillHeart className={btn_state} onClick={LikeFunc} />
    );
}

export default LikeButton
