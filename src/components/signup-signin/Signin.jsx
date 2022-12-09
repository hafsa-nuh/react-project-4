import { useState } from "react";
import { useDispatch } from "react-redux";
import { currentUserAdded } from "../../features/signinSlice";
import { useNavigate, NavLink } from "react-router-dom";
import { Button, Error, Input, FormField, Label } from "../../styles";
import styled from "styled-components";

const Form = styled.form`
margin: 7rem;
`
const Head = styled.h1`
  align-item: center;
  font-size: 2rem;
  text-transform: uppercase;
`;
const Navlink = styled(NavLink)`
color:blue;
`

function Signin() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  function handleSignin(e) {
    e.preventDefault();
    fetch("/signin", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          dispatch(currentUserAdded(user));
          setUsername("");
          setPassword("");
          navigate("/");
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <Form onSubmit={handleSignin}>
        <FormField>
          <Head>Signin</Head>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormField>
        <FormField>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormField>
        <FormField>
          <Button variant="fill" color="primary" type="submit">
            Signin
          </Button>
          <p className="forgot-password text-right">
            Don't have an account?{" "}
            <Navlink to="/signup">create an account</Navlink>
          </p>
        </FormField>
        <FormField>
          {errors.map((err) => (
            <Error key={err}>{err}</Error>
          ))}
        </FormField>
      </Form>
    </>
  );
}

export default Signin;
