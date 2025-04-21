import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import SearchBar from './components/SearchBar';
import useFetch from './hooks/useFetch';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorDisplay from './components/ErrorDisplay';
import { filterUsers } from './utils/filterUsers';
import UserDetails from './components/UserDetails';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: users, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  const handleSearch = (value) => setSearchTerm(value);
  const filteredUsers = filterUsers(users, searchTerm);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-indigo-600 shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-white">User Directory</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar onSearch={handleSearch} />
                {loading ? (
                  <LoadingSpinner />
                ) : error ? (
                  <ErrorDisplay message={error} />
                ) : (
                  <UserList users={filteredUsers} />
                )}
              </>
            }
          />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </main>
      
    </div>
  );
}

export default App;