import React, { useState } from "react";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoadingButton from "@mui/lab/LoadingButton";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../../hook/useAuth";
import useTools from "../../../hook/useTools";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isAgree, setIsAgree] = useState(false);
  const { createNewUser } = useAuth();
  const { isClick, setIsClick, buttonRefresh } = useTools();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    setIsClick(true);
    const userName = data.userName;
    const email = data.email;
    const password = data.password;
    createNewUser(userName, email, password, navigate);
    buttonRefresh();
  };
  return (
    <>
      <Header />
      <main>
        <div className="container-fluid py-4">
          <div className="row justify-content-center">
            <div className="col-sm-8 col-md-6 col-lg-4">
              <div className="card border-0 shadow p-3">
                <p className="display-6 opacity-50 text-center mb-4">
                  Register
                </p>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="row g-4 justify-content-center"
                >
                  <div className="col-sm-10">
                    <label htmlFor="userName" className="form-label text-muted">
                      User Name:
                    </label>
                    <input
                      type="text"
                      id="userName"
                      name="userName"
                      placeholder="user name"
                      className="form-control"
                      {...register("userName", {
                        required: "this field is required",
                        minLength: {
                          value: 4,
                          message: "min length 4 characters",
                        },
                      })}
                    />
                    {errors.userName && (
                      <span
                        style={{ color: "red", fontSize: "12px" }}
                        role="alert"
                      >
                        {errors.userName.message}
                      </span>
                    )}
                  </div>
                  <div className="col-sm-10">
                    <label htmlFor="email" className="form-label text-muted">
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="email"
                      className="form-control"
                      {...register("email", {
                        required: "this field is required",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "does't match email format",
                        },
                      })}
                    />
                    {errors.email && (
                      <span
                        style={{ color: "red", fontSize: "12px" }}
                        role="alert"
                      >
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="col-sm-10">
                    <label htmlFor="password" className="form-label text-muted">
                      Password:
                    </label>
                    <div className="input-group">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="password"
                        className="form-control"
                        {...register("password", {
                          required: "this field is required",
                          minLength: {
                            value: 8,
                            message: "min length is 8 character",
                          },
                        })}
                      />
                      <button
                        className="btn border text-muted"
                        type="button"
                        id="password"
                        onClick={() =>
                          setShowPassword((prevState) => !prevState)
                        }
                      >
                        {!showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <span
                        style={{ color: "red", fontSize: "12px" }}
                        role="alert"
                      >
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                  <div className="col-sm-10">
                    <label
                      htmlFor="confirm_password"
                      className="form-label text-muted"
                    >
                      Confirm password:
                    </label>
                    <div className="input-group">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirm_password"
                        name="confirm_password"
                        placeholder="confirm password"
                        className="form-control"
                        {...register("confirm_password", {
                          required: "this field is required",
                          validate: (value) =>
                            value === getValues("password") ||
                            "password doesn't match",
                        })}
                      />
                      <button
                        className="btn border text-muted"
                        type="button"
                        id="confirm_password"
                        onClick={() =>
                          setShowConfirmPassword((prevState) => !prevState)
                        }
                      >
                        {!showConfirmPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </button>
                    </div>
                    {errors.confirm_password && (
                      <span
                        style={{ color: "red", fontSize: "12px" }}
                        role="alert"
                      >
                        {errors.confirm_password.message}
                      </span>
                    )}
                  </div>
                  <div className="col-sm-10 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="agree"
                      onChange={() => setIsAgree((value) => !value)}
                    />
                    <label className="form-check-label" htmlFor="agree">
                      I agree with the terms and conditions
                    </label>
                  </div>
                  <div className="text-center">
                    {isClick ? (
                      <LoadingButton loading variant="contained">
                        Submit
                      </LoadingButton>
                    ) : isAgree ? (
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        endIcon={<PersonAddAltIcon />}
                      >
                        Create
                      </Button>
                    ) : (
                      <Button type="submit" variant="contained" disabled>
                        Disable
                      </Button>
                    )}
                  </div>
                </form>
                <div className="text-center mt-2">
                  <p>
                    <span className="text-muted me-3">
                      If already have an account?
                    </span>
                    <Button variant="text" onClick={() => navigate("/login")}>
                      Login
                    </Button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Register;
