import zyRequest from "../../../../service";

export function editGroup(
  id: number,
  content: string,
  required: string,
  harvest: string
) {
  return zyRequest.post({
    url: "web/introduce/saveOrUpdate",
    data: {
      id,
      content,
      required,
      harvest,
    },
  });
}
