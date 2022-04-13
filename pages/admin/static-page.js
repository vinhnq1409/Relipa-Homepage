import React from "react";
import { RenderPage } from "../../components/TablePage";
import Admin from "layouts/Admin.js";

export default function StaticPage() {
  return <RenderPage />;
}

StaticPage.layout = Admin;
