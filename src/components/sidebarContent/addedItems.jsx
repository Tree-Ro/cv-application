export default function AddedItems({ resumeContent, setResumeContent }) {

  function handleClick(itemId) {
    const newContent = resumeContent.filter((item)=> item.id !== itemId )

    setResumeContent(newContent)
  }

  return (
    <>
      {resumeContent.map((item)=> {
        const values = Object.values(item)
        return(
        <div key={item.id}>
          <p><b>{values[0]}</b></p>
          <p>{values[1]}</p>
          <img src="./trash-solid.svg" alt="Remove Item Icon" onClick={() => handleClick(item.id)}/>
        </div>
      )})}
    </>
  ) 
}