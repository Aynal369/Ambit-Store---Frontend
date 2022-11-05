import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import useTools from "../../../hook/useTools";
import LoadingButton from "@mui/lab/LoadingButton";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [thumbnailURL, setThumbnailURL] = useState("");
  const [productImageURL, setProductImageURL] = useState([]);
  const { isClick, setIsClick, buttonRefresh } = useTools();
  const { register, handleSubmit, reset } = useForm();

  const handleImageUpload = (e) => {
    const imgFiles = e.target.files;
    let imgArr = [];
    for (let i = 0; i < imgFiles.length; i++) {
      let imageData = new FormData();
      imageData.append("file", imgFiles[i]);
      imageData.append("upload_preset", "ambitstore");
      imageData.append("cloud_name", "aynal369");
      axios
        .post(
          "https://api.cloudinary.com/v1_1/aynal369/image/upload",
          imageData
        )
        .then((res) => {
          setThumbnailURL(res.data.url);
          imgArr.push(res.data.url);
          setProductImageURL(imgArr);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onSubmit = (data) => {
    setIsClick(true);
    const title = data.title;
    const description = data.description;
    const price = data.price;
    const discountPercentage = data.discountPercentage;
    const rating = data.rating;
    const stock = data.stock;
    const brand = data.brand;
    const category = data.category;

    const productData = {
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnailURL,
      productImageURL,
    };
    axios
      .post("http://localhost:5000/app/v1/products", productData)
      .then((response) => {
        if (response.data?.status === "success") {
          toast.success(`${response.data?.message}`);
          reset();
        }
      })
      .catch((err) => {
        Swal.fire("Attention!", `${err.response.data.message}`, "error");
      });
    buttonRefresh();
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 p-0">
          <div className="card border-0 shadow p-2">
            <p className="display-6 opacity-50 text-center border-bottom">
              Add new product
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="row justify-content-center g-4"
            >
              <div className="col-sm-10">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  className="form-control"
                  {...register("title")}
                />
              </div>
              <div className="col-sm-10">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  id="description"
                  className="form-control"
                  {...register("description")}
                />
              </div>
              <div className="col-sm-10">
                <label htmlFor="thumbnailURL">Thumbnail</label>
                <input
                  type="file"
                  id="thumbnailURL"
                  className="form-control"
                  {...register("thumbnailURL")}
                  onChange={handleImageUpload}
                />
              </div>
              <div className="col-sm-10">
                <label htmlFor="productImageURL">Images</label>
                <input
                  type="file"
                  id="productImageURL"
                  className="form-control"
                  multiple
                  {...register("productImageURL")}
                  onChange={handleImageUpload}
                />
              </div>
              <div className="col-sm-10">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  id="price"
                  className="form-control"
                  {...register("price")}
                />
              </div>
              <div className="col-sm-10">
                <label htmlFor="discountPercentage">Discount Percentage</label>
                <input
                  type="text"
                  id="discountPercentage"
                  className="form-control"
                  {...register("discountPercentage")}
                />
              </div>
              <div className="col-sm-10">
                <label htmlFor="rating">Rating</label>
                <input
                  type="text"
                  id="rating"
                  className="form-control"
                  {...register("rating")}
                />
              </div>
              <div className="col-sm-10">
                <label htmlFor="stock">Stock</label>
                <input
                  type="text"
                  id="stock"
                  className="form-control"
                  {...register("stock")}
                />
              </div>
              <div className="col-sm-10">
                <label htmlFor="brand">Brand</label>
                <input
                  type="text"
                  id="brand"
                  className="form-control"
                  {...register("brand")}
                />
              </div>
              <div className="col-sm-10">
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  id="category"
                  className="form-control"
                  {...register("category")}
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

export default AddProduct;
