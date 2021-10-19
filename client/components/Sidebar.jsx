import React from 'react';
import { Tab, Nav } from 'react-bootstrap'


const Sidebar = ({id}) => {

   return(
      <div className="sidebar-container">
         <Tab.Container>
            <Nav>
               <Nav.Item>
                  <Nav.Link eventkey='Conversations'>Conversations</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link eventkey='Contacts'>Contacts</Nav.Link>
               </Nav.Item>
            </Nav>
         </Tab.Container>
      </div>
   )
}

export default Sidebar