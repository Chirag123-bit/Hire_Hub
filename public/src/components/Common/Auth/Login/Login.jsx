import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import Cookies from "universal-cookie";
import { useAuth } from "../../../../auth/auth";
import { ChatState } from "../../../../context/ChatProvider";
import background from "../../../../images/background.png";
import { loginRoute } from "../../../../utils/APIRoutes";

export const Login = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const { user, setUser } = ChatState();

  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [loggedUser, setLoggedUser] = useState("");
  const auth = useAuth();

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

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
      axios
        .post(loginRoute, {
          username,
          password,
        })
        .then((res) => {
          if (res.data.status === 500) {
            toast.error(res.data.msg, toastOptions);
          } else {
            if (res.data.user.type === "Company") {
              localStorage.setItem("user", JSON.stringify(res.data.user));
              setLoggedUser(res.data.user);
              setUser(res.data.user);
              localStorage.setItem("company", JSON.stringify(res.data.company));
              toast.success(
                "Welcome to HireHub, " + res.data.user.firstName,
                toastOptions
              );
              localStorage.setItem("token", JSON.stringify(res.data.token));
              localStorage.setItem("type", "Company");

              navigate("/employer/dashboard", { replace: true });
            }
            if (res.data.user.type === "Applicant") {
              localStorage.setItem("user", JSON.stringify(res.data.user));
              toast.success(
                "Welcome to HireHub, " + res.data.user.firstName,
                toastOptions
              );
              localStorage.setItem("token", JSON.stringify(res.data.token));
              localStorage.setItem("type", "Applicant");

              navigate("/applicant/home", { replace: true });
            }
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Invalid Username or password", toastOptions);
        });
    }
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  return (
    <>
      {/* style={{ backgroundImage: `url(${background})` }} */}
      {/* background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0,
      0.2)), url(${background})`, */}
      <FormContainer
        style={{
          background: `url(${background})`,
        }}
      >
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
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
            Don't Have an account?{" "}
            <Link to="/auth/register" style={{ color: "orange" }}>
              Register
            </Link>{" "}
          </span>
        </form>
      </FormContainer>
    </>
  );
};

const FormContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;

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
    border-radius: 2rem;
    padding: 3rem 5rem;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    /* background-position: center; */

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
      &::placeholder {
        color: white;
      }
    }
    button {
      background-color: #460ce3;

      color: white;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;

      &:hover {
        background-color: #d38c07;
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
