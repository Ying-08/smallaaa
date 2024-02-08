import React from "react";
import {
  TrademarkCircleOutlined,
  UserOutlined,
  TeamOutlined,
  ProfileOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import { lazy } from "react";
import { HomeWrapper } from "./style";
import HorizontalBarChart from "../BarChart";
const DataTab = lazy(() => import("../DataTab"));
const Home = () => {
  return (
    <HomeWrapper>
      <div className="home">
        <div className="left">
          <div className="overall-data">
            <div className="item">
              <div className="icon-wrapper one-i">
                <TrademarkCircleOutlined
                  style={{ fontSize: "26px", color: "#33afec" }}
                />
              </div>
              <div className="item-title">已注册</div>
              <div className="item-data">255</div>
            </div>
            {/* 已报名 */}
            <div className="item">
              <div className="icon-wrapper two-i">
                <TeamOutlined style={{ fontSize: "26px", color: "#FACFA0" }} />
              </div>
              <div className="item-title">已报名</div>
              <div className="item-data">55</div>
            </div>
            {/* 面试 */}
            <div className="item">
              <div className="icon-wrapper three-i">
                <UserOutlined style={{ fontSize: "26px", color: "#AFEAF9" }} />
              </div>
              <div className="item-title">面试</div>
              <div className="item-data">55</div>
            </div>
            {/* 一轮考核 */}
            <div className="item">
              <div className="icon-wrapper four-i">
                <ProfileOutlined
                  style={{ fontSize: "26px", color: "#E85014" }}
                />
              </div>
              <div className="item-title">一轮考核</div>
              <div className="item-data">0</div>
            </div>
            {/* 二轮考核 */}
            <div className="item">
              <div className="icon-wrapper five-i">
                <ReadOutlined style={{ fontSize: "26px", color: "#13E9F0" }} />
              </div>
              <div className="item-title">二轮考核</div>
              <div className="item-data">0</div>
            </div>
          </div>

          {/* 图表 */}
          <div className="peo-man">
            <div className="peo-title">人员管理</div>
            <button className="ell">...</button>
            <DataTab />
          </div>
        </div>
        <div className="right clearfix">
          <div className="process clearfix">
            <div className="pro-title">各组考核进度</div>
            <HorizontalBarChart />
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
