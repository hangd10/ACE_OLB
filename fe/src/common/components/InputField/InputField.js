import React from 'react';

/***
Input Field Component Props:

  onChange[function] - call to trigger on input val change
  classNames[string] - css class names (comma seperated string)
  type[input field type] - html input field type
  placeholder[string] - placeholder text in input field
  name[string] - html input field name
  id[string] - html element id string

  Pass props as object into stateless component.


***/


const InputField = ({ onChangeHandler, classNames, inputType, placeHolder, inputName, inputID, throwError }) => {

  return (

    <div>

      <input
        onChange={onChangeHandler}
        className={classNames + "blockLayout"}
        type={inputType}
        placeholder={placeHolder}
        name={inputName}
        id={inputID}
      />


      { throwError ?
        (<sup className="errorScript throwError" id={inputID+ "InputError"}>
          {inputName} is invalid
        </sup>) : null }


    </div>

)};

export default InputField;
