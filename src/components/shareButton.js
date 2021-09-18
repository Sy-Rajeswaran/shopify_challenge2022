import React, {useState} from 'react'
import './shareButton.css'
function ShareButton(props){
    const[copy,setCopy]=useState(false)
    const shareFunc=()=>{
        navigator.clipboard.writeText(props.link) // Saves the image link to the clipboard
        if(copy===false){
            setCopy(true)
            setTimeout(function () {
                setCopy(false)
            }, 2000);
        }
    }
    return(
        <button className="share" onClick={shareFunc}>{copy?'Copied!':'Share'}</button>
    );

};
export default ShareButton
