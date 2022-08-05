import React from "react";

export const Message = ({ message, style }) => {
    return (
        <div className={style} role="alert">
            {message}
        </div>
    );
}