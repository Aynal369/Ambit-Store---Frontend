import React from "react";
import { Link } from "react-router-dom";

const FooterColumns = (props) => {
  const { Title, Items } = props;
  return (
    <div className="col-lg-3 mt-5">
      <div className="ms-5">
        <h4>{Title}</h4>
        <ul className="list-unstyled mt-4">
          {Items.map((item, index) => (
            <li key={index} className="mb-2">
              <Link
                to={item.link}
                style={{ textDecoration: "none", color: "#666" }}
                className="footer-link"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterColumns;
