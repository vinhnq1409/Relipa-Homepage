// import { post } from "./BaseRequest";
import { setCookie, STORAGEKEY } from "../utils/storage/index";
import axios from "axios";

export const useAuth = async ({ email, password }) => {
  const { data } = await axios.post(
    "http://14.232.214.101:8111/api/v1/user/login",
    {
      email,
      password,
      // client_id,
      // client_serect,
      // grant_type,
    }
  );
  if (data) {
    setCookie(STORAGEKEY.ACCESS_TOKEN, data.access_token);
  }
  return !!data;
};
