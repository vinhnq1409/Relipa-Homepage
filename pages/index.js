import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { getCookie, removeCookie, STORAGEKEY } from "../utils/storage/index";
import { setAuthHeader } from "../api/BaseRequest";
import jwt_decode from 'jwt-decode'

export default function Index() {
  const router = useRouter();
  const token = getCookie("access_token");

  if (token) {
    const currentTime = Date.now() / 1000;
    const decoded = jwt_decode(token);
    if (currentTime > decoded.exp) {
      removeCookie(STORAGEKEY.ACCESS_TOKEN);
    } else {
      setAuthHeader(token);
    }
  }

  useEffect(() => {
    if (!token) {
      router.push({
        pathname: "/admin/signin",
      });
    } else {
      router.push({
        pathname: "/admin/dashboard",
      });
    }
  }, [token]);

  return <div />;
}
