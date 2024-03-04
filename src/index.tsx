import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import {ConfigProvider} from "antd";
import zhCN from 'antd/locale/zh_CN';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// 使用store在这里，给子组件提供
root.render(
  <Provider store={store}>
      <ConfigProvider locale={zhCN}>
          <App></App>
      </ConfigProvider>
  </Provider>
);
