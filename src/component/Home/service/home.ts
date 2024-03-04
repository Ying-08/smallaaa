import zyRequest from "../../../service";

export function getOverData() {
  return zyRequest.get({
    url: "web/user/count",
  });
}

export function getSignData() {
  return zyRequest.get({
    url: "web/user/assessCount",
  });
}

export function getOverInterview(data: any) {
  return zyRequest.get({
    url: "web/user/assessCount",
    params: {
      id: data,
    },
  });
}

export function getPeoTab() {
  return zyRequest.get({
    url: "web/user/info",
    params: {
      page: 1,
      pageSize: 2,
    },
  });
}
export function getExamPro() {
  return zyRequest.post({
    url: "web/assess/getByGroup",
  });
}

export function getAnn() {
  return zyRequest.get({
    url: "web/notification/page",
    params: {
      page: 1,
      pageSize: 5,
    },
  });
}
