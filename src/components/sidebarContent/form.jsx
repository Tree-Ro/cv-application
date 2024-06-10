import { useState } from 'react'
import FormButton from './formButton' 
import FormField from './formField'

function Form({ svgIcon, formData, setResumeContent, resumeContent }) {
  const [isOpened, setIsOpened] = useState(false)
  const [inputValues, setInputValues] = useState({})

  function handleClick() {
    setIsOpened(!isOpened)
  }

  function addResumeContent(newContent) {
    let newResumeContent = resumeContent
    newResumeContent.push(newContent)

    setResumeContent(newResumeContent)
    setInputValues({})
  }

  return (
    <div className='form'>
      <div className='form-header' onClick={handleClick}>
        <img src={svgIcon} alt={`${formData.title} icon`}></img>
        <h2>{formData.title}</h2>
      </div>
      {isOpened &&
        <>
          {formData.title !== 'General' && resumeContent.map((item, index)=> (
            <div key={index} className='added-item'>
              <h4>{Object.values(item)[1] + ' - ' + Object.values(item)[0]}</h4> {/* Create a component out of this that allows you to edit the addition? */}
            </div>
          ))}
          {formData.fields.map((field) => (
            <FormField 
              key={field.title}
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

            callback={formData.title === 'General' ? setResumeContent : addResumeContent} 
            formContent={inputValues} 
          />
          <FormButton 
            title='Clear' 

            callback={setInputValues} 
            formContent={[]} 
          />
        </>
      }
    </div>

  )
}

export default Form