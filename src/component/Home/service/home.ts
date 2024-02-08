import zyRequest from "../../../service";

export function getOverData() {
  return zyRequest.get({
    url: "web/user/count",
  });
}
