// src/components/UserCard.js

import React from 'react';

function UserCard({ user }) {
  return (
    <article>
      <h2>{user.name}</h2>
    </article>
  );
}

export default UserCard;
