import React from 'react'

const GameHistory = ({history}) => {
    const jumpTo = () => {
        
    }
  return (
    <div>
        {history.map((squares, move) => {
            let description
            if (move > 0) {
            description = 'Go to move #' + move;
            } else {
            description = 'Go to game start';
            }
            return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
            );
        })}
    </div>
  )
}

export default GameHistory