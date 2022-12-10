import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { currentUserAdded } from "../../features/signinSlice";
import { useNavigate, NavLink } from "react-router-dom";
import { FormField} from "../../styles";
import styled from "styled-components";

const Navlink = styled(NavLink)`
  color: blue;
`;

function Signup() {
  const dispatch = useDispatch();
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  // const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [signupForm, setSignupForm] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        // username: username,
        // email: email,
        // password: password,
        // passwordConfirmation: passwordConfirmation,
       
        username: signupForm.username,
        email: signupForm.email,
        password: signupForm.password,
        password_confirmation: signupForm.password_confirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          dispatch(currentUserAdded(user));
          navigate("/");
          // setUsername("")
          // setEmail("");
          // setPassword("")
          // setPasswordConfirmation("")

          setSignupForm({
            username: "",
            email: "",
            password: "",
            password_confirmation: "",
          });
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  function handleChange(e) {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
  }


  return (
    <>
      <div className="relative w-full h-screen bg-zinc-900/90">
        <img
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src="https://i.postimg.cc/GmnLb7y4/img.jpg"
          alt="/"
        />

        <div className="flex justify-center items-center h-full">
          <form
            onSubmit={handleSubmit}
            className="max-w-[400px] w-full mx-auto bg-white p-8"
          >
            <h2 className="text-4xl font-bold text-center py-4">SIGN UP</h2>
            <div className="flex flex-col mb-4">
              <label>Username</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="text"
                // id="username"
                // value={username}
                // onChange={(e) => setUsername(e.target.value)}
                autoComplete="off"
                name="username"
                value={signupForm.username}
                placeholder="Last name"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label>Email</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="email"
                // id="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                value={signupForm.email}
                placeholder="Enter email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col ">
              <label>Password</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="password"
                // value={password}
                // id="password"
                // onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                value={signupForm.password}
                placeholder="Enter password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col ">
              <label>Password Confirmation </label>
              <input
                className="border relative bg-gray-100 p-2"
                type="password"
                // id="password_confirmation"
                // value={passwordConfirmation}
                // onChange={(e) => setPasswordConfirmation(e.target.value)}
                autoComplete="current-password"
                value={signupForm.password_confirmation}
                placeholder="Confirm password"
                name="password_confirmation"
                onChange={handleChange}
              />
            </div>
            <button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white">
              Sign Up
            </button>
            <FormField>
              <p className="forgot-password text-right">
                Already registered <Navlink to="/signin">log in?</Navlink>
              </p>
              {/* <p className="forgot-password text-right">
                Already registered{" "}
                <Navlink className="text-blue-500" to="/signin">
                  log in?
                </Navlink>
              </p> */}
            </FormField>
          </form>
        </div>
      </div>
    </>
  );
  
}

export default Signup