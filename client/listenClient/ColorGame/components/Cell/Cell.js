import React from 'react';
import './Cell.css';
import watermelon from './watermelon.png';
import orange from './orange.png';
import broccoli from './broccoli.png';
import blueberry from './blueberry.png';
import bannana from './bannana.png';

const Cell = ({color, size}) => {
  let classString = "cell-" + size + " " + color;
  if (color === 'red') {

  }
  return (
    <div className={classString}>
      {color === 'red' && <img src={watermelon} alt="watermelon" style={{width: "50px", height: "50px"}}></img>}
      {color === 'orange' && <img src={orange} alt="orange" style={{width: "50px", height: "50px"}}></img>}
      {color === 'green' && <img src={broccoli} alt="broccoli" style={{width: "50px", height: "50px"}}></img>}
      {color === 'blue' && <img src={blueberry} alt="blueberry" style={{width: "50px", height: "50px"}}></img>}
      {color === 'yellow' && <img src={bannana} alt="bannana" style={{width: "50px", height: "50px"}}></img>}
    </div>
  );
}

export default Cell;