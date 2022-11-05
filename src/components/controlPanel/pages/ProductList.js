import React from "react";
import { useNavigate } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import useDatabase from "../../../hook/useDatabase";
import IconButton from "@mui/material/IconButton";
import { toast } from "react-toastify";
import axios from "axios";

const ProductList = () => {
  const { allProducts, setAllProducts } = useDatabase(
    "http://localhost:5000/app/v1/products"
  );
  let navigate = useNavigate();
  const handleEmailSearch = (e) => {
    /*  const inputValue = e.target.value;
      fetch(
        `https://tranquil-gorge-34559.herokuapp.com/clients?search=${inputValue}`
      )
        .then((res) => res.json())
        .then((data) => setClients(data.searchResults)); */
  };
  const handleUpdateProduct = (id) => {
    navigate(`/control-panel/edit-product/${id}`);
  };
  const handleDeleteProduct = (id) => {
    axios
      .delete(`http://localhost:5000/app/v1/product/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "success") {
          toast.warn("Remove product");
          const remaining = allProducts.filter((item) => item._id !== id);
          setAllProducts(remaining);
        }
      })
      .catch((err) => console.log(err.response.data));
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
                  <th scope="col">Thumbnail</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                  <th scope="col">Discount</th>
                  <th scope="col">Rating</th>
                  <th scope="col">stock</th>
                  <th scope="col">brand</th>
                  <th scope="col">category</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {allProducts.map((i, index) => (
                  <tr key={i._id}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <img src={i.thumbnailURL} alt={i.title} width="30px" />
                    </td>
                    <td>{i.title}</td>
                    <td>{i.description}</td>
                    <td>{i.price}</td>
                    <td>{i.discountPercentage}</td>
                    <td>{i.rating}</td>
                    <td>{i.stock}</td>
                    <td>{i.brand}</td>
                    <td>{i.category}</td>
                    <td>
                      <IconButton
                        color="warning"
                        onClick={() => handleUpdateProduct(i._id)}
                      >
                        <EditIcon />
                      </IconButton>
                    </td>
                    <td>
                      <IconButton
                        color="error"
                        onClick={() => handleDeleteProduct(i._id)}
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

export default ProductList;
