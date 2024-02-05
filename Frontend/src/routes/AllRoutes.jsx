import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminProducts from "../pages/AdminProducts";
import LandingPage from "../pages/LandingPage";
import AllUsers from "../pages/AllUsers";
import Cart from "../pages/Cart";
import Electronic from "../pages/Electronic";
import MenProducts from "../pages/MenProducts";
import WomenProducts from "../pages/WomenProducts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminDashboard from "../components/AdminLayout";
import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";
import PaymentForm from "../pages/PaymentForm";
import OrderSuccessful from "../pages/OrderSuccessful";
import SingleProduct from "../pages/SingleProduct";
import Team from "../pages/Team";
import AdminPrivateAuth from "./AdminPrivateRoute";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/men-clothing" element={<MenProducts />} />
      <Route path="/women-clothing" element={<WomenProducts />} />
      <Route path="/electronics" element={<Electronic />} />
      <Route
        path="/products/:type/:id"
        element={
          <PrivateRoute>
            <SingleProduct />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<Team />} />
      {/* NAVBAR IS DIFFERENT */}
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route path="/wishlist" element={<h1>WishList</h1>} />
      <Route
        path="/checkout/payment"
        element={
          <PrivateRoute>
            <PaymentForm />
          </PrivateRoute>
        }
      />
      <Route
        path="/OrderSuccessful"
        element={
          <PrivateRoute>
            <OrderSuccessful />
          </PrivateRoute>
        }
      />
      <Route path="/admin" element={<AdminDashboard />}>
        <Route
          index
          element={
            <AdminPrivateAuth>
              <Dashboard />{" "}
            </AdminPrivateAuth>
          }
        />
        <Route
          exact
          path="dashboard"
          element={
            <AdminPrivateAuth>
              <Dashboard />{" "}
            </AdminPrivateAuth>
          }
        />
        <Route
          exact
          path="orders"
          element={
            <AdminPrivateAuth>
              <Orders />
            </AdminPrivateAuth>
          }
        />
        <Route
          exact
          path="products"
          element={
            <AdminPrivateAuth>
              <AdminProducts />{" "}
            </AdminPrivateAuth>
          }
        />
        <Route
          exact
          path="users/list"
          element={
            <AdminPrivateAuth>
              <AllUsers />{" "}
            </AdminPrivateAuth>
          }
        />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
