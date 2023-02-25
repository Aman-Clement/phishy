import React from 'react'
import {Route,Routes} from 'react-router-dom';
import { Login } from './pages';



const App = ()=>{
  return(
    <div className='App'>
      <Routes>
      <Route path="/phishy/" element={<Login />} exact />
      </Routes>
    </div>
  )
}

export default App;