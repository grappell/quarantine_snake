import React from 'react';
import Snake from './Snake.js';
// eslint-disable-next-line
import {useEffect} from 'react';


function SnakeStorage ({snakeBodyPositions, direction}) {

    var snakes = [];
    for (var i=1; i<snakeBodyPositions.length; i++) {
      snakes.push(<Snake key={i} top={snakeBodyPositions[i].top} left={snakeBodyPositions[i].left}/>)
    }

    return(
        <div id="snakeContainer">
          <Snake isEyes = "true" direction={direction} key={0} top={snakeBodyPositions[0].top} left={snakeBodyPositions[0].left}/>
        {snakes}

      </div>
    );
}




export default SnakeStorage;