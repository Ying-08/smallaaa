import React, {useEffect, useState} from "react";
import PeoDetailWrapper from "./style";
import {Input, Button, Select, Space, message} from "antd";
import { useAppDispatch, useAppSeletor } from "../../../store";
import { fetchPeoDetDataAction } from "./store/peoDetail";
import { passExam, queryInfo} from "./service/peoDetail";


const PeoDetail = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const info = (text: string) => {
    messageApi.info(text);
  };

  // 获取当前页面的 URL 路径
  const url = window.location.pathname;
  const dispatch = useAppDispatch();
  // 使用 split 方法将 URL 路径以 '/' 分割成数组，并获取最后一个元素
  const parts = url.split("/");
  let openid = parts[parts.length - 1];

  // 获取相应的数据
  let peoDet = JSON.parse(localStorage.getItem("people") || "");
  let examid=JSON.parse(localStorage.getItem("examId") || "");
  let peoScore=useAppSeletor(state=>state.peoDetail.data)

  // 设置分数
  const [score, setScore] = useState(peoDet.scores);

  // 设置备注
  const [textareaValue,setTextareaValue]=useState(score[0].remark)

  function passClick(i:number,pass:boolean,value:any){
    passExam(peoDet.openid,value,pass).then((res)=>{
      info(res.msg)
      dispatch(fetchPeoDetDataAction(openid));
    })
  }

  // 查看备注
  let remarkI=0
  function handleChange(i:any){
    i=parseInt(i)
    remarkI=i
    if(score[i]){
      setTextareaValue(score[i].remark)
    }else {
      setTextareaValue("")
    }
  }


  // 输入框的绑定
  const emptyArray = Array.from({ length: peoScore.length }, () => '');
  let [inputValue,setInputValue]=useState(emptyArray)

  const handleScoreChange = (e:any,i:number) => {
    let input = e.target.value;
    let temp=[...inputValue]
    temp[i]=input
    setInputValue(temp)
  };

  // 备注的绑定
  let [remark,setRemark]=useState("")

  function remarkChange(e:any){
    setRemark(e.target.value)
  }

  // 提交备注
  function submitRemark(){
    console.log(".......................",remarkI,remark)
  }

  useEffect(() => {
    dispatch(fetchPeoDetDataAction(openid));
  }, []);

  return (
    <PeoDetailWrapper>
      {contextHolder}
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
              <div className="content" style={{paddingBottom:12}}>
                <div style={{height:250,overflowY:"scroll",paddingBottom:12}}>
                  {peoScore.map((item:any,index:number)=>(
                      <div className="item">
                        <div style={{width:80,display:"inline-block"}}>{item.assess.name}</div>
                        {item.score ? (
                            <React.Fragment>
                              {item.score}
                              <button className={item.pass ? "passed" : "failed"}>{item.pass ? "已通过" : "未通过"}</button>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                              <Input type="number" placeholder="请输入分数" disabled={!item.currentAssess} min={0} max={100} value={inputValue[index]} onChange={(e)=>{handleScoreChange(e,index)}}/>
                              <button className="unpass"  onClick={()=>{passClick(0,false,inputValue[index])}}>不通过</button>
                              <button className="pass" onClick={()=>{passClick(0,true,inputValue[index])}}>通过</button>
                            </React.Fragment>
                        )}
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="below">
          <div className="remark">
            <div className="first">
              <div className="title">备注</div>
              <Space wrap className="space">
                <Select
                    defaultValue={examid[0].name}
                    style={{width: 120}}
                    onChange={handleChange}
                    options={examid.map((item:any, index:number) => ({
                      value: index.toString(),
                      label: item.name
                    }))}
                ></Select>
              </Space></div>
            <div className="content">
              <textarea placeholder="备注" defaultValue={textareaValue} value={remark} onChange={remarkChange}></textarea>
            </div>
          </div>

          <div className="buttons">
            <Button
                style={{marginRight: 20}}
                onClick={() => {
                  window.history.go(-1);
                }}
            >
              返回
            </Button>
            <Button onClick={submitRemark}>确定</Button>
          </div>
        </div>
      </div>
    </PeoDetailWrapper>
  );
};

export default PeoDetail;
