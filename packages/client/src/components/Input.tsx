import React from "react";

export const Input = ({type, val, fn, placeholder, style}) => {
    return (
        <input 
          type={type} 
          value={val} 
          onChange={fn}
          className={style}
          placeholder={placeholder}/>
    );
}