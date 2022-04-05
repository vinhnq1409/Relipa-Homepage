import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "../utils/storage/index";

export default function Index() {
  const router = useRouter();
  const authorized = getCookie("access_token");

  useEffect(() => {
    if (!authorized) {
      router.push({
        pathname: "/admin/signin",
      });
    } else {
      router.push({
        pathname: "/admin/dashboard",
      });
    }
  }, [authorized]);

  return <div />;
}
