//a reusable component is a piece of UI that can be used in various parts of 
//an application to build more than one UI instance

import React, {useState} from "react";

function FormInput(props) {  //FormInput() component receives an input type to determine what type of input element to render (email, text, etc)
  const [inputType] = useState(props.type)
  const [inputValue, setInputValue] = useState('')

  function handleChange(event){ //handleChange()checks if a method to receive the state data is available via props then sends the current state data to it for further processing.
    setInputValue(event.target.value);
    if(props.onChange) props.onChange(inputValue) //takes in a method onChange() to receive the value sent back out from the input.
  }
  return (
    <>
      <input type={inputType} value={inputValue} name="input-form" onChange={handleChange} class="inputclass"/>
    </>
  );
}
export default TextInput;