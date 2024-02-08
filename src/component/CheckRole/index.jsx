import React from "react";

// 高阶组件鉴权
export default function checkRole(WrapperCom) {
  let localStorage = window.localStorage;
  return (props) => {
    if (localStorage.isLogin === "1") {
      return <WrapperCom {...props} />;
    } else {
      return <redirect to="/" />;
    }
  };
}
