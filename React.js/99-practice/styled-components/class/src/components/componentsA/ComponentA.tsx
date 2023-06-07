import React from 'react'
import StyleButton, {SubmitButton} from '../Button/Button.styles'

const ComponentA = () => {
  return (
    <div>
        <h1>this is Component A</h1>
    <StyleButton>This button is from A</StyleButton>
    <SubmitButton>Submit</SubmitButton>
    </div>
  )
}

export default ComponentA