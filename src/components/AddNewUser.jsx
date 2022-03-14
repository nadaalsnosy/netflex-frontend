import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Form, Row } from "react-bootstrap";

const AddNewUser = (props) => {
  const { addUser } = props;
  const [user, setUser] = useState({});
  const inputEl = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((currentUser) => ({ ...currentUser, [name]: value }));
  };

  const handleSubmitAndClose = (eve) => {
    handleSubmit(eve);
    handleClose();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser(user);
    setUser({});
    navigate("/users");
  };

  // useEffect(() => {
  // 	console.log('USE EFFECT IS ENABLED');
  // 	if(!isEnabled) setUser({ name: "", age: "" });
  // }, [isEnabled]);

  useEffect(() => {
    inputEl.current?.focus();
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="dark-blue">
      <div className=" p-3 px-5 container d-flex justify-content-between">
        <h3 className="text-white">Users</h3>

        <Button variant="primary bg-white text-primary fw-bold px-5" onClick={handleShow}>
          Add User
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="m-auto">User Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="eg: John Doe" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Email Address</Form.Label>
              <Form.Control placeholder="eg: johndoe@gmail.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress3">
              <Form.Label>Phone</Form.Label>
              <Form.Control placeholder="eg: 0112345678" />
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
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSubmitAndClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>

      {/* <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog mw-600">
          <div className="modal-content p-3">
            <div className="modal-header border-0">
              <h5
                className="modal-title m-auto text-orange"
                id="exampleModalLabel"
              >
                User Information
              </h5>
              <button
                type="button"
                className="btn-close m-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <hr
              style={{ width: "70%", margin: "auto", marginBottom: "20px" }}
            />
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3 d-flex">
                  <label for="user-name" className="col-form-label me-3 col-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="eg: John Doe"
                    id="user-name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    ref={inputEl}
                  />
                </div>
                <div className="mb-3 d-flex">
                  <label for="user-email" className="col-form-label me-3 col-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="eg: johndoe@gmail.com"
                    id="user-email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    ref={inputEl}
                  />
                </div>
                <div className="mb-3 d-flex">
                  <label for="user-phone" className="col-form-label me-3 col-2">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="eg: 0112345678"
                    id="user-phone"
                    name="phone"
                    // value={user.phone}
                    onChange={handleChange}
                    ref={inputEl}
                  />
                </div>
                <div className="mb-3 text-start">
                  <label
                    for="user-address"
                    className="col-form-label ms-4 me-3 col-2"
                  >
                    Address
                  </label>
                  <div className=" d-flex justify-content-between px-4">
                    <input
                      type="text"
                      className="form-control w-30"
                      placeholder="City"
                      id="user-address"
                      name="City"
                      //   value={user.address.city}
                      onChange={handleChange}
                      ref={inputEl}
                    />
                    <input
                      type="text"
                      className="form-control w-30"
                      placeholder="Street"
                      name="street"
                      //   value={user.address.street}
                      onChange={handleChange}
                      ref={inputEl}
                    />
                    <input
                      type="text"
                      className="form-control w-30"
                      placeholder="Suite"
                      name="suite"
                      //   value={user.address.suite}
                      onChange={handleChange}
                      ref={inputEl}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer m-auto border-0">
              <input
                type="submit"
                data-bs-dismiss="modal"
                className="btn btn-primary px-5"
                value="Save"
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AddNewUser;
