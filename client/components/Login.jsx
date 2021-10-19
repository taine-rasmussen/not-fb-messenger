import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap'

const Login = () => {

   const idRef = useRef()

   return(
      <Container className='align-items-center d-flex' style={{height: '100vh'}}>
         <Form className='w-100'>
            <Form.Group >
               <Form.Label>Enter your Id</Form.Label>
               <Form.Control type="text" ref={idRef} required></Form.Control>
            </Form.Group>
            <Button type="submit">Login</Button>
            <Button variant="secondary">Create new Id</Button>
         </Form>
      </Container>
   )
}

export default Login