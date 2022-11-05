import { IconButton, Rating, Stack, Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../../../images/placeholder.jpg";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const lpph = [
  {
    id: "01",
  },
  {
    id: "02",
  },
  {
    id: "03",
  },
  {
    id: "04",
  },
  {
    id: "05",
  },
  {
    id: "06",
  },
  {
    id: "07",
  },
  {
    id: "08",
  },
];

const LatestProductPH = () => {
  return (
    <div className="container py-4">
      <div className="row g-4">
        {lpph.map((data, index) => (
          <div className="col-sm-3" key={index}>
            <div className="card border-0 h-100 product_card">
              <Link to="">
                <figure>
                  <img
                    src={placeholder}
                    className="card-img-top"
                    alt="placeholder"
                    height="194"
                  />
                </figure>
              </Link>
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-10"></span>
                </h5>
                <Rating
                  name="half-rating-read"
                  size="small"
                  value={0}
                  precision={0.5}
                  readOnly
                />
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <h4>$ </h4>
                  <Stack spacing={3} direction="row">
                    <Tooltip>
                      <IconButton size="small">
                        <FavoriteBorderIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip>
                      <IconButton size="small">
                        <AddShoppingCartIcon />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProductPH;
