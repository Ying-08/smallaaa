import zyRequest from "../../../../service";

export function getpeoDetail(id: string) {
  return zyRequest.get({
    url: "wx/assess/admin/info",
    params: {
      openid: id,
    },
  });
}
