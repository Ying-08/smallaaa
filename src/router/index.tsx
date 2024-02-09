import { lazy } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "../component/Home";
import OtherPage from "../component/otherPage";
const PeoMan = lazy(() => import("../component/PeoMan"));
const ExamMan = lazy(() => import("../component/ExamMan"));
const ShowSet = lazy(() => import("../component/setting/ShowSet"));
const AnnSet = lazy(() => import("../component/setting/AnnSet"));
const AnnEdit = lazy(() => import("../component/setting/AnnSet/AnnEdit"));
const Set = lazy(() => import("../component/setting/index"));
const Accounts = lazy(() => import("../component/accounts"));
const Login = lazy(() => import("../component/Login"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <OtherPage></OtherPage>,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "peoMan",
        element: <PeoMan />,
      },
      {
        path: "examMan",
        element: <ExamMan />,
      },
      {
        path: "set",
        element: <Set></Set>,
      },
      {
        path: "showSet",
        element: <ShowSet />,
      },
      {
        path: "annSet",
        element: <AnnSet />,
        children: [
          {
            path: "annSet/annEdit",
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
