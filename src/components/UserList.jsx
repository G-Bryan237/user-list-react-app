import UserCard from './UserCard';

function UserList({ users }) {
  if (!users.length) {
    return <div className="text-gray-500">No users found.</div>;
  }
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
