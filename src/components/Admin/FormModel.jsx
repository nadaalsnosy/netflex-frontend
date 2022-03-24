import { Modal, Button, Form, Row } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";

const defaultMovie = {
  _id: "",
  title: "",
  desc: "",
  img: "",
  trailer: "",
  video: "",
  year: "",
  rate: "",
  limit: "",
  genere: "",
  isSeries: "",
};

const FormModel = (props) => {
  const { onSubmit, showForm, setShowForm, movie } = props;
  // const useref = useRef();
  // const titleRef = useRef();
  // const descRef = useRef();

  const [isEnabled, setIsEnabled] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(movie || defaultMovie);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);

    if (name === "title") {
      setIsEnabled(true);
    }
    setCurrentMovie((m) => ({ ...m, [name]: value }));
  };
  // console.log(isEnabled);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(currentMovie);
  };

  useEffect(() => {
    setCurrentMovie(movie || defaultMovie);
  }, [showForm, movie]);

  const handleClose = () => setShowForm(false);
  return (
    <>
      <Form>
        <Modal show={showForm} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="m-auto text-orange">
              Movie Information
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-5">
            <Form.Group className="mb-3" controlId="formGridTitle">
              <Form.Label className="ms-2">Title</Form.Label>
              <Form.Control
                className="bg-light"
                placeholder="video title"
                name="title"
                value={currentMovie.title}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridDesc">
              <Form.Label className="ms-2">Description</Form.Label>
              <Form.Control
                className="bg-light"
                placeholder="video description"
                name="desc"
                value={currentMovie.description}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridImage">
              <Form.Label className="ms-2">Image</Form.Label>
              <Form.Control
                className="bg-light"
                placeholder="video image"
                name="img"
                value={currentMovie.img}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridTrailer">
              <Form.Label className="ms-2">Trailer</Form.Label>
              <Form.Control
                className="bg-light"
                placeholder="video trailer"
                name="trailer"
                value={currentMovie.trailer}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridVideo">
              <Form.Label className="ms-2">Video</Form.Label>
              <Form.Control
                className="bg-light"
                placeholder="video URL"
                name="video"
                value={currentMovie.video}
                onChange={handleChange}
              />
            </Form.Group>

            <Row className="mb-3 justify-content-between">
              <Form.Group className="col-5" controlId="formGridGenere">
                <Form.Label className="ms-2">Genere</Form.Label>
                <Form.Control
                  className="bg-light"
                  placeholder="video title"
                  name="genere"
                  value={currentMovie.genre}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="col-5" controlId="formGridYear">
                <Form.Label className="ms-2">Year</Form.Label>
                <Form.Control
                  className="bg-light"
                  placeholder="video year"
                  name="year"
                  value={currentMovie.year}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3 justify-content-between">
              <Form.Group className="col-5" controlId="formGridRate">
                <Form.Label className="ms-2">Rate</Form.Label>
                <Form.Control
                  className="bg-light"
                  placeholder="video rate"
                  name="rate"
                  value={currentMovie.rate}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="col-5" controlId="formGridLimit">
                <Form.Label className="ms-2">Limit</Form.Label>
                <Form.Control
                  className="bg-light"
                  placeholder="video limit"
                  name="limit"
                  value={currentMovie.limit}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
          </Modal.Body>
          <Modal.Footer className="p-3 px-4">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <input
              className="btn btn-danger px-5"
              type="button"
              name="save"
              value="Save"
              onClick={handleSubmit}
              disabled={!isEnabled}
            />
            {/* <Button variant="danger px-5" {movie.title === "" ? disable} onClick={handleSubmit}>
              Save
            </Button> */}
          </Modal.Footer>
        </Modal>
      </Form>
    </>
  );
};

export default FormModel;
