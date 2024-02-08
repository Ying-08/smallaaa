import React from "react";
import { NavLink } from "react-router-dom";
import { LeftNavWrapper } from "./style";

// navLink和Link的区别！！

const LeftNav = () => {
  return (
    // LeftNavWrapper与style里面的对应
    <LeftNavWrapper>
      
      <div className="nav">
        <div className="nav-wrapper">
          <NavLink to="/home">首页</NavLink>
          <NavLink to="/peoMan">人员管理</NavLink>
          <NavLink to="/examMan">考核管理</NavLink>
          <div className="settings">
            <NavLink to="/set" className="set">
              设置
            </NavLink>
            <div className="submenu">
              <NavLink to="/showSet">展示设置</NavLink>
              <NavLink to="/annSet">公告设置</NavLink>
            </div>
          </div>
          <NavLink to="/accounts">账号管理</NavLink>
        </div>
      </div>
    </LeftNavWrapper>
  );
};

export default LeftNav;
