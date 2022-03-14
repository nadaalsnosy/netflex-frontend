import { Form, Row, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { UsersContext } from "../modules/UsersModule";
import { useNavigate } from "react-router-dom";

const FormModel = (props) => {
  const [show, setShow] = useState(false);
  const { addUser } = useContext(UsersContext);

  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const handleClose = () => setShow(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser(user);
    setUser({});
    navigate("/users");
  };
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group className="col-3" controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group className="col-3" controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="col-3" controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleClose}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default FormModel;
