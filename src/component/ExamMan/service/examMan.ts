import zyRequest from "../../../service";

export function getExamPro() {
  let info: any = localStorage.getItem("AnyToken");
  if (info) {
    info = JSON.parse(info);
    console.log("打印一下get里面获得的参数", info.userGroup);
    return zyRequest.post({
      url: "web/assess/getByGroup",
      data: {
        assessGroup: info.userGroup,
      },
    });
  }
}

export function deletePro(id: string) {
  return zyRequest.post({
    url: "web/assess/delete",
    data: {
      id,
    },
  });
}

export function getExamCon() {
  return zyRequest.get({
    url: "web/assess/getAllPassCountAndRate",
  });
}
