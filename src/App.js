import './App.css';
import { useState } from 'react'

function App() {
  const squares = [[1,2,3],[4,5,6],[7,8,9]]
  return (
    <div className="App">
      <GameView squares={squares}/>
    </div>
  );
}

const GameView = ({squares}) => {
  const [status, setStatus] = useState('X')
  const [values, setValues] = useState([])
  const [isWin, setIsWin] = useState(false)
  const getWinStatus = (newValue) => {
    const lines = [
      [1,2,3],
      [4,5,6],
      [7,8,9],
      [1,4,7],
      [2,5,8],
      [3,6,9],
      [1,5,9],
      [3,5,7]
    ]
    for(let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if(newValue[a] === newValue[b] && newValue[b] === newValue[c]) return newValue[a]
    }
    return ''
  }
  const handleClick = (index) => {
    if(values[index] || isWin) return;
    const newValue = [...values]
    newValue[index] = status
    let winner = getWinStatus(newValue)
    if(winner) {
      setIsWin(true)
    } else {  
      const newStatus = status === 'X' ? 'O' : 'X'
      setStatus(newStatus)
    }
    setValues(newValue)
  }
  return (
    <div>
      <div>
        {isWin ? 'The Winner is:' + status : 'Current Player is:' + status}
      </div>
      {
        squares.map((row,index) => (
          <div className='board-row' key={index}>
            {row.map(item => (
              <Square key={item} onClick={() => handleClick(item)} text={values[item]}/>
            ))}
          </div>
        ))
      }
      
    </div>
  )
}

const Square = ({onClick, text}) => {
  const [clicked, setClicked] = useState(false)
  const handleClick = (e) => {
    setClicked(true)
    onClick && onClick(e)
  }
  return(
    <button onClick={handleClick} className='square-btn'>
      {clicked && text }
    </button>
  )
}

export default App;
