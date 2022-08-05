import React from "react";

export const Button = ({type, val, onClickAction, style}) => {
    return (
        <button type={type} className={style} onClick={onClickAction}>{val}</button>
    );
}