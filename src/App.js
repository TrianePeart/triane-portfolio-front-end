//DEPENDENCIES 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//PAGES
import Edit from '../pages/Edit';
import FourOFour from '../pages/Edit';
import Home from '../pages/Home';
import NewPost from '../pages/NewPost';
import Show from '../pages/Show';

//COMPONENTS
import Nav from './components/Nav';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useState } from 'react';


import './App.css';

function App() {
  const [showNav, setShowNav] = useState(true)

  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Login navFunction={setShowNav}/>}/>
          {/* FIGURE OUT IF SIGN UP NEEDS ITS OWN PAGE */}
          <Route path='/posts' element={<Home/>}/>
          <Route path='/posts/new' element={<NewPost/>}/>
          <Route exact path='/posts/:id' element={<Show/>}/>
          <Route path='/posts/:id/edit' element={<Edit/>}/>
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
