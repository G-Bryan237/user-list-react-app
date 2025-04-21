import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import LoadingSpinner from './LoadingSpinner';
import ErrorDisplay from './ErrorDisplay';

function UserDetails() {
  const { id } = useParams();
  const { data: user, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorDisplay message={error} />;
  if (!user || !user.id) return <div>User not found.</div>;

  return (
    <div className="user-details-card max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
      <div className="mb-1"><span className="font-semibold">Email:</span> {user.email}</div>
      <div className="mb-1"><span className="font-semibold">Phone:</span> {user.phone}</div>
      <div className="mb-1"><span className="font-semibold">Username:</span> {user.username}</div>
      <div className="mb-1"><span className="font-semibold">Website:</span> {user.website}</div>
      <div className="mb-1">
        <span className="font-semibold">Address:</span>
        <div className="ml-2 text-gray-700">
          {user.address.street}, {user.address.suite},<br />
          {user.address.city}, {user.address.zipcode}
        </div>
      </div>
      <div className="mb-3">
        <span className="font-semibold">Company:</span>
        <div className="ml-2 text-gray-700">
          {user.company.name}<br />
          <span className="text-sm">{user.company.catchPhrase}</span>
        </div>
      </div>
      <Link to="/" className="text-indigo-600 hover:underline">← Back to list</Link>
    </div>
  );
}

export default UserDetails;
