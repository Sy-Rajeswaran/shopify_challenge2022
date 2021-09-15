import React from 'react'
import './shareButton.css'
function ShareButton(props){
    const shareFunc=()=>{
        navigator.clipboard.writeText(props.link)
    }
    return(
        <button className="share" onClick={shareFunc}>Share</button>
    );

};
export default ShareButton
