import { useState } from 'react'
import FormButton from './formButton' 

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

      {isOpened &&
      <>
      <FormButton title='Add' callback={console.log} formContent={'Added Content'}/>
      <FormButton title='Clear' callback={console.log} formContent={'Cleared Content'}/>
      </>
      }
    </div>
    </>
  )
}

export default Form