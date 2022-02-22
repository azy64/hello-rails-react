import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Greeting from "./Greeting";
import Home from "./Home";
import NavBar from "./NavBar";
import { Provider } from "react-redux";
import store from "../redux/configstore";

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/hello" 
            element={<Greeting/>}
          />
        </Routes>      
      </BrowserRouter>
      </Provider>      
    );
  }
}


export default App
