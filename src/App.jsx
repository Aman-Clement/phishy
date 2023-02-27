import { Switch } from '@chakra-ui/react';
import React from 'react'
import {Route,Routes} from 'react-router-dom';
import { Login } from './pages';
import {Lmfao} from './pages';



const App = ()=>{
  return(
    <div className='App'>
      <Routes>
       
        <Route path="/phishy/" element={<Login />} exact />
        <Route path="/Lmfao" element={<Lmfao/>} />
      
      </Routes>
    </div>
  )
}

export default App;