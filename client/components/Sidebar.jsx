import React, { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap'

//components
import Conversations from './Conversations'
import Contacts from './Contacts'

const Sidebar = ({id}) => {

   const conversationsKey = 'Conversations'
   const contactsKey = 'Contacts'

   const [activeKey, setActiveKey] = useState(conversationsKey)

   return(
      <div className="sidebar-container">
         <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
            <Nav variant="tabs" className="justify-content-center">
               <Nav.Item>
                  <Nav.Link eventkey={conversationsKey}>Conversations</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link eventkey={contactsKey}>Contacts</Nav.Link>
               </Nav.Item>
            </Nav>
         </Tab.Container>
      </div>
   )
}

export default Sidebar