import React, { useEffect, useState } from "react";
import { LinearProgress } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { TableList } from "./componentTable/tableList";
import { CommonTable } from "./componentTable/CommonTable";

export const RenderPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

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
    {
      id: 10,
      subject: "An toàn công nghệ thông tin",
      author: "Vũ Văn Vịnh",
    },
  ];

  return (
    <>
      {loading ? (
        <div>
          <LinearProgress />
          <Skeleton variant="text" height={80}/>
          {data.map((item, index) => (
          <Skeleton variant="text" height={40}/>
        ))}
        </div>
      ) : (
        <CommonTable headCells={headerTable}>
        {data.map((item, index) => (
          <TableList key={index} id={index} item={item} />
        ))}
      </CommonTable>
      )}
    </>
  );
};
