import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import useTools from "../../../hook/useTools";
import LoadingButton from "@mui/lab/LoadingButton";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MakeUser = () => {
  const { isClick, setIsClick, buttonRefresh } = useTools();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    setIsClick(true);
    const email = data.email;
    if (email) {
      axios
        .patch(`http://localhost:5000/app/v1/users/${email}`, {
          role: "user",
        })
        .then((response) => {
          if (response.data.data.modifiedCount > 0) {
            toast.success("Congratulations! successfully make user");
            navigate("/control-panel/user-list");
          }
        })
        .catch((err) => {
          Swal("Alert!", `${err.response.data.message}`, "error");
        });
    }
    buttonRefresh();
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 p-0">
          <div className="card border-0 shadow p-2">
            <p className="display-6 opacity-50 text-center border-bottom">
              Make user
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="row justify-content-center g-4"
            >
              <div className="col-sm-10">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  {...register("email")}
                />
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
                    endIcon={<SendIcon />}
                  >
                    Submit
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeUser;
