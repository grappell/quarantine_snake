import React from 'react'; 
import './food.css';

function Food ({top, left}) {
    var foodVar = {left: `${left}px`, top: `${top}px`};
    return(
        <div className = 'food' style = {foodVar}>
            
        </div>
    )

}

export default Food