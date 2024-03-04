import zyRequest from "../../../../service";

interface EditExamProcessParams {
  name: string;
  startTime: *;
  endTime: *;
  contentUrl: string;
}

export function editExamProcess(
  {name, startTime, endTime, contentUrl}: EditExamProcessParams
) {
  let info: *;
  info = localStorage.getItem("AnyToken");
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
