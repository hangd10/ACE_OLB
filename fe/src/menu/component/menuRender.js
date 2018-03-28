import React from 'react';
import { Link } from "react-router-dom";


let MenuRender = ( props ) => {

    return (

      <ul>

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
