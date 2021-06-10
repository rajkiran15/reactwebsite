import React,{ useState } from 'react'
import ReactDOM from 'react-dom';
import css from './mystyle.css';
import NavBar from './components/nav';
import ContactUs from './components/contactus';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Location from './components/Location';


class App extends React.Component{
    render(){
        return(
          <Router>
              <div className="App">
                  <NavBar/>
                  <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/contact" component={ContactUs}/>
                      <Route exact path="/about" component={About}/>
                      <Route exact path="/location" component={Location}/>
                  </Switch>
              </div>
          </Router>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById("root"));

 
