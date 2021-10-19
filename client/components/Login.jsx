import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'

const Login = ({setId, id}) => {

   const idRef = useRef()

   // Handle form submit & update ref with input value
   const handleSubmit = (e) => {
      e.preventDefault()
      setId(idRef.current.value)
   }

   // Creates random Id and updates setId
   const createNewId = () => {
      setId(uuidV4())
      console.log(id)
   }

   return(
      <Container className='align-items-center d-flex' style={{height: '100vh'}}>
         <Form className='w-100' onSubmit={handleSubmit}>
            <Form.Group >
               <Form.Label>Enter your Id</Form.Label>
               <Form.Control type="text" ref={idRef} required></Form.Control>
            </Form.Group>
            <Button type="submit">Login</Button>
            <Button variant="secondary" onClick={createNewId}>Create new Id</Button>
         </Form>
      </Container>
   )
}

export default Login