import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { BrowserRouter, Router , Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setmode] = useState('light')   //whether dark mode enable or not
  const [alert, setalert] = useState(null)
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }


 const  togglemode =()=>{
  if(mode === 'light'){
    setmode('dark')
    document.body.style.backgroundColor = '#212529'
    showalert("Dark mode has been enabled","success")
    document.title = "Textutlies-Dark mode"
  }
  else{
    setmode('light')
    document.body.style.backgroundColor = 'white'
    showalert("Back to light","success")
    document.title = "Textutlies-light mode"
  }

  }
  return (
   
    <>
    <Navbar abouttext="About us" title="Texttutlies" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <Textform heading="Give your thoughts"  mode={mode} showalert={showalert}/> 
    <About mode={mode}/> */
    {/* <BrowserRouter>
    <Routes>
    
      <Route element={<Textform heading="Give your thoughts"  mode={mode} showalert={showalert}/>} path="/" /> 
      <Route element={<About  mode={mode}/>} path="/About"/>
    </Routes>
      
    </BrowserRouter> */}
    </>
  );
}


export default App;
