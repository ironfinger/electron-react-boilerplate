import { Link, useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const Login = () => {
  const navigator = useNavigate(); // Create a way to programatically navigate.

  const HandleOnLick = () => {
    navigator('/home', { replace: true });
  };

  return (
    <div className="LoginWrapper">
      <Card className="LoginCard">
        <Card.Body>
          <Card.Title>Login or Signup</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" id="inputPassword5" />
            </Form.Group>
          </Form>
          <Button onClick={HandleOnLick}>Login or Signup</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
