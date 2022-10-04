import React from "react";
import '../styles/button.css'

export default function Button(props){
    const isOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=')
    }
    return (
      <div
        className={`button-container ${
          isOperator(props.children) ? "operator" : " "
        }`.trimEnd()}
        onClick={() => props.shift(props.children)}
      >
        {props.children}
      </div>
    );

}






