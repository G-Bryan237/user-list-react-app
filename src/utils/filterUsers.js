export function filterUsers(users, searchTerm) {
  if (!searchTerm) return users;
  return users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
