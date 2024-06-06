function FormField({title='', type='text', placeholder='', maxLength='16'}) {

  const textAreaField = (
    <textarea 
    style={{ resize: 'vertical'}} 
    placeholder={placeholder} 
    maxLength={maxLength}
    />)


  const inputField = (
    <input 
    type={type} 
    placeholder={placeholder} 
    maxLength={maxLength}
    />)

  return (
    <div className='form-field'>
      <h3>{title}</h3>
    {type !== 'textarea' ? inputField : textAreaField}
    </div>
  )
}

export default FormField