import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import useDatabase from "../../../hook/useDatabase";
import IconButton from "@mui/material/IconButton";

const UserList = () => {
  const { allUsers } = useDatabase("http://localhost:5000/app/v1/users");
  let navigate = useNavigate();
  const handleEmailSearch = (e) => {
    /*  const inputValue = e.target.value;
    fetch(
      `https://tranquil-gorge-34559.herokuapp.com/clients?search=${inputValue}`
    )
      .then((res) => res.json())
      .then((data) => setClients(data.searchResults)); */
  };
  const handleClientUpdate = (id) => {
    navigate(`/dashboard/users/edit/${id}`);
  };
  const handleDeleteClient = (id) => {
    /*  const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      const url = `https://tranquil-gorge-34559.herokuapp.com/clients/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.warn("Successfully delete 1 client ");
            const remaining = clients.filter((data) => data._id !== id);
            setClients(remaining);
          }
        });
    } */
  };
  return (
    <div className="bg-white my-5 shadow p-2 rounded-3">
      <div className="row">
        <div className="col-md-6 order-1 order-md-0">
          {/*  <p className="text-muted pt-2">
            Total users [{" "}
            <span className="fw-bold text-danger">{allClients.length}</span> ]
            here is showing [{" "}
            <span className="fw-bold text-danger">pageCount</span> ] users
          </p> */}
        </div>
        <div className="col-md-4 order-0 order-md-1">
          <div className="mb-3">
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="Search by email address"
              onChange={handleEmailSearch}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col mx-auto">
          <div className="table-responsive">
            <table className="table table-sm table-hover table-bordered align-middle text-center">
              <thead className="table-success">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">User name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {allUsers.map((data, index) => (
                  <tr key={data._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{data.userName}</td>
                    <td>{data.email}</td>
                    <td>{data.role}</td>
                    <td>
                      <IconButton
                        color="warning"
                        onClick={() => handleClientUpdate(data._id)}
                      >
                        <EditIcon />
                      </IconButton>
                    </td>
                    <td>
                      <IconButton
                        color="error"
                        onClick={() => handleDeleteClient(data._id)}
                      >
                        <DeleteForeverIcon />
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/*  <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center pt-3">
          {[...Array(pageCount).keys()].map((number) => (
            <li className="page-item" key={number}>
              <button
                type="button"
                className={
                  number === page
                    ? "btn btn-dark ms-3"
                    : "btn btn-outline-dark ms-3"
                }
                onClick={() => setPage(number)}
              >
                {number + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav> */}
        </div>
      </div>
    </div>
  );
};

export default UserList;
