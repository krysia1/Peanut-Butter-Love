import React, {Component} from "react";
import { Button } from '@material-ui/core'

class Toggle extends Component{

  state = {
    on: false,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }


  render() {
    return(
      <div>
        {this.state.on && this.props.children}
        <Button id='toggle-button' variant="outlined" color="secondary"onClick={this.toggle}>
          tak/nie
        </Button>
      </div>

    );

  }
}

export default Toggle;