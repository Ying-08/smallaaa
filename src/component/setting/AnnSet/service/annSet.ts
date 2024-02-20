import zyRequest from "../../../../service";

export function getAnnTab(page: number, pageSize: number) {
  return zyRequest.get({
    url: "web/notification/page",
    params: {
      page,
      pageSize,
    },
  });
}

export function deleteAnn(id: string) {
  return zyRequest.delete({
    url: "web/notification/delete",
    data: {
      id,
    },
  });
}
