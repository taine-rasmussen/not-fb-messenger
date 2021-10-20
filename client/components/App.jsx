import React, { useState } from 'react';
import useLocalStorage from '../LocalStorage'
import { ContactsProvider } from '../Context/ContactsProvider'
import { ConversationsProvider } from '../Context/ConversationsProvider'

// components
import Login from './Login'
import Dashboard from './Dashboard'

const App = () => {

   const [id, setId] = useLocalStorage('id')

   const dashboard = (
      <ContactsProvider>
         <ConversationsProvider id={id}>
            <Dashboard id={id}/>
         </ConversationsProvider>
      </ContactsProvider>
   )

   return(
      <>
         {id ? dashboard : <Login setId={setId} id={id}/>} 
      </>
   )
}

export default App 