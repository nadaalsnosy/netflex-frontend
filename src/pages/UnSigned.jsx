import { Link } from "react-router-dom";

const UnSigned = () => {
  return (
    <>
      <Link className="nav-link" to={`/signIn`}>
        Sign In
      </Link>
      <Link className="nav-link" to={`/signUp`}>
        Sign Up
      </Link>
    </>
  );
};

export default UnSigned;
