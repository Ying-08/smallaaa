import "normalize.css";
import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import "./assets/css/index.css";
import OtherPage from "./component/otherPage";

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
      {isLoggedIn ? <OtherPage url={url} /> : <Navigate to="/login" />}
    </div>
  );
}

export default App;
