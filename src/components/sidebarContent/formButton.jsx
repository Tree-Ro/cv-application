function FormButton({title='', callback, formContent}) {

  function handleClick() {
    callback(formContent)
  }

  return (
    <button onClick={handleClick}>{title}</button>
  )

}

export default FormButton