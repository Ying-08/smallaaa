import { lazy } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import Home from "../component/Home";

const PeoMan = lazy(() => import("../component/PeoMan"));
const ExamMan = lazy(() => import("../component/ExamMan"));
const ShowSet = lazy(() => import("../component/setting/ShowSet"));
const AnnSet = lazy(() => import("../component/setting/AnnSet"));
const AnnEdit = lazy(() => import("../component/setting/AnnSet/AnnEdit"));
const Set = lazy(() => import("../component/setting/index"));
const Login = lazy(() => import("../component/Login"));
const Accounts = lazy(() => import("../component/accounts"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/peoMan",
        element: <PeoMan />,
      },
      {
        path: "/examMan",
        element: <ExamMan />,
      },
      {
        path: "/set",
        element: <Set></Set>,
      },
      {
        path: "/showSet",
        element: <ShowSet />,
      },
      {
        path: "/annSet",
        element: <AnnSet />,
        children: [
          {
            path: "/annSet/annEdit",
            element: <AnnEdit />,
          },
        ],
      },
      {
        path: "/accounts",
        element: <Accounts />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default createBrowserRouter(routes);
