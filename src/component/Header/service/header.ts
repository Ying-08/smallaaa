import zyRequest from "../../../service";

export function quit() {
  return zyRequest.post({
    url: "web/user/logout",
  });
}
