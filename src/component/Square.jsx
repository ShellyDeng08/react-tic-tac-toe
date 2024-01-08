import '../App.css';
import { useState } from 'react'
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

export default Square