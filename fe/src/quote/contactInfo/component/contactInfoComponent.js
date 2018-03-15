import React, { Component } from 'react';
import ContactInfoRender from './contactInfoRender'

class ContactInfoComponent extends Component {

    constructor(props) {
        super(props);
      }

      handleComponentSubmit = values => {
        // print the form values to the console
        console.log(`ContactInfoComponent... ${ JSON.stringify(values) }`);
      }

    //   cicFunctionParent = (dataFromChild) => {
    //     console.log('cicFunction called ' +dataFromChild);
    //   }
    
      render() {
        return (
          <ContactInfoRender 
            // cicFunction= { this.cicFunctionParent }
            onSubmit ={ this.handleComponentSubmit } 
          />
        );
      }

}

export default ContactInfoComponent;