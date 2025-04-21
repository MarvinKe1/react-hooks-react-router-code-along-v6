// src/pages/Home.js

import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';  // Import Navbar component

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Failed to fetch users:", err));
  }, []);

  return (
    <div>
      <Navbar />  {/* Add Navbar component here */}

      <h1>All Users</h1>
      <Link to="/add">Add User</Link>
      <div>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Home;

