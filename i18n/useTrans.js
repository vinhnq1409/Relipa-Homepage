import { useRouter } from "next/router";

import en from "./locales/en/translation";
import vi from "./locales/vi/translation";

// the translations

const useTrans = () => {
  const { locale } = useRouter();

  const trans = locale === "vi" ? vi : en;

  return trans;
};
export default useTrans;
