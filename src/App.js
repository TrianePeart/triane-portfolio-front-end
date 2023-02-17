//DEPENDENCIES 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//PAGES
import Edit from '../src/pages/Edit';
import FourOFour from '../src/pages/FourOFour';
import Home from '../src/pages/Home';
import NewPost from './pages/NewThing';
import Show from './pages/ShowThing';


//COMPONENTS
import Nav from './components/Nav';
import Login from './components/Login';
import Prompts from './components/Prompts';
import { useState } from 'react';


import '../src/css/App.css';

export default function App() {


  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Login/>}/>
          {/* FIGURE OUT IF SIGN UP NEEDS ITS OWN PAGE */}
          <Route path='/posts' element={<Home/>}/>
          <Route path='/posts/new' element={<NewPost/>}/>
          <Route exact path='/posts/:id' element={<Show/>}/>
          <Route path='/posts/:id/edit' element={<Edit/>}/>
          <Route path='/post/prompts' element={<Prompts/>}/>
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Router>
    </div>
  );
}
