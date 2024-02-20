import { lazy } from "react";
import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import Home from "../component/Home";
import OtherPage from "../component/otherPage";
import EditExamCon from "../component/ExamMan/editExamCon";
import EditContent from "../component/ExamMan/editContent";
import EditGroupIntro from "../component/setting/EditGroupIntro";
const PeoMan = lazy(() => import("../component/PeoMan"));
const ExamMan = lazy(() => import("../component/ExamMan"));
const ShowSet = lazy(() => import("../component/setting/ShowSet"));
const AnnSet = lazy(() => import("../component/setting/AnnSet"));
const AnnEdit = lazy(() => import("../component/setting/AnnSet/AnnEdit"));
const Set = lazy(() => import("../component/setting/index"));
const Accounts = lazy(() => import("../component/accounts"));
const Login = lazy(() => import("../component/Login"));
const PeoDetail = lazy(() => import("../component/PeoMan/peoDetail"));

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
        path: "",
        element: <Home />,
      },
      {
        path: "peoMan",
        element: <PeoMan />,
      },
      {
        path: "peoMan/peoDetail/*",
        element: <PeoDetail></PeoDetail>,
      },
      {
        path: "examMan",
        element: <ExamMan />,
      },
      {
        path: "examMan/edit",
        element: <EditExamCon />,
      },
      {
        path: "/examMan/editContent/*",
        element: <EditContent />,
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
        path: "/set/editGroupIntro/*",
        element: <EditGroupIntro />,
      },
      {
        path: "annSet",
        element: <AnnSet />,
      },
      {
        path: "annSet/annEdit/*",
        element: <AnnEdit />,
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
