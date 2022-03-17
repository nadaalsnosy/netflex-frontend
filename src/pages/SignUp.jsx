import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div>
      <Form className="signForm text-white bg-black-8">
        <h1 className=" mb-5 fw-bold ">Sign Up</h1>

        <Form.Group className="mb-4" controlId="formGridName">
          <Form.Control
            className="bg-gray h-50p border-0"
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formGridEmail">
          <Form.Control
            className="bg-gray h-50p border-0"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formGridPassword">
          <Form.Control
            className="bg-gray h-50p border-0"
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <div className="text-end my-5">
          <Link to={`/`}>
            <Button variant="danger w-100 h-50p" type="submit">
              Sign Up
            </Button>
          </Link>
        </div>
        <div>
          Already have an account?{" "}
          <Link className="text-primary text-decoration-none" to={`/signIn`}>
            Sign In.
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default SignUpPage;
