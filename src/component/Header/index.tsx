import React from "react";
import { HeaderWrapper } from "./style";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="head">
        <div className="title">小A招新后台管理系统</div>
        <div className="user">你好，管理组组长</div>
        <button>退出</button>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
