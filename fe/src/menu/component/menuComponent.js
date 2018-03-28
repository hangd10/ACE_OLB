import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import MenuRender from './menuRender'
// import * as actions from '../actions';

class MenuComponent extends Component {

    constructor(props) {

      super(props)

    }

    componentDidMount(){
      console.log("new menu: ", this)
    }

    render() {

      return (
        <MenuRender
          menuItems={this.props.menuItems}
        />
      );

    }


}

export default MenuComponent;
