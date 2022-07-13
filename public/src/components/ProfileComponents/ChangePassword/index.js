import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import background from "../../../images/background.png";
import { updatePasswordRoute } from "../../../utils/APIRoutes";
import "./styles.css";
function ChangePassword() {
  //handle onsubmit
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match", toastOptions);
    } else {
      const token = JSON.parse(localStorage.getItem("token"));

      axios({
        method: "put",
        url: updatePasswordRoute,
        data: {
          oldPassword: oldPassword,
          password,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (res.status === 200) {
            toast.success(res.data.message, toastOptions);
            setPassword("");
            setConfirmPassword("");
            setOldPassword("");
          } else {
            toast.error(res.data.message, toastOptions);
          }
        })
        .catch((err) => {
          toast.error(err.response.data.message, toastOptions);
        });

      //send request to server
      //if success, toast success message
      //if fail, toast error message
    }
    console.log("submit");
  };

  return (
    <div
      className="PassowrdFormContainer"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="formContainerP">
        <div className="innerForm">
          <h2 style={{ color: "white", marginBottom: "2rem" }}>
            Change Password
          </h2>
          <form>
            <TextField
              label="Old Password"
              variant="outlined"
              fullWidth={true}
              size="small"
              name="oldPassword"
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
              style={{ color: "white", marginBottom: "1rem" }}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              sx={{ input: { color: "orange" } }}
            />
            <TextField
              label="New Password"
              variant="outlined"
              fullWidth={true}
              size="small"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ color: "white", marginBottom: "1rem" }}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              sx={{ input: { color: "orange" } }}
            />
            <TextField
              label="Confirm Password"
              variant="outlined"
              fullWidth={true}
              size="small"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{ color: "white", marginBottom: "1rem" }}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              sx={{ input: { color: "orange" } }}
            />

            <div>
              <Button
                variant="outlined"
                style={{ color: "white", borderColor: "white", width: "100%" }}
                onClick={handleSubmit}
              >
                Update Password
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
