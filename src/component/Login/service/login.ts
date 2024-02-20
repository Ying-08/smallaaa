import { FieldType } from "..";
import zyRequest from "../../../service";

export function loginIn(datas: FieldType) {
  console.log("进入login");
  return zyRequest.post({
    url: "/web/user/login",
    data: {
      username: datas.username,
      password: datas.password,
    },
  });
}
