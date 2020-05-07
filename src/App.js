import React from 'react';
import './App.css';
// import {useEffect, useState} from 'react'
import PlayArea from './playArea';


function App() {
//   useEffect(() => {
//     console.log('HTML LOADED');
//     setInterval (function(){
//     setForward(forward + 1) 
//     }, 1000)
//     document.addEventListener("keydown", keyDownTextField, false);
//     function keyDownTextField(e) {
//     var keyCode = e.keyCode;
//     if(keyCode === 37) {
//     alert("You hit the left arrow key.");
//      } else if (keyCode === 39) {
//     alert("You hit the right arrow key");
// }
// }
//   });
// useEffect(() => {
//   const interval = setInterval(() => {
//     setForward(forward + 1);
//   }, 1000);
//   return () => clearInterval(interval);
// }, [forward]);
  return (
    <div>
      <PlayArea />
    </div>
  );
}

export default App;
