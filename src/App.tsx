import "normalize.css";
import "nprogress/nprogress.css";
import { RouterProvider } from "react-router-dom";
import "./assets/css/index.css";

import router from "./router";
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
