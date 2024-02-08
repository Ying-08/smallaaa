import React from "react";

import "normalize.css";
import "./assets/css/index.css";
import { useState, useEffect } from "react";
import OtherPage from "./component/otherPage";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "./component/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 在组件挂载时检查用户是否已登录
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("token");
    if (userLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const location = useLocation();
  let url = location.pathname;

  if (isLoggedIn) {
    url = "/home";
  }

  console.log("目前路径", url);
  return (
    <div className="App">
      <Routes>
        {/* 匹配所有路径 */}
        <Route
          path="*"
          element={
            isLoggedIn ? <OtherPage url={url} /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
