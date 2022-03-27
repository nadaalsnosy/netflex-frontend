import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import useAuth from "../hooks/useAuth";

import axios from "../api/axios";

import NetflixLogo from "../components/LoggedOut/NetflixLogo";

const userREGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,20}$/;
const emailREGEX = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
const passwordREGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;

const EditProfile = () => {
	const userRef = useRef();
	const errRef = useRef();
	const navigate = useNavigate();
	const { auth } = useAuth();

	console.log(auth);

	const [userName, setUserName] = useState(auth.user.username);
	const [validName, setValidName] = useState(false);
	const [nameFocus, setNameFocus] = useState(false);

	const [userEmail, setUserEmail] = useState(auth.user.email);
	const [validEmail, setValidEmail] = useState(false);
	const [emailFocus, setEmailFocus] = useState(false);

	const [userPassword, setUserPassword] = useState(auth.user.password);
	const [validPassword, setValidPassword] = useState(false);
	const [passwordFocus, setPasswordFocus] = useState(false);

	const [userConfirmPassword, setUserConfirmPassword] = useState(
		auth.user.password
	);
	const [validConfirmPassword, setValidConfirmPassword] = useState(false);
	const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

	const [errMsg, setErrMsg] = useState("");

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		const isValid = userREGEX.test(userName);
		setValidName(isValid);
	}, [userName]);

	useEffect(() => {
		const isValid = emailREGEX.test(userEmail);
		setValidEmail(isValid);
	}, [userEmail]);

	useEffect(() => {
		const isValid = passwordREGEX.test(userPassword);
		setValidPassword(isValid);
		const match = userPassword === userConfirmPassword;
		setValidConfirmPassword(match);
	}, [userPassword, userConfirmPassword]);

	useEffect(() => {
		setErrMsg("");
	}, [userName, userEmail, userPassword, userConfirmPassword]);

	const handelSubmit = async (e) => {
		e.preventDefault();
		const validName = userREGEX.test(userName);
		const validEmail = emailREGEX.test(userEmail);
		const validPassword = passwordREGEX.test(userPassword);
		if (!validName || !validEmail || !validPassword) {
			setErrMsg("Invalid data");
			return;
		}
		try {
			const res = await axios.patch(
				`/users/${auth.user._id}`,
				JSON.stringify({
					username: userName,
					email: userEmail,
					password: userPassword,
				}),
				{
					headers: {
						"content-type": "application/json",
						Authorization: `${auth.token}`,
					},
				}
			);
			console.log(res);

			navigate("/profile");
		} catch (err) {
			if (!err?.response) {
				console.log("No Server Response");
			} else if (err.response?.status === 400) {
				setErrMsg("Email is already exist");
			} else {
				console.log("Regiseration Faild");
			}
			console.log(err);
		}
	};

	return (
		<>
			<div className="">
				<div className="overlay">
					<NetflixLogo />
					<div className="pb-4">
						<div style={{ maxWidth: "450px", margin: "80px auto" }}>
							<Form
								className="signForm text-white bg-black-8 "
								onSubmit={handelSubmit}
							>
								<h1 className=" mb-5 fw-bold ">Edit Profile</h1>
								<Form.Group className="mb-4" controlId="formPlaintextImage">
									<Form.Control
										className={`bg-gray h-50p border-0 ${
											nameFocus && !validName ? "errInput" : ""
										} `}
										type="text"
										placeholder="Image URL"
										value={auth.user.img}
										onChange={(e) => setUserName(e.target.value)}
										aria-describedby="imageUrl"
									/>
									<p
										id="userName"
										className={`errMsg ${
											nameFocus && !validName ? "shown" : "hidden"
										}`}
									>
										please enter valid Url!
									</p>
								</Form.Group>
								<Form.Group className="mb-4" controlId="formPlaintextUserName">
									<Form.Control
										className={`bg-gray h-50p border-0 ${
											nameFocus && !validName ? "errInput" : ""
										} `}
										type="text"
										placeholder="Enter name"
										ref={userRef}
										value={userName}
										onChange={(e) => setUserName(e.target.value)}
										required
										aria-describedby="userName"
										onFocus={() => setNameFocus(true)}
									/>
									<p
										id="userName"
										className={`errMsg ${
											nameFocus && !validName ? "shown" : "hidden"
										}`}
									>
										please enter valid name!
									</p>
								</Form.Group>

								<Form.Group className="mb-4" controlId="formGridEmail">
									<Form.Control
										className={`bg-gray h-50p border-0 ${
											(emailFocus && !validEmail) || errMsg ? "errInput" : ""
										}`}
										type="email"
										placeholder="Enter Email"
										ref={userRef}
										value={userEmail}
										onChange={(e) => setUserEmail(e.target.value)}
										required
										aria-invalid={validEmail ? false : true}
										aria-describedby="userEmail"
										onFocus={() => setEmailFocus(true)}
									/>
									<p
										id="userEmail"
										className={`errMsg ${
											emailFocus && !validEmail ? "shown" : "hidden"
										} ${errMsg ? "none" : "block"}`}
									>
										please enter valid email!
									</p>
									<p
										ref={errRef}
										className={`errMsg ${errMsg ? "shown" : "hidden"} ${
											emailFocus && !validEmail ? "none" : "block"
										}`}
										aria-live="assertive"
									>
										{errMsg}
									</p>
								</Form.Group>

								<Form.Group className="mb-4" controlId="formGridPassword">
									<Form.Control
										className={`bg-gray h-50p border-0 ${
											passwordFocus && !validPassword ? "errInput" : ""
										}`}
										type="password"
										placeholder="Enter Password"
										ref={userRef}
										value={userPassword}
										onChange={(e) => setUserPassword(e.target.value)}
										required
										aria-describedby="userPassword"
										onFocus={() => setPasswordFocus(true)}
									/>
									<p
										id="userPassword"
										className={`errMsg ${
											passwordFocus && !validPassword ? "shown" : "hidden"
										}`}
									>
										please enter valid password!
									</p>
								</Form.Group>

								<Form.Group
									className="mb-4"
									controlId="formGridConfirmPassword"
								>
									<Form.Control
										className={`bg-gray h-50p border-0 ${
											confirmPasswordFocus && !validConfirmPassword
												? "errInput"
												: ""
										}`}
										type="password"
										placeholder="Enter ConfirmPassword"
										ref={userRef}
										value={userConfirmPassword}
										onChange={(e) => setUserConfirmPassword(e.target.value)}
										required
										aria-describedby="userConfirmPassword"
										onFocus={() => setConfirmPasswordFocus(true)}
									/>
									<p
										id="userConfirmPassword"
										className={`errMsg ${
											confirmPasswordFocus && !validConfirmPassword
												? "shown"
												: "hidden"
										}`}
									>
										Must match your password input!
									</p>
								</Form.Group>

								<div className="text-end mt-5">
									{/* <Link
										className="text-primary text-decoration-none"
										to={`/profile`}
									> */}
									<Button
										variant="danger w-100 h-50p fs-5"
										type="submit"
										disabled={
											!validName ||
											!validEmail ||
											!validPassword ||
											!validConfirmPassword
												? true
												: false
										}
									>
										Save
									</Button>
									{/* </Link> */}
								</div>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default EditProfile;
