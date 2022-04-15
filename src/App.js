import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { GlobalStyle } from './components/styled/Global.styled'

import Navbar from "./components/navbar/Navbar"
import Main from "./components/main/Main"
import Background from './components/background/Background.js'
import Software from './components/software/Software'
import Contact from './components/contact/Contact'

export default class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
          <GlobalStyle/>
        
          <Navbar/>
          <Routes>
            <Route path="/" exact element={<Main/>} />
            <Route path="/software" exact element={<Software/>} />
            <Route path="/background" exact element={<Background/>} />
            <Route path="/contact" exact element={<Contact/>} />
          </Routes>

        </BrowserRouter>
      </div>
    )
  }
}
