import { Link } from "react-router-dom";

const LinksSigning = () => {
  return (
    <div className="linksBody">
      <Link className="nav-link" to={`/signIn`}>
        Sign In
      </Link>
      <Link className="nav-link" to={`/signUp`}>
        Sign Up
      </Link>
    </div>
  );
};

export default LinksSigning;
