import zyRequest from "../../../../service";

export function getpeoDetail(id: string) {
  return zyRequest.get({
    url: "wx/assess/admin/info",
    params: {
      openid: id,
    },
  });
}

export function passExam(openid:string, score:number, pass:boolean){
  return zyRequest.post({
    url:"web/assess/pass",
    params:{
      openid,
      score,
      pass
    }
  })
}


export  function queryInfo(openid:string){
  return zyRequest.get({
    url:"wx/assess/admin",
    params:{
      openid
    }
  })
}

export function upRemark(openid:string,remark:string|null){
  return zyRequest.put({
    url:"web/assess",
    params:{
      openid,
      remark
  }
  })
}
