import React, { useState } from 'react';
import useLocalStorage from '../LocalStorage'
import { ContactsProvider } from '../Context/ContactsProvider'

// components
import Login from './Login'
import Dashboard from './Dashboard'

const App = () => {

   const [id, setId] = useLocalStorage('id')

   const dashboard = (
      <ContactsProvider>
         <Dashboard id={id}/>
      </ContactsProvider>
   )

   return(
      <>
         {id ? dashboard : <Login setId={setId} id={id}/>} 
      </>
   )
}

export default App