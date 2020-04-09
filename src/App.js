import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


import Crud from './components/Crud' ;
import Second from './components/Second' ;

export default class App extends Component {
  

  render() {
    
    return(
      <div>
        
          <Router>

            <nav>   
              <Link to="/comment">Comments</Link> ***
              <Link to="/second">Second Page</Link> ***
      
            </nav>
 
            <Switch> 

              <Route exact path="/comment">
                <Crud />
              </Route>
              <Route exact path="/second">
                <Second />
              </Route>
              
            </Switch>

          </Router>

        
      </div>
     )
    
  }
}
