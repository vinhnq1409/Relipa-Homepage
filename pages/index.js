import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

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
