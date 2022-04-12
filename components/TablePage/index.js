import React from "react";
import { TableList } from "./componentTable/tableList";
import { CommonTable } from "./componentTable/CommonTable";

export const RenderPage = () => {
  const headerTable = [
    { id: "no", isSort: false, label: "No" },
    { id: "subject", isSort: false, label: "Subject" },
    { id: "author", isSort: false, label: "Author" },
    { id: "detail", isSort: false, label: "Detail" },
  ];

  const data = [
    {
      id: 43,
      subject: "An toàn lao động quý 1",
      author: "Nguyễn Văn An",
    },
    {
      id: 2,
      subject: "Giới thiệu phúc lợi công ty",
      author: "Nguyễn Văn An",
    },
    {
      id: 3,
      subject: "Quy trình phỏng vấn",
      author: "Nguyễn Văn An",
    },
    {
      id: 1,
      subject: "Chính sách bảo hiểm 2022",
      author: "Nguyễn Văn An",
    },
  ];
  
  return (
    <>
      <CommonTable headCells={headerTable}>
        {data.map((item, index) => (
          <TableList key={index} id={index} item={item} />
        ))}
      </CommonTable>
    </>
  );
};
