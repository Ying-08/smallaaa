import NProgress from "nprogress";
import { FC, ReactNode, Suspense } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { APPStyle } from "../../style";
import Header from "../Header";
import LeftNav from "../LeftNav";

import { useEffect } from "react";
/**
 * 页面切换loading
 * @returns
 */
export function Loading() {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);
  return <div>loading......</div>;
}
/**
 * 权限判断hoc
 * @param props
 * @returns
 */
const RequireAuth: FC<{ children: ReactNode }> = (props) => {
  let location = useLocation();
  //登录状态判断
  if (!localStorage.getItem("token")) {
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
  }
  //权限判断
  //.......
  return <div>{props.children}</div>;
};
const OtherPage = () => {
  return (
    <div className="otherPage">
      <Header />
      <APPStyle>
        <div className="APPWrapper">
          <LeftNav />
          <div className="main">
            <RequireAuth>
              <Suspense fallback={<Loading></Loading>}>
                <Outlet></Outlet>
              </Suspense>
            </RequireAuth>
          </div>
        </div>
      </APPStyle>
    </div>
  );
};

export default OtherPage;
