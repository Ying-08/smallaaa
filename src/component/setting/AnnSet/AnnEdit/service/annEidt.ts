import zyRequest from "../../../../../service";

export function getAnnDetail(id: string) {
  return zyRequest.get({
    url: "web/notification/get",
    params: {
      id,
    },
  });
}

export function reviseAnn(
  id: string,
  title: string,
  content: string,
  publisherUsername: string,
  isPublish: boolean,
  noGroup: number
) {
  return zyRequest.post({
    url: "web/notification/add",
    data: {
      id,
      title,
      content,
      publisherUsername,
      isPublish,
      noGroup,
    },
  });
}
