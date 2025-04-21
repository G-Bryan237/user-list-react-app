import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mb-6 flex justify-center">
      <input
        type="text"
        className="w-full max-w-md"
        placeholder="Search users by name..."
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
