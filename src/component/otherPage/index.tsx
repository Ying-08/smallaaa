import React from "react";
import Header from "../Header";
import { APPStyle } from "../../style";
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import LeftNav from "../LeftNav";
import routes from "../../router";
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
            <div className="main">{useRoutes(routes)}</div>
          </Suspense>
        </div>
      </APPStyle>
    </div>
  );
};

export default OtherPage;
