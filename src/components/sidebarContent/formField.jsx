import toCamelCase from '../../scripts/formatCamelCase'

function FormField({title, type, placeholder, maxLength='16', inputValues, setInputValues}) {

  const camelCaseTitle = toCamelCase(title)
  const value = camelCaseTitle in inputValues ? inputValues[camelCaseTitle] : ''

  function handleChange(e) {
    let newInput = { ...inputValues }
    newInput[camelCaseTitle] = e.target.value 
    setInputValues(newInput)
  }

  const inputField = (
    <input 
    type={type} 
    placeholder={placeholder} 
    maxLength={maxLength}
    value={value}

    onChange={handleChange}
  />)
  const textAreaField = (
    <textarea 
    placeholder={placeholder} 
    maxLength={maxLength}
    value={value}

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