import logo from './logo.svg';
import './App.css';
import ShirtContainer from './components/ShirtsContainer';
import PantsContainer from './components/PantsContainer';
import React from 'react'
import {Provider} from 'react-redux'
import store from'./redux/store'
import ItemContainer from './components/ItemContainer';


function App() {
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
