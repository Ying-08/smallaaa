import zyRequest from "../../../service";

export function getPeoData(
  page: number,
  pageSize: number,
  name?: string,
  college?: string,
  major?: string,
  groupOption?: string
) {
  return zyRequest.get({
    url: "web/user/info",
    params: {
      page: page,
      pageSize: pageSize,
      name,
      college,
      major,
      groupOption,
    },
  });
}
export function deleteUser(
    openid:string
) {
  return zyRequest.delete({
    url: "web/user",
    params: {
      openid
    },
  });
}
