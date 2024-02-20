import zyRequest from "../../../../service";

export function getUrl(publish: boolean) {
  return zyRequest.get({
    url: "web/swiper",
    params: {
      publish,
    },
  });
}

type dataType = {
  url: string | null;
  title: string | null;
  content: string | null;
};
export function editPic(publish: boolean, arr: any) {
  return zyRequest.post({
    url: "web/swiper",
    params: {
      publish,
    },
    data: arr,
  });
}
