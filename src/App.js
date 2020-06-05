import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import WelcomePage from './components/pages/WelcomePage';
import HistoryPage from './components/pages/HistoryPage';
import ManufacturePage from './components/pages/ManufacturePage';
import PartnersPage from './components/pages/PartnersPage';


export const MyContext = React.createContext();

class MyProvider extends Component {
    state = {
      pl: true
    }
    render(){
      return(
        <MyContext.Provider value={{
          state: this.state,
          changeLanguage: () => this.setState({pl: !this.state.pl})
        }}>
          {this.props.children}
        </MyContext.Provider>
      )
    }
  }



function App() {

  return (
    <MyProvider>
      <Router>
        <Switch>
          <Route path='/history'>
            < HistoryPage />
          </Route>
          <Route path='/manufacture'>
            < ManufacturePage />
          </Route>
          <Route path='/partners'>
            < PartnersPage />
          </Route>
          <Route path='/'>
            < WelcomePage />
          </Route>
        </Switch>
      </Router>
    </MyProvider>
  )
}

export default App;
