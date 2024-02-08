import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { APPStyle } from "../../style";
import Header from "../Header";
import LeftNav from "../LeftNav";
const OtherPage = (data: any) => {
  console.log("接受的url", data.url);

  return (
    <div className="otherPage">
      <Header />
      <APPStyle>
        <div className="APPWrapper">
          <LeftNav />

          {/* 路由懒加载一定要有 */}
          <Suspense fallback="">
            <div className="main">
              <Outlet></Outlet>
            </div>
          </Suspense>
        </div>
      </APPStyle>
    </div>
  );
};

export default OtherPage;
