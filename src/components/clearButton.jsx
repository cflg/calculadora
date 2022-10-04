import React from "react";
import '../styles/clear-button.css'

export default function Clear(props){

    return(
        <div className="clear-button"
        onClick={props.clearHandler}>
            {props.children}
        </div>
    )
}






