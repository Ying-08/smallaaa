import React, { useEffect } from "react";
import PeoDetailWrapper from "./style";
import { Input, Button } from "antd";
import { useAppDispatch, useAppSeletor } from "../../../store";
import { fetchPeoDetDataAction } from "./store/peoDetail";

const PeoDetail = () => {
  // 获取当前页面的 URL 路径
  const url = window.location.pathname;
  const dispatch = useAppDispatch();
  // 使用 split 方法将 URL 路径以 '/' 分割成数组，并获取最后一个元素
  const parts = url.split("/");
  let openid = parts[parts.length - 1];

  // 获取相应的数据
  let peoDet = JSON.parse(localStorage.getItem("people") || "");
  console.log("人员的详细数据", peoDet);

  useEffect(() => {
    dispatch(fetchPeoDetDataAction(openid));
  }, []);

  return (
    <PeoDetailWrapper>
      <div className="peoDetail">
        <div className="above">
          <div className="left">
            <div className="title">报名信息</div>
            <div className="content">
              <div className="name">姓名：{peoDet.name}</div>
              <div className="college">学院：{peoDet.college}</div>
              <div className="grade">年级：{peoDet.grade}</div>
              <div className="major">专业：{peoDet.major}</div>
              <div className="stu-num">学号：{peoDet.stu_id}</div>
              <div className="direction">选择方向：{peoDet.group_option}</div>
              <div className="phone">联系方式：{peoDet.phone}</div>
            </div>
          </div>

          <div className="right">
            <div className="pro-set">
              <div className="title">进度设置</div>
              <div className="content">
                <div className="item">
                  面试：99分
                  <button className="passed">已通过</button>
                </div>
                <div className="item">
                  一轮考核：
                  <Input placeholder="输入分数"></Input>
                  <button className="fail">不通过</button>
                  <button className="pass">通过</button>
                </div>
                <div className="item">
                  一轮面试：<Input placeholder="输入分数"></Input>
                </div>
                <div className="item">
                  一轮面试：<Input placeholder="输入分数"></Input>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="below">
          <div className="remark">
            <div className="title">备注</div>
            <div className="content">
              <textarea placeholder="备注"></textarea>
            </div>
          </div>

          <div className="buttons">
            <Button
              style={{ marginRight: 20 }}
              onClick={() => {
                window.history.go(-1);
              }}
            >
              返回
            </Button>
            <Button>确定</Button>
          </div>
        </div>
      </div>
    </PeoDetailWrapper>
  );
};

export default PeoDetail;
