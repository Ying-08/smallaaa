import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// 使用store在这里，给子组件提供
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
