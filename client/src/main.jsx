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
import Map from "./map.jsx"
import Users from "./users.jsx"
import Congrats from "./modalSignup.jsx"
import Authorisation from "./authorisation.jsx"


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
    path: "/addTrip/:name",
    element: <AddTripForm />,
  },
  {
    path: "/trip",
    element: <Trip />,
  },
 
  {
    path: "/point/:trip/:id" ,
    element: <Points />,
  },
  {
    path: "/pointForm/:trip/:id" ,
    element: <AddPointForm />,
  },
  {
    path: "/point/:trip" ,
    element: <Points />,
  },
  {
    path: "/pointForm",
    element: <AddPointForm />,
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/map/:name",
    element: <Map />,
  },
  {
    path: "/map/:trip/:id",
    element: <Map />,
  },
  {
    path: "/user",
    element: <Users />,
  },
  {
    path: "/congrats",
    element: <Congrats />,
  },
  {
    path: "/auto",
    element: <Authorisation />,
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("root")
);
