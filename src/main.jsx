import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './assets/components/loginpage/LoginPage.jsx';
import Homesection from './assets/components/HomeSection/Homesection.jsx';
import AllJobs from './assets/components/alljobs/AllJobs.jsx';
import MyJob from './assets/components/myjob/MyJob.jsx';
import AddAJob from './assets/components/addajob/AddAJob.jsx';
import AppliedJobs from './assets/components/appliedJobs/AppliedJobs.jsx';
import Blogs from './assets/components/blogs/Blogs.jsx';
import Register from './assets/components/register/Register.jsx';
import AuthContext from './assets/components/authcontext/AuthContext.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/register",
    element: <Register></Register>
  },
  {
    path: "/main",
    element: <App></App>,
    children: [
      {
        path: "home",
        element: <Homesection></Homesection>
      },
      {
        path: "alljobs",
        element: <AllJobs></AllJobs>
      },
      {
        path: "myjobs",
        element: <MyJob></MyJob>
      },
      {
        path: "addajob",
        element: <AddAJob></AddAJob>
      },
      {
        path: "appliedjobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>
      },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </React.StrictMode>,
)
