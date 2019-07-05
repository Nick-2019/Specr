import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './Containers/Homepage'
import ComputerContainer from './Containers/ComputerContainer'
import ComputerPage from './Containers/ComputerPage'
import About from './AboutUs'
import Login from './Login'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './header'
import Survey from './Containers/Survey'

import Test from './LoginTesting'



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <header className="App-header">
      </header> */}
        <Header />


        <Switch>
        <Route path='/home' render={() => <Homepage />} />
        <Route path='/computers/:id' render={(e) => <ComputerPage id={e} /> } />
        {/* <Route path='/computer' render={() => <ComputerContainer/> } /> */}
        {/* <ComputerContainer /> */}
        <Route path='/about' render={() => <About/> } />
        {/* <About /> */}
        <Route path='/survey' render={() => <Survey /> }  />
        {/* <Route path='/test/login' render={() => <Test />} /> */}
        <Login />
        <p>
          Hello world!
        </p>
        <h1
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Bird up! The WORST show on television! */}
        </h1>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
