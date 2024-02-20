import React from "react";
import { HeaderWrapper } from "./style";
import { quit } from "./service/header";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <div className="head">
        <img src="./picture3.png" alt="" style={{ width: 90 }} />
        <div className="title">小A招新后台管理系统</div>
        {/* <div className="user">你好，管理组组长</div> */}
        <button
          onClick={() => {
            quit().then((res: any) => {
              if (res.msg === "SUCCESS") {
                localStorage.setItem("token", "");
                localStorage.setItem("AnyToken", "");
                localStorage.setItem("people", "");

                navigate("/login");
              }
            });
          }}
        >
          退出
        </button>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
