import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartArea from "./CartArea";

const navData = [
  {
    id: "01",
    name: "Home",
    link: "/",
  },
  {
    id: "02",
    name: "Products",
    link: "/products",
  },
  {
    id: "03",
    name: "Blog",
    link: "/blog",
  },
  {
    id: "04",
    name: "About",
    link: "/about",
  },
  {
    id: "05",
    name: "Contact",
    link: "/contact",
  },
];

const Header = () => {
  return (
    <header className="border border-bottom-secondary">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand mb-2 mb-sm-0" to="/">
            <span className="text-warning display-6">AmbitStore</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {navData.map((data) => (
                <li className="nav-item mx-2" key={data.id}>
                  <NavLink className="nav-link fw-semibold" to={data.link}>
                    {data.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <CartArea />
        </div>
      </nav>
    </header>
  );
};

export default Header;
