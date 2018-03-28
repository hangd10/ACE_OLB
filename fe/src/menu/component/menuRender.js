import React from 'react';
import { Link } from "react-router-dom";
import styles from '../menuStyles.css'


let MenuRender = ( props ) => {

    console.log("menu render: ", props)

    return (

      <ul
        className={"menuList"}
      >

        {
          props.menuItems.map((menuItem, i) => {
            return (
              <li
                id={menuItem.id}
                className={menuItem.class + " menuItem"}
                key={i}
                >
                <Link to={menuItem.path}>
                  {menuItem.name}
                </Link>
              </li>
            );
          }
        )}

      </ul>

    )

}

export default MenuRender;
