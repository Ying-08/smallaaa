import zyRequest from "../../../service";

export function getPeoData(
  page: number,
  pageSize: number,
  name?: string,
  college?: string,
  major?: string,
  groupOption?: string
) {
  console.log("发送了=================");
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
