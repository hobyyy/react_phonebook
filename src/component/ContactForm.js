import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNum, setPhoneNum] = useState(0);
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault();
    dispatch({type:"ADD_CONTACT", payload:{name, phoneNum}})
  }
  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter Name"  
            onChange={(event)=>setName(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Enter Phone Number" 
            onChange={(event)=>setPhoneNum(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
        Create
        </Button>
      </Form>
    </div>
  )
}

export default ContactForm