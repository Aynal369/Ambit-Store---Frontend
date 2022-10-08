import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import LoadingButton from "@mui/lab/LoadingButton";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../../hook/useAuth";
import useTools from "../../../hook/useTools";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { userLogin } = useAuth();
  const { isClick, setIsClick, buttonRefresh } = useTools();

  const location = useLocation();
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    setIsClick(true);
    const email = data.email;
    const password = data.password;
    userLogin(email, password, navigate, location);
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
                <p className="display-6 opacity-25 text-center mb-4">Login</p>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="row g-4 justify-content-center"
                >
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
                            message: "min length is 8",
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
                  <div className="text-center">
                    {isClick ? (
                      <LoadingButton loading variant="contained">
                        Submit
                      </LoadingButton>
                    ) : (
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        endIcon={<PersonAddAltIcon />}
                      >
                        Login
                      </Button>
                    )}
                  </div>
                  <div className="text-center">
                    <Button
                      variant="text"
                      color="primary"
                      onClick={() => navigate("/forget-password")}
                    >
                      forget password
                    </Button>
                  </div>
                </form>
                <div className="text-center mt-2">
                  <p>
                    <span className="text-muted me-3">
                      Don't have an account?
                    </span>
                    <Button
                      variant="text"
                      onClick={() => navigate("/register")}
                    >
                      Register
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

export default Login;
