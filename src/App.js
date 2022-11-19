// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes ,
//   Route
// } from "react-router-dom";

function App() {
  const [change, setChange] = useState('light');

  const toggleColor = () => {
    if(change === 'light') {
      setChange('dark');
    } else {
      setChange('light');

    }
  }
  return (
    <>
    {/* <Router> */}
<Navbar title="tarun" data={change} toggleColor={toggleColor}/>
<TextForm/>
<About/>
  {/* <Routes >
    <Route path="/about" element={<About/>} />
    <Route path="/" element={<TextForm/>} />

        </Routes>
    </Router> */}
    </>
  );
}

export default App;
