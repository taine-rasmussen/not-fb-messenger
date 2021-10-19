import React, { useState } from 'react';

// components
import Login from './Login'

const App = () => {

   const [id, setId] = useState(null)

   return(
      <>
         <Login setId={setId}/>
      </>
   )
}

export default App