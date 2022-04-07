
const headerTable = [
  { id: "no", isSort: false, label: 'No' },
  { id: "subject", isSort: false, label: 'Subject' },
  { id: "author", isSort: false, label: 'Author' },
  { id: "detail", isSort: false, label: 'Detail' },
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

export const dataJson = JSON.stringify(data)
export const headerJson = JSON.stringify(headerTable)