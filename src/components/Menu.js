import React, {Component} from "react";
import {
MenuList, MenuItem
} from '@material-ui/core'
import { Link } from 'react-router-dom';


class Menu extends Component {
  render(){
    return (
      <div className='menu-container'>
        <MenuList>
          <MenuItem id='menu-item' component={Link} to='/'>Strona główna</MenuItem>
          <MenuItem id='menu-item' component={Link} to='/history'>Historia</MenuItem>
          <MenuItem id='menu-item' component={Link} to='/manufacture'>Produkcja</MenuItem>
          <MenuItem id='menu-item' component={Link} to='/partners'>Partnerzy</MenuItem>
      </MenuList>
      </div>
    );
  }
}
export default Menu;