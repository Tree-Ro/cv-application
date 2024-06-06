import { useState } from 'react'

function FormField({title, type, placeholder, maxLength='16', inputValues, setInputValues}) {

  function handleChange(e) {
    let newInput = { ...inputValues }
    newInput[title] = e.target.value 
    setInputValues(newInput)
  }

  const inputField = (
    <input 
    type={type} 
    placeholder={placeholder} 
    maxLength={maxLength}
    value={title in inputValues ? inputValues[title] : ''}

    onChange={handleChange}
  />)
  const textAreaField = (
    <textarea 
    placeholder={placeholder} 
    maxLength={maxLength}
    value={title in inputValues ? inputValues[title] : ''}

    onChange={handleChange}
  />)
    
  return (
    <div className='form-field'>
      <h3>{title}</h3>
    {type !== 'textarea' ? inputField : textAreaField}
    </div>
  )
}

export default FormField