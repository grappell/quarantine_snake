import React, { useState } from 'react';
import SnakeStorage from './snake_storage.js' 
import KeyboardEventHandler from 'react-keyboard-event-handler';
import useInterval from '@use-it/interval';
import Food from './food.js'
import PlayAreaControler from './playAreaControl.js'


function PlayArea (props) {
    const [score, setScore] = useState(4)
    const [direction, setDirection] = useState('right');
    const [actualDirection, setActualDirection] = useState('right')
    const [snakeBodyPositions, setSnakeBodyPositions] = useState([{left:59*3, top:1}, {left:59*2, top:1}, {left:59*1, top:1}, {left:1, top:1}])
    const [food, setFood] = useState({top: Math.ceil(Math.random() * 12 ), left: Math.ceil(Math.random() * 22 )})
    const [hideButton, setHideButton] = useState(false)
    const [buttonTick, setButtonTick] = useState(0)
    // The diffreencr is in intervals of 9 beacuse there is 8px around and 1 bonous one on the side of the play area.

    function isCollide(snakeTop, snakeLeft, foodTop, foodLeft) {
        return !(
            ((snakeTop + 58) < (foodTop)) ||
            (snakeTop > (foodTop + 50)) ||
            ((snakeLeft + 58) < foodLeft) ||
            (snakeLeft > (foodLeft + 50))
        );
    }

    function isCollideWithSnakeBody(top, left, otherTop, otherLeft) {
        return !(
            ((top) < (otherTop)) ||
            (top > (otherTop)) ||
            ((left) < otherLeft) ||
            (left > (otherLeft))
        );
    }
    // The hight and with of the snake (including borders) is 58px.
    // The apple is 50px x 50px and with no 
    
    function restart(){
        setScore(4);
        setDirection('right');
        setActualDirection('right');
        setSnakeBodyPositions([{left:59*3, top:1}, {left:59*2, top:1}, {left:59*1, top:1}, {left:1, top:1}]);
        setFood({top: Math.ceil(Math.random() * 12 ), left: Math.ceil(Math.random() * 22 )});
        setHideButton(false)
        setButtonTick(0)
        
    }

    function isSnakeColiding() {
        const copyOfSnake = [...snakeBodyPositions];
        const head = [...snakeBodyPositions].shift();
        for(var i = 1; i<copyOfSnake.length-1; i+=1){
            if(isCollideWithSnakeBody(copyOfSnake[i].top, copyOfSnake[i].left, head.top, head.left)) {
                return(true)
            }
        }
        return(false)
    }

    useInterval (() => {
        snakeBodyPositions.pop();
        var left = snakeBodyPositions[0].left;
        var top = snakeBodyPositions[0].top;
        setActualDirection(direction)
        if (direction === 'right') {
            left += 58;
        } else if (direction === 'left') {
            left -= 58;
        } else if (direction === "up") {
            top -= 58;
        } else if (direction === 'down') {
            top += 58;
        } 


        if (isCollide(top, left, food.top*58+5, food.left*58+7)) {
            setFood({top: Math.ceil(Math.random() * 12 ), left: Math.ceil(Math.random() * 22 )})
            snakeBodyPositions.push({left:snakeBodyPositions[snakeBodyPositions.length-1].left, top: snakeBodyPositions[snakeBodyPositions.length-1].top    })
            setScore(score + 1);
        }

        if (buttonTick > 3) {
            setHideButton(true)
        }

        snakeBodyPositions.unshift({left, top});
        setSnakeBodyPositions([...snakeBodyPositions]);
        setButtonTick(buttonTick + 1)

        if (top < 1 || top > 12 * 59 || left < 1 || left > 22 * 59) {
            alert("you lost by hitting the wall, your score was " + score)
            restart()
        }

        if(isSnakeColiding()) {
            alert("you lost by going onto your self, your score was " + score)
            restart()
        }

    }, 250);
    return (
        <div id='playAreaContainer'>
            <PlayAreaControler score={score} restart={restart} hideButton={hideButton}/>
            <div id = "playArea">
                <KeyboardEventHandler
                handleKeys={['left', 'right', 'up', 'down']}
                onKeyEvent={(key, e) => setDirection(key)} />
                <SnakeStorage snakeBodyPositions={snakeBodyPositions} direction={actualDirection}/>
                <Food top={58*food.top + 5} left={58*food.left + 7}/>
            </div>
        </div>
    
    )
}

export default PlayArea;
