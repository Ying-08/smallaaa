import zyRequest from "../../../service";

export function getAccounts(page: number, pageSize: number) {
  return zyRequest.get({
    url: "web/user/page",
    params: {
      page,
      pageSize,
    },
  });
}

export function deleteAccounts(username: string) {
  return zyRequest.delete({
    url: "web/user/delete",
    params: {
      username,
    },
  });
}

type dataType = {
  username: string;
  password: string;
  userGroup: string;
  name: string;
  phone: string;
  nickname: string;
};

export function addAccounts(data: dataType) {
  return zyRequest.post({
    url: "web/user/register",
    data: {
      username: data.username,
      password: data.password,
      userGroup: data.userGroup,
      name: data.name,
      phone: data.phone,
      nickname: data.nickname,
    },
  });
}
