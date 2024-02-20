import zyRequest from "../../../service";

export function getIntro(id) {
  return zyRequest.get({
    url: "web/introduce/get",
    params: {
      id: id,
    },
  });
}

export function getAnnInSet() {
  let info = localStorage.getItem("AnyToken");
  if (info) {
    info = JSON.parse(info);
    info = JSON.parse(info);
    return zyRequest.get({
      url: "web/notification/get",
      params: {
        id: info.username,
      },
    });
  }
}
