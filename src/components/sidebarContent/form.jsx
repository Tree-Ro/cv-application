import { useState } from 'react'
import FormButton from './formButton' 
import FormField from './formField'

function Form({ svgIcon, formData }) {
  const [isOpened, setIsOpened] = useState(false)
  const [inputValues, setInputValues] = useState({})

  function handleClick() {
    setIsOpened(!isOpened)
  }

  return (
    <div className='form'>
      <div className='form-header' onClick={handleClick}>
        <img src={svgIcon} alt={`${formData.title} icon`}></img>
        <h2>{formData.title}</h2>
      </div>
      {isOpened &&
        <>
          {formData.fields.map((field, index) => (
            <FormField 
              key={index}
              title={field.title}
              type={field.type}
              placeholder={field.placeholder}
              maxLength={field.maxLength}

              inputValues={inputValues}
              setInputValues={setInputValues}
            />
          ))}
          <FormButton 
            title='Add' 
            callback={console.log} 
            formContent={'Added Content'} 
          />
          <FormButton 
            title='Clear' 
            callback={console.log} 
            formContent={'Cleared Content'} 
          />
        </>
      }
    </div>

  )
}

export default Form