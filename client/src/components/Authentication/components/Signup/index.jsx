import React, { useRef, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useAuth } from "../../AuthContext";
export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4"> Sign Up</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>email</Form.Label>
              <Form.Control
                type="email"
                inputRef={emailRef}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
                inputRef={passwordRef}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group id="password-confirmation">
              <Form.Label>password confirmation</Form.Label>
              <Form.Control
                type="password"
                inputRef={passwordConfirmRef}
                required
              ></Form.Control>
            </Form.Group>
            <Button type="submit" className="w-100">
              Sign In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">Already have an account?</div>
    </>
  );
}
