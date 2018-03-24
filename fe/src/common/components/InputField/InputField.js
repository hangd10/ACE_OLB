import React from 'react';
import PropTypes from 'prop-types';

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

InputField.propTypes = {
  onChangeHandler: PropTypes.func,
  classNames: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputID: PropTypes.string,
  throwError: PropTypes.bool.isRequired,

}

export default InputField;
