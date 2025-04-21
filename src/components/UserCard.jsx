import { Link } from 'react-router-dom';

function UserCard({ user }) {
  return (
    <div className="user-card shadow p-4 rounded-lg bg-white">
      <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
      <div className="mb-1 text-gray-700">{user.email}</div>
      <div className="mb-3 text-gray-500">{user.phone}</div>
      <Link
        to={`/users/${user.id}`}
        className="text-indigo-600 hover:underline font-medium"
      >
        View Details
      </Link>
    </div>
  );
}

export default UserCard;
