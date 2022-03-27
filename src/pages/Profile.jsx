import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import AvatarImage from "../images/avatar.png";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";

const Profile = () => {
	const { auth } = useAuth();
	const [user, setUser] = useState(auth.user);

	useEffect(() => {
		async function fetchData() {
			const res = await axios.get(
				`/users/${auth.user._id}`,

				{
					headers: {
						Authorization: `${auth.token}`,
					},
				}
			);
			console.log(res.data);
			setUser(res.data);
		}
		fetchData();
	}, []);

	return (
		<>
			<div className="overlay">
				<div className="pb-1 pt-1">
					<Form className="signForm p-3 pt-5 my-5 text-white bg-black-8">
						<h1 className=" mb-5 fw-bold ">Profile</h1>

						<Form.Group className="mb-4" controlId="formGridEmail">
							{/* <div className="containerProfile d-flex justify-content-around">
              <div>
                <img className="avatarPhoto" src={AvatarImage} alt="avatar" />
              </div>
              <div className="profileData m-2 ">
              <div className="pb-1">User name : Eman Youssef </div>
              <div className="pb-1">Email : emanyou123@lala.com</div>
              <div className="pb-1">Password : ******** </div>
              </div>
              </div> */}

							<div className="containerProfile d-flex justify-content-around">
								<div>
									<img className="avatarPhoto" src={AvatarImage} alt="avatar" />
								</div>
								<div className="profileData m-2 ">
									<div className="pb-1">User name : {user.username} </div>
									<div className="pb-1">Email :{user.email}</div>
									<div className="pb-1">Password : ******** </div>
								</div>
							</div>
						</Form.Group>

						<div className="text-end  ">
							<Link
								className="text-primary text-decoration-none"
								to={`/editProfile`}
							>
								<Button variant="danger w-100 h-50p mb-3" type="submit">
									Edit
								</Button>
							</Link>
						</div>
					</Form>
				</div>
			</div>
		</>
	);
};

export default Profile;
