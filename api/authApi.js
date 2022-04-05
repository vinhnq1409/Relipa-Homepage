import { post } from "./BaseRequest";
import { setCookie, STORAGEKEY } from "../utils/storage/index";

export const useAuth = async ({ email, password }) => {
  const { data } = await post("oauth/token", {
    email,
    password,
    client_id,
    client_serect,
    grant_type,
  });
  if (data) {
    setCookie(STORAGEKEY.ACCESS_TOKEN, data.access_token);
  }
  return !!data;
};
