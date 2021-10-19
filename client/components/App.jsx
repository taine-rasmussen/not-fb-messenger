import React, { useState } from 'react';


// components
import Login from './Login'

const App = () => {

   const [id, setId] = useState()

   return(
      <>
         <Login setId={setId} id={id}/>
      </>
   )
}

export default App