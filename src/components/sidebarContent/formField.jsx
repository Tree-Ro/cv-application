import { useState } from 'react'

function FormField({title='', type='text', placeholder='', maxLength='16'}) {
  const [fieldValue, setFieldvalue] = useState("That's a very good point")

  function handleChange(e) {
    setFieldvalue(e.target.value)
  }

  const textAreaField = (
    <textarea 
    style={{ resize: 'vertical'}} 
    placeholder={placeholder} 
    maxLength={maxLength}
    value={fieldValue}

    onChange={handleChange}
    />)
  const inputField = (
    <input 
    type={type} 
    placeholder={placeholder} 
    maxLength={maxLength}
    value={fieldValue}

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