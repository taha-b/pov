import React from "react";
import ReactDOM from "react-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";


import Login from "./login.jsx";
import SignUp from "./signup.jsx";
import HomePage from "./App.jsx";
import Dashboard from "./dashboard.jsx";
import AddTripForm from "./addTripForm.jsx";
import Points from "./points.jsx";
import Trip from "./trip.jsx"
import AddPointForm from "./addPointForm"

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/addTrip",
    element: <AddTripForm />,
  },
  {
    path: "/trip",
    element: <Trip />,
  },
  {
    path: "/point/:trip" ,
    element: <Points />,
  },
  {
    path: "/pointForm",
    element: <AddPointForm />,
  },
  
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("root")
);
