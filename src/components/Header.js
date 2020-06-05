import React, {Component} from "react";
import Logo from '../img/PBLlogoWhite.svg'

class Header extends Component {
  render() {
    return(
      <div className='header'>
        <img className='logo' src={Logo} alt='logo'></img>
        <div className='title-container'>
          <h1 className='heading-primary'>
            <span id='heading-primary--main'>{this.props.title}</span>
            <span id='heading-primary--sub'>{this.props.subtitle}</span>
          </h1>
        </div>
      </div>
    );
  }
}

export default Header;