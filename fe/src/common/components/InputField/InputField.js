import React from 'react';
import PropTypes from 'prop-types';


const InputField = ({ inputID, className, labelClassName, title, placeholder, value, maxLength, icon, errorMessage, onChange, onFocus, onBlur, typeAttr }) => {
  let inputItem;
  return (
    <div className={className}>
      <label
          id={inputID + "Label"}
          className={labelClassName}
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
      <label className="inputFieldErrorMessage">
        {errorMessage}
      </label>
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
};

export default InputField;
