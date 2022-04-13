export const fiterRoleUser = (roles) => {
  if (roles) {
    const minId = roles.reduce((acc, role) => (role.id < acc ? role : acc), roles[0].id)
    const roleUser = roles.find((role) => role.id === minId)
    return roleUser?.title
  }
}
