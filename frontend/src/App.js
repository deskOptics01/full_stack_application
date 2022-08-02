import logo from './logo.svg';
import './App.css';
import ShirtContainer from './components/ShirtsContainer';
import PantsContainer from './components/PantsContainer';
import React from 'react'
import {Provider} from 'react-redux'
import store from'./redux/store'
import ItemContainer from './components/ItemContainer';
import{Switch,Route,Navlink,Redirect} from 'react-router-dom'

function App() {
  <div className='App'>
    <switch>
      <Route path = {"/"} exact component = {ItemContainer}/>
      <Route path = {"/shirts"} exact component = { ShirtContainer}/>
      <Route path = {"/pants"} exact component = {PantsContainer}/>
    </switch>
  </div>
  return (
    <Provider store = {store}>
    <div className="App">
      <ShirtContainer/>,
      <PantsContainer/>,
      <ItemContainer pants/>
      <ItemContainer shirts/>
    </div>
     </Provider>
  );
}

export default App;
