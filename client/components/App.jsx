import React, { useState } from 'react';
import useLocalStorage from '../LocalStorage'

// components
import Login from './Login'

const App = () => {

   const [id, setId] = useLocalStorage('id')

   return(
      <>
         {id}
         <Login setId={setId} id={id}/>
      </>
   )
}

export default App