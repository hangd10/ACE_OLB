import React from 'react';
import PropTypes from 'prop-types';


const InputField = ({ inputID, title, placeholder, value, maxLength, icon, errorMessage, onChange, onFocus, onBlur, typeAttr, throwError=false }) => {
  let inputItem;
  return (
    <div className="inputFieldContainer">
      <label
          id={inputID + "Label"}
          className={inputID + "labelClass"}
          onClick={() => { inputItem.focus(); }}>
        {title}
      </label>
      <div className="inputContainer">
        <input
          id={inputID}
          className="inputElement"
          placeholder={placeholder}
          ref={(input) => { inputItem = input; }}
          onChange={onChange}
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
          maxLength={maxLength}
          type={typeAttr}
        />
        {icon}
      </div>
      {throwError ?
        <label
          className="inputFieldErrorMessage"
          id={inputID + "ErrorMessage"}
        >
          {errorMessage}
        </label> :
        null
      }
    </div>
  );
};

InputField.propTypes = {
  inputID: PropTypes.string,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  maxLength: PropTypes.string,
  icon: PropTypes.object,
  errorMessage: PropTypes.string,
  typeAttr: PropTypes.string,

  // customProp: function(props, propName, componentName) {
  //   if (props[propName] !== undefined && !/matchme/.test(props[propName])) {
  //     return new Error(`${ props[propName] } is required.`);
  //   }
  // }
};

export default InputField;
