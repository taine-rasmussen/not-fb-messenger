import React, { useState } from 'react';
import useLocalStorage from '../LocalStorage'

// components
import Login from './Login'
import Dashboard from './Dashboard'

const App = () => {

   const [id, setId] = useLocalStorage('id')

   return(
      <>
         {id ? <Dashboard id={id}/> : <Login setId={setId} id={id}/>} 
      </>
   )
}

export default App