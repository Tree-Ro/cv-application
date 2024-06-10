export default function AddedItems({ resumeMethods, inputMethods }) {

  const [resumeContent, setResumeContent] = resumeMethods
  const [inputValue, setInputValue] = inputMethods

  function handleDelete(itemId) {
    const newContent = resumeContent.filter((item)=> item.id !== itemId )

    setResumeContent(newContent)
  }

  function handleEdit(itemId) {
    handleDelete(itemId)

    const itemToEdit = resumeContent.find((item) => item.id === itemId)

    setInputValue(itemToEdit)
  }

  return (
    <>
      {resumeContent.map((item)=> {
        const values = Object.values(item)
        return(
        <div key={item.id} className='added-item'>
          <div className='item-description'>
            <p><b>{values[0]}</b></p>
            <p>{values[1]}</p>
          </div>
          <div className='item-actions'>
            <img src="./trash-solid.svg" alt="Remove Item Icon" onClick={() => handleDelete(item.id)}/>
            <img src="./pen-to-square-solid.svg" alt="Edit item Icon" onClick={() => {handleEdit(item.id)}} />
          </div>
        </div>
      )})}
    </>
  ) 
}