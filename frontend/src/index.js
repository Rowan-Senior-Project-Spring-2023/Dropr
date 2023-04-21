import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./App.scss";
import Root from "Patterns/05_Pages/Root";
import Error from "Patterns/05_Pages/Error";
import Landing from "Patterns/05_Pages/Landing";
import Login from "Patterns/05_Pages/Login and Signup/Login";
import Signup from "Patterns/05_Pages/Login and Signup/Signup";
import App from "Patterns/05_Pages/App/App";
import Company from "Patterns/05_Pages/Company/Company";
import RegisterProduct from "Patterns/05_Pages/Register Product/RegisterProduct";
import CompanySignup from "Patterns/05_Pages/Login and Signup/CompanySignup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/home",
        element: <App />,
      },
      {
        path: "/home/category/:category",
        element: <App />,
      },
      {
        path: "/companies/:companyId",
        element: <Company />,
      },
      {
        path: "/register-product",
        element: <RegisterProduct />,
      },
      {
        path: "/company-signup",
        element: <CompanySignup />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
