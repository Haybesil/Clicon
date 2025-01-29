import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import Tender from '../pages/Tender';
import Register from '../auth/RegisterForm';
import LoginForm from '../auth/LoginForm';
import Notfound from '../pages/Notfound';
import Profile from '../pages/Profile';

// Create the routes
const router = createBrowserRouter([
  {
    path: '/', // Make Sign Up the first page
    element: <Register />,
  },
  {
    path: '/login',
    element: <LoginForm />,
  },
  { path: '/profile',
     element: <Profile /> },
  {
    path: '/home',
    element: <Layout />, // Main app layout with Header and Sidebar
    children: [
      { index: true, element: <Home /> },
      { path: 'tender', element: <Tender /> },
    ],
  },
  {
    path: '*',
    element: <Notfound />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
