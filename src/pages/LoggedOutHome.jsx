import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const LoggedOutHome = () => {
  return (
    <div className="linksBody centeringBody">
     
      <Link to={`/signUp`}>
        <Button variant="danger h-50p mx-3" type="submit">
          Sign Up
        </Button>
      </Link>
      <Link to={`/signIn`}>
        <Button variant="danger h-50p mx-3" type="submit">
          Sign In
        </Button>
      </Link>
  
    </div>
  );
};

export default LoggedOutHome;
