import React, { useRef, useState } from 'react';
import './Tictactoe.css';

import circle_icon from '../assets/circle.png';
import cross_icon from '../assets/cross.png';

const data = ["", "", "", "", "", "", "", "", ""];

const Tictactoe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [board, setBoard] = useState([...data]);
  const titleRef = useRef(null);

  const toggle = (e, num) => {
    if (lock || board[num]) return;

    const newBoard = [...board];
    newBoard[num] = count % 2 === 0 ? "x" : "o";
    setBoard(newBoard);
    setCount(count + 1);

    checkWin(newBoard);
  };

  const handleReset = () => {
    setBoard([...data]);
    setCount(0);
    setLock(false);
    titleRef.current.innerHTML = "Tic Tac Toe by<span style={{ marginLeft: '15px' }}> Hammad</span>";
  };

  const checkWin = (newBoard) => {
    const winConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]            
    ];

    for (const condition of winConditions) {
      const [a, b, c] = condition;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        won(newBoard[a]);
        return;
      }
    }
  };

  const won = (winner) => {
    setLock(true);
    titleRef.current.innerHTML = `Congratulations: <img style={{width:'20px'}} src="${winner === "x" ? cross_icon : circle_icon}" alt="${winner} icon"/>`;
  };

  return (
    <div className='container'>
      <div className="title" ref={titleRef}>Tic Tac Toe by<span style={{ marginLeft: '15px' }}> Hammad</span></div>
      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={(e) => toggle(e, 0)}>
            {board[0] === "x" && <img src={cross_icon} alt="cross_icon" />}
            {board[0] === "o" && <img src={circle_icon} alt="circle_icon" />}
          </div>
          <div className="boxes" onClick={(e) => toggle(e, 1)}>
            {board[1] === "x" && <img src={cross_icon} alt="cross_icon" />}
            {board[1] === "o" && <img src={circle_icon} alt="circle_icon" />}
          </div>
          <div className="boxes" onClick={(e) => toggle(e, 2)}>
            {board[2] === "x" && <img src={cross_icon} alt="cross_icon" />}
            {board[2] === "o" && <img src={circle_icon} alt="circle_icon" />}
          </div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={(e) => toggle(e, 3)}>
            {board[3] === "x" && <img src={cross_icon} alt="cross_icon" />}
            {board[3] === "o" && <img src={circle_icon} alt="circle_icon" />}
          </div>
          <div className="boxes" onClick={(e) => toggle(e, 4)}>
            {board[4] === "x" && <img src={cross_icon} alt="cross_icon" />}
            {board[4] === "o" && <img src={circle_icon} alt="circle_icon" />}
          </div>
          <div className="boxes" onClick={(e) => toggle(e, 5)}>
            {board[5] === "x" && <img src={cross_icon} alt="cross_icon" />}
            {board[5] === "o" && <img src={circle_icon} alt="circle_icon" />}
          </div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={(e) => toggle(e, 6)}>
            {board[6] === "x" && <img src={cross_icon} alt="cross_icon" />}
            {board[6] === "o" && <img src={circle_icon} alt="circle_icon" />}
          </div>
          <div className="boxes" onClick={(e) => toggle(e, 7)}>
            {board[7] === "x" && <img src={cross_icon} alt="cross_icon" />}
            {board[7] === "o" && <img src={circle_icon} alt="circle_icon" />}
          </div>
          <div className="boxes" onClick={(e) => toggle(e, 8)}>
            {board[8] === "x" && <img src={cross_icon} alt="cross_icon" />}
            {board[8] === "o" && <img src={circle_icon} alt="circle_icon" />}
          </div>
        </div>
      </div>
      <button className="reset" onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Tictactoe;
