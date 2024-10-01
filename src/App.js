// import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm.js';
import Alert from "./components/Alert.js";
import ColourGrid from "./components/ColourGrid.js";
// import About from "./components/About.js"
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
//   // Link
// } from "react-router-dom";

// import About from './components/About.js';
function App() {
  const [darkMode,setDarkmode] = useState('light')//dark mode enabled or not
  const [textColor,setTextColor] = useState('dark')//for text color
  const [darkModeHead,setHeadDark] = useState('DarkMode')
  const [alert,setAlert] = useState(null)
  
  const changeColor = (e)=>{
    console.log(e.target.className.split(' ')[1].split('-')[1])
    let m = e.target.className.split(' ')[1].split('-')[1]
    if (darkMode==='dark'){
      toggleMode()
    }
    if (m==='primary'){
      setDarkmode('primary')
      document.body.style.backgroundColor = 'rgb(0 88 255 / 45%)'
    }else if(m==='secondary'){
      document.body.style.backgroundColor = '#b1b1b1'
      setDarkmode('secondary')
    }else if(m==='danger'){
      document.body.style.backgroundColor = '#ec7979'
      setDarkmode('danger')
    }else if(m==='success'){
      document.body.style.backgroundColor = '#aaf4aa'
      setDarkmode('success')
    }else if(m==='warning'){
      document.body.style.backgroundColor = '#ffff9f'
      setDarkmode('warning')
    }else if(m==='info'){
      document.body.style.backgroundColor = '#5dddff'
      setDarkmode('info')
    }
  }

  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () =>{
    if (darkMode==='dark'){
      setDarkmode('light')
      setTextColor('dark')
      setHeadDark('DarkMode')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light mode has been enabled','success')
      document.title = 'TextUtils : Home'
      //////////////
      // setInterval(function(){
      //   document.title = 'TextUtils : download It Now'
      // },1000)
      // setInterval(function(){
      //   document.title = 'TextUtils : Virus Attack'
      // },1500)
      ///////////////////////////////for test purpose
    }else {
      setTextColor('light')
      setDarkmode('dark')
      setHeadDark('LightMode')
      document.body.style.backgroundColor = 'rgb(6 8 29)'
      document.body.style.color = '#bebebe';
      showAlert('Dark mode has been enabled','success')
      document.title = 'TextUtils : DarkMode'
    }
  }
  return (
    // <Router>
    <>
      <Navbar title = "WhatIsThisFor" aboutText='More About Company' mode={darkMode} toggleMode={toggleMode} textColor = {textColor} darkModeHead = {darkModeHead}/>
      <div className="alert"><Alert my_alert = {alert}/></div>
      <div className="container">
        <h4>Select The Theme</h4>
        <ColourGrid colourCode ={changeColor}/>
      </div>
      
      <div className="container">
      <TextForm show = {showAlert} heading='Enter The Text to Analyse Below' mode={darkMode}/>
      {/* <Routes>
            <Route exact path="/about" element={<About />}>
              
            </Route>
            <Route exact path="/" element={<TextForm show = {showAlert} heading='Enter The Text to Analyse Below' mode={darkMode}/>}>
              
            </Route>
      </Routes> */}
        
      </div>
    {/* <About />  */}
    {/* </Router> */}
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with Anchin
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
