

const contactForm = {

   emailInputObj: {
    // onChangeHandler = {props.logCompInput}
    labelClassName: "emailLabelClass",
    title: "Email",
    // value: {""},
    // icon: null,
    maxLenth:"100" ,
    typeAttr: "text",
    placeHolder: "eMail",
    inputID: "email",
    errorMessage: "Email is invalid"
  },

  zipInputObj: {
    // onChangeHandler = {props.logCompInput}
    labelClassName: "zipLabelClass",
    title: "Zipcode",
    // value: {""},
    // icon: null,
    maxLenth:"5" ,
    typeAttr: "number",
    placeHolder: "zipcode",
    inputID: "zipCode",
    errorMessage: "Zipcode is invalid"
  }

}

 export default contactForm;
