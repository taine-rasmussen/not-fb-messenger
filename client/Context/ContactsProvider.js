import React, { useContext } from 'react';
import { useLocalStorage } from '../LocalStorage'

const ContactsContext = React.createContext()

export function useContacts (){
   return useContext(ContactsContext)
}



export function ContactsProvider ({ children}) {

   const [contacts, setContacts] = useLocalStorage('contacts', [])

   const createContact = (id, name) => {
      setContacts(prevContacts => {
         return [...prevContacts, {id, name}]
      })
   }

   return(
     <ContactsContext.Provider value={{ contacts, creatContact }}>
        {children}
     </ContactsContext.Provider >
   )
}