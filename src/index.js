import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NotFound from "./routes/NotFound";
import Home from "./routes/Home";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import Profile from "./routes/Profile";
import { QueryClient, QueryClientProvider } from "react-query";
import TweetForm from "./routes/TweetForm";
import ProtectedRoute from "./components/ProtectedRoute";
import HomeToRoute from "./components/HomeToRoute";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: (
      <ProtectedRoute>
        <Outlet />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "tweet-write",
        element: <TweetForm />,
      },
    ],
  },
  {
    path: "login",
    element: (
      <HomeToRoute>
        <Login />,
      </HomeToRoute>
    ),
  },
  {
    path: "signup",
    element: (
      <HomeToRoute>
        <SignUp />,
      </HomeToRoute>
    ),
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
