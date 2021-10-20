import React, { useState } from 'react';
import useLocalStorage from '../LocalStorage'
import { ContactsProvider } from '../Context/ContactsProvider'
import { ConversationsProvider } from '../Context/ConversationsProvider'
import { SocketProvider } from '../Context/SocketProvider'

// components
import Login from './Login'
import Dashboard from './Dashboard'

const App = () => {

   const [id, setId] = useLocalStorage('id')

   const dashboard = (
      <SocketProvider id={id}>
         <ContactsProvider>
            <ConversationsProvider id={id}>
               <Dashboard id={id}/>
            </ConversationsProvider>
         </ContactsProvider>
      </SocketProvider>
   )

   return(
      <>
         {id ? dashboard : <Login setId={setId} id={id}/>} 
      </>
   )
}

export default App 