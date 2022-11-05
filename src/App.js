import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./components/mainUI/pages/Home";
import Products from "./components/mainUI/pages/Products";
import AuthProvider from "./authentication/AuthProvider";
import Login from "./components/mainUI/pages/Login";
import Register from "./components/mainUI/pages/Register";
import ControlPanel from "./components/controlPanel/pages/ControlPanel";
import UserList from "./components/controlPanel/pages/UserList";
import AddProduct from "./components/controlPanel/pages/AddProduct";
import ProductList from "./components/controlPanel/pages/ProductList";
import MakeUser from "./components/controlPanel/pages/MakeUser";
import MakeAdmin from "./components/controlPanel/pages/MakeAdmin";
import EditProduct from "./components/controlPanel/pages/EditProduct";
import ProductDetails from "./components/mainUI/containers/ProductDetails";
import DynamicPage from "./components/mainUI/pages/DynamicPage";
import ShoppingCart from "./components/mainUI/pages/ShoppingCart";
import WishList from "./components/mainUI/pages/WishList";
import RequireAdminAuth from "./authentication/RequireAdminAuth";
import Dashboard from "./components/dashboard/pages/Dashboard";
import Checkout from "./components/mainUI/pages/Checkout";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<DynamicPage />}>
            <Route path="/products-details/:id" element={<ProductDetails />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/wish-list" element={<WishList />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route
            path="/control-panel"
            element={
              <RequireAdminAuth>
                <ControlPanel />
              </RequireAdminAuth>
            }
          >
            <Route path="/control-panel/user-list" element={<UserList />} />
            <Route path="/control-panel/add-product" element={<AddProduct />} />
            <Route
              path="/control-panel/product-list"
              element={<ProductList />}
            />
            <Route
              path="/control-panel/edit-product/:id"
              element={<EditProduct />}
            />
            <Route path="/control-panel/make-user" element={<MakeUser />} />
            <Route path="/control-panel/make-admin" element={<MakeAdmin />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </AuthProvider>
  );
}

export default App;
