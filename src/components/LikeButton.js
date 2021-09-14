import React, {useEffect, useState} from 'react'
import "./likeButton.css";

function LikeButton(){
    const[like,setLike]=useState(false);
    useEffect(()=>{
        LikeFunc()
    },[]);
    const LikeFunc=()=>{
        if (like===false){
            setLike(true);
        }
        else{
            setLike(false);
        }
        console.log(like);;//TODO: Take this away
    }
    let btn_state=like?"unlike":"likes";
    return(
        <button className={btn_state} onClick={LikeFunc}>Like</button>
    );
}

export default LikeButton
