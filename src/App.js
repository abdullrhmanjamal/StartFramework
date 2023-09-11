// import logo from './logo.svg';
import About from './About/About';
import './App.css';
import Home from './Home/Home';
// import Navbar from './Navbar/Navbar';
import {RouterProvider,createBrowserRouter, createHashRouter} from 'react-router-dom'
import MainLayout from './Layout/MainLayout.jsx'


import React, { Component } from 'react'
import Contact from './Contact/Contact';
import Portfoli from './Portfolio/Portfoli';
import NotFound from './Notfound/NotFound';

export default class  extends Component {
  routes=createHashRouter([
    {path: '/', element:<MainLayout/>, children:[

      {path:'home',element:<Home/>},
      {path:'about',element:<About/>},
      {path:'portfolio',element:<Portfoli/>},
      {path:'contact',element:<Contact/>},
      {path:'*',element:<NotFound/>},
    ]}
  ])
  render() {
    return (
      <>
      <RouterProvider router={this.routes}/>
      </>
    )
  }
}

