import { useState } from 'react'

function Form({title, svgIcon, children}) {
  const [isOpened, setIsOpened] = useState(false)

  function handleClick() {
    setIsOpened(!isOpened)
  }

  return (
    <>
    <div className='form'>
      <div className='form-header' onClick={handleClick}>
        <img src={svgIcon}></img>
        <h2>{title}</h2>
      </div>
      {isOpened && children}
    </div>
    </>
  )
}

export default Form