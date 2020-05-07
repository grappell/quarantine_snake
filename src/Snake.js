import React from 'react';
import "./Snake.css"

function Snake({isEyes, direction, top, left}) { 
    var snakeVar = {left: `${left}px`, top: `${top}px`};
    var classForSnake = "snake " + (isEyes ? direction : "");
    return(<div className = {classForSnake}  style = {snakeVar}>
            {isEyes && <div className = "theActualEye leftEye" ></div> }
            {isEyes && <div className = "theActualEye rightEye"></div> }
        </div>)
}

export default Snake;
