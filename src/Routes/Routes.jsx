import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import Installation from '../pages/Installation/Installation';
import AppDetails from '../pages/AppDetails/AppDetails';
import AppNotFound from '../pages/AppNotFound/AppNotFound';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            loader:()=>fetch('/appsData.json'),
            path: "/",
            Component: Home
        },
        {
            path: "/apps",
            loader:()=>fetch('/appsData.json'),
            Component: Apps
        },
        {
            path: "/appDetails/:id",
            loader:()=>fetch('/appsData.json'),
            Component: AppDetails,
            errorElement: <AppNotFound></AppNotFound>
        },
        {
            path: "/installation",
            Component: Installation
        },

    ]
  },
]);