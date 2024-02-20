import zyRequest from "../../../../service";

export function editExamProcess(
  name: string,
  startTime: any,
  endTime: any,
  contentUrl: string
) {
  let info: any = localStorage.getItem("AnyToken");
  if (info) {
    info = JSON.parse(info);
    return zyRequest.post({
      url: "web/assess/add",
      data: {
        assessGroup: info.userGroup,
        name,
        startTime,
        endTime,
        contentUrl,
        creatorUsername: info.username,
      },
    });
  }
}
