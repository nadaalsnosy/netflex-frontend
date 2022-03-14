import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <div className="login-container">
      <div className="overlay  d-flex justify-content-center align-items-center">
        <div className="container w-100">
          <Form className="signForm text-white bg-black-8">
            <h1 className=" mb-5 fw-bold ">Sign In</h1>

            <Form.Group className="mb-4" controlId="formGridEmail">
              <Form.Control className="bg-gray h-50p border-0" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formGridPassword">
              <Form.Control className="bg-gray h-50p border-0" type="password" placeholder="Password" />
            </Form.Group>

            <div className="text-end my-5">
              <Link to={`/`}>
                <Button variant="danger w-100 h-50p" type="submit">
                  Sign In
                </Button>
              </Link>
            </div>
            <div>
              New to Netflix?{" "}
              <Link
                className="text-primary text-decoration-none"
                to={`/signUp`}
              >
                Sign Up Now.
              </Link>
             
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
