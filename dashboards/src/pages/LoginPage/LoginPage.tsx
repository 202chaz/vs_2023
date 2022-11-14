
import React, { useEffect, useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './login.scss';

export default function LoginPage() {
  return (
    <div className="row justify-content-center login-form">
      <Card style={{ width: '35rem' }}>
      <Card.Img variant="top" src="./deer-logo.png" className='logo' />
        <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>
        </Card.Body>
      </Card>
    </div>
    
  )
}