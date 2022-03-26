import { Form, Button } from "react-bootstrap";
import AvatarImage from "../images/avatar.png";
import {Link} from "react-router-dom";
// import useAuth from "../hooks/useAuth";

const Profile = () => {
  // const { auth } = useAuth();
  return (
    <>
      <div className="">
        <div className="overlay">
          <div className="pb-1 pt-1">
            <Form className="signForm text-white bg-black-8">
              <h1 className=" mb-5 fw-bold ">Profile</h1>

              <Form.Group className="mb-4" controlId="formGridEmail">
                <div>
                  <img
                    className="avatarPhoto"
                    src={AvatarImage}
          
                    alt="avatar"
                  />
                </div>
                 <div>User name : auth.user.name</div>
                <div>Email : auth.user.email</div>
                <div>Password : ********</div>
                {/* <div>User name : {auth.user.name}</div>
                <div>Email : {auth.user.email}</div>
                <div>Password : ********</div> */}
              </Form.Group>

              <Form.Group
                className="mb-4"
                controlId="formGridPassword"
              ></Form.Group>

              <div className="text-end  ">
               
                <Link
                    className="text-primary text-decoration-none"
                    to={`/EditProfile`}
                  >
                   <Button variant="danger w-100 h-50p mb-3" type="submit"> Edit </Button>
                  </Link> 
                
                
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
