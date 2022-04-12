const tableHead = ['ID', 'Name', 'Role', 'Area', 'Status', 'Like', 'Action']
const data = [
  { id: 322, name: 'Phạm Tất Thành', role: 'Nam', area: 'Div2', status: 'active', like: 686868 },
  { id: 141, name: 'Vũ Thanh Tùng', role: 'Nam', area: 'Div1', status: 'active', like: 6662 },
  { id: 262, name: 'Ngô Văn Ba', role: 'Nam', area: 'Div2', status: 'active', like: 6661 }
]

export const dataUJson = JSON.stringify(data)
export const headerUJson = JSON.stringify(tableHead)
