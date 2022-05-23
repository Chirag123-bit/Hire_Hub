import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../images/logo.svg";
import { toast } from "react-toastify";
import axios from "axios";
import { loginRoute } from "../utils/APIRoutes";

export const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const currUser = JSON.parse(localStorage.getItem("user"));
      if (currUser.type === "Company") {
        navigate("/employer/dashboard");
        if (!localStorage.getItem("company")) {
          localStorage.clear();
        }
      } else {
        navigate("/applicant/home");
      }
    }
  });

  const handleValidation = () => {
    const { password, username } = values;
    if (password.length === "") {
      toast.error("Password cannot be empty.", toastOptions);
      return false;
    } else if (username.length === "") {
      toast.error("User name can not be empty.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { password, username } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      } else {
        if (data.user.type === "Company") {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("company", JSON.stringify(data.company));
          navigate("/employer/dashboard");
        }
        if (data.user.type === "Applicant") {
          localStorage.setItem("user", JSON.stringify(data.user));
          navigate("/applicant/home");
        }
      }
    }
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="Logo" />
            <h1>HireHub</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />

          <button type="submit">Login</button>
          <span>
            Don't Have an account? <Link to="/register">Register</Link>{" "}
          </span>
        </form>
      </FormContainer>
    </>
  );
};

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;

  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      color: white;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #997af0;
        outline: none;
      }
    }
    button {
      background-color: #997af0;
      color: white;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;

      &:hover {
        background-color: #4e0eff;
      }
    }
    span {
      color: white;
      a {
        text-decoration: none;
      }
    }
  }
`;
// export default Login;
