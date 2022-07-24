import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import Navbar from "../components/OnboardingPageComponents/Navbar";
import { ChatState } from "../context/ChatProvider";
import background from "../images/backup.jpg";
import {
  emailVerify,
  reSendVerification,
  sendVerification,
} from "../utils/APIRoutes";

export default function CodeSent() {
  const { user, setUser } = ChatState();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  function callToast(msg, status) {
    console.log(status);
    if (status === false) {
      toast.error(msg, toastOptions);
    } else if (status === true) {
      toast.warning(msg, toastOptions);
    } else {
      const userLocal = JSON.parse(localStorage.getItem("user"));
      userLocal.isVerified = true;
      localStorage.setItem("user", JSON.stringify(user));
      setUser(userLocal);
      toast.success(msg, toastOptions);
      navigate("/verified");
    }
  }
  const reSendVerificationCode = () => {
    axios
      .post(reSendVerification, {
        id: JSON.parse(localStorage.getItem("user"))._id,
        email: JSON.parse(localStorage.getItem("user")).email,
      })
      .then((data) => {
        callToast(data.data.msg, data.data.status);
      });
  };
  useEffect(() => {
    async function sUser() {
      if (!localStorage.getItem("user")) {
        navigate("/login");
        toast.error("User got", toastOptions);
      } else {
        setCurrentUser(await JSON.parse(localStorage.getItem("user")));

        axios
          .post(sendVerification, {
            id: JSON.parse(localStorage.getItem("user"))._id,
            email: JSON.parse(localStorage.getItem("user")).email,
          })
          .then((data) => {
            callToast(data.data.msg, data.data.status);
          });
      }
    }
    sUser();
  }, []);

  const [values, setValues] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
    code5: "",
    code6: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const code =
      values.code1 +
      values.code2 +
      values.code3 +
      values.code4 +
      values.code5 +
      values.code6;

    const { data } = await axios.post(
      `${emailVerify}/${currentUser._id}/${code + currentUser._id}`
    );
    callToast(data.msg, data.status);

    console.log(data);
  }
  useEffect(() => {
    const codes = document.querySelectorAll(".code");

    // codes[0].focus();

    // codes.forEach((code, idx) => {
    //   code.addEventListener("keydown", (e) => {
    //     if (e.key >= 0 && e.key <= 9) {
    //       codes[idx].value = "";
    //       setTimeout(() => codes[idx + 1].focus(), 10);
    //     } else if (e.key === "Backspace") {
    //       setTimeout(() => codes[idx - 1].focus(), 10);
    //     }
    //   });
    // });
  });

  return (
    <>
      <Navbar />
      <CodeContainer
        style={{
          background: `url(${background})`,
        }}
      >
        <div className="container">
          <h2>Verify Your Account</h2>
          <p>
            We emailed you the six digit code to your email address{" "}
            <b style={{ color: "#045de9" }}>{currentUser.email}</b> <br />
            Enter the code below to confirm your email address.
          </p>
          <form
            className="code-container flex-column"
            onSubmit={(event) => handleSubmit(event)}
          >
            <div className="d-flex mb-2">
              <input
                type="number"
                className="code"
                placeholder="0"
                min="0"
                max="9"
                required
                name="code1"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="number"
                className="code"
                placeholder="0"
                min="0"
                max="9"
                required
                name="code2"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="number"
                className="code"
                placeholder="0"
                min="0"
                max="9"
                required
                name="code3"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="number"
                className="code"
                placeholder="0"
                min="0"
                max="9"
                required
                name="code4"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="number"
                className="code"
                placeholder="0"
                min="0"
                max="9"
                name="code5"
                required
                onChange={(e) => handleChange(e)}
              />
              <input
                type="number"
                className="code"
                placeholder="0"
                min="0"
                max="9"
                name="code6"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <small className="info mb-2">
              Didn't recieve the code? Click{" "}
              <a href="#" onClick={reSendVerificationCode}>
                here
              </a>{" "}
              to resend
            </small>
            <button type="submit" className="sbmtBtn btn btn-primary d-block">
              Submit
            </button>
          </form>
          <small className="info mt-1">
            Please Check your email for the code. Your account will be
            <b style={{ color: "red" }}> terminated</b> if the account is not
            verified within <b style={{ color: "#045de9" }}>6 hours</b>!
          </small>
        </div>
      </CodeContainer>
    </>
  );
}

const CodeContainer = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  /* background-image: url(${background}); */
  font-family: "Muli", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;

  .container {
    /* background-color: #fff; */
    backdrop-filter: blur(20px);
    border-radius: 10px;
    padding: 30px;
    max-width: 1100px;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    color: #fff;
    border: 1px solid white;
  }

  .code-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .sbmtBtn {
    display: block;
    margin: auto;
  }

  .code {
    border-radius: 5px;
    font-size: 75px;
    height: 120px;
    width: 100px;
    border: 1px solid #eee;
    outline-width: thin;
    outline-color: #eee;
    background: transparent;
    backdrop-filter: blur(20px);
    color: #fff;
    margin: 1%;
    text-align: center;
    font-weight: 300;
    -moz-appearance: textfield;
    margin-left: 10px;
  }

  .code::-webkit-outer-spin-button,
  .code::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .code:valid {
    border-color: #045de9;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }

  .info {
    background-color: transparent;
    display: inline-block;
    padding: 10px;
    line-height: 20px;
    max-width: 400px;
    color: gray;
    border-radius: 5px;
  }

  @media (max-width: 600px) {
    .code-container {
      flex-wrap: wrap;
    }

    .code {
      font-size: 60px;
      height: 80px;
      max-width: 70px;
    }
  }
`;
