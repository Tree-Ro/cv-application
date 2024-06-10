import { useState } from 'react'
import FormButton from './formButton' 
import FormField from './formField'
import AddedItems from './addedItems'

import generateUniqueId from '../../scripts/generateUniqueId'

function Form({ svgIcon, formData, setResumeContent, resumeContent }) {
  const [isOpened, setIsOpened] = useState(false)
  const [inputValues, setInputValues] = useState({})

  function handleClick() {
    setIsOpened(!isOpened)
  }

  function addResumeContent(newContent) {
    const id = generateUniqueId(); 
    const newResumeContent = [...resumeContent];

    newResumeContent.push({ ...newContent, id });
    setResumeContent(newResumeContent);
  
    setInputValues({});
  }

  return (
    <div className='form'>
      <div className='form-header' onClick={handleClick}>
        <img src={svgIcon} alt={`${formData.title} icon`}></img>
        <h2>{formData.title}</h2>
      </div>
        {isOpened &&
          <div className='form-content'>
            {formData.title !== 'General' && 
                <AddedItems resumeMethods={[resumeContent, setResumeContent]} inputMethods={[inputValues, setInputValues]}/>
            }
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
            <div className='form-buttons'>
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
            </div>
          </div>
        }
    </div>

  )
}

export default Form