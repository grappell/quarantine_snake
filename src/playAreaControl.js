import React from 'react';

function PlayAreaControler ({score, restart, hideButton}) {
    return( 
        
        <div id="playAreaControlerDiv" >
        {hideButton && <button className='playAreaControler' onClick={restart}>RESTART</button>}
        <h1>{score}</h1>
        </div>
    )
}

   
export default PlayAreaControler