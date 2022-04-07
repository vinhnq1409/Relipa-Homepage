const headerTable = [
  { id: 'no', isSort: false, label: 'No' },
  { id: 'subject', isSort: false, label: 'Subject' },
  { id: 'author', isSort: false, label: 'Author' },
  { id: 'detail', isSort: false, label: 'Detail' }
]

const data = [
  {
    id: 43,
    subject: 'An toàn lao động quý 1',
    author: 'Nguyễn Văn An',
    slug: 'about1'
  },
  {
    id: 2,
    subject: 'Giới thiệu phúc lợi công ty',
    author: 'Nguyễn Văn An',
    slug: 'about2'
  },
  {
    id: 3,
    subject: 'Quy trình phỏng vấn',
    author: 'Nguyễn Văn An',
    slug: 'about3'
  },
  {
    id: 1,
    subject: 'Chính sách bảo hiểm 2022',
    author: 'Nguyễn Văn An',
    slug: 'about4'
  },
  {
    id: 10,
    subject: 'An toàn công nghệ thông tin',
    author: 'Vũ Văn Vịnh',
    slug: 'about5'
  },
  {
    id: 100,
    subject: 'An toàn công nghệ thông tin 1',
    author: 'Vũ Văn Vịnh',
    slug: 'about6'
  },
  {
    id: 102,
    subject: 'An toàn công nghệ thông tin 2',
    author: 'Vũ Văn Vịnh',
    slug: 'about7'
  },
  {
    id: 103,
    subject: 'An toàn công nghệ thông tin 3',
    author: 'Vũ Văn Vịnh',
    slug: '10'
  }
]

export const dataJson = JSON.stringify(data)
export const headerJson = JSON.stringify(headerTable)
