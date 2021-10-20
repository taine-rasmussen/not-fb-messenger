import React, { useContext } from 'react';
import useLocalStorage from '../LocalStorage'

const ConversationsContext = React.createContext()

export function useConversations (){
   return useContext(ConversationsContext)
}

export function ConversationsProvider ({ children }) {

   const [converstations, setConversations] = useLocalStorage('conversations', [])

   function createConversations (recipients) {
      setConversations(prevConversations => {
      return [...prevConversations, { recipients, messages: [] }]
    })
   }

   return(
      <ConversationsContext.Provider value={converstations, createConversations}>
      {children}
    </ConversationsContext.Provider>
   )
}