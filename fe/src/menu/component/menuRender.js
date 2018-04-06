import React from 'react';
import { Link } from "react-router-dom";
import '../styles/menu.css';


let MenuRender = ( props ) => {

    return (

      <ul className={"Menu"}>

        { props.menuItems.map((menuItem, i) => {
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
