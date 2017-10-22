import React from 'react';
import UserTableItem from './user-table-item';


function UserTable({ users }) {
  const userItems = users.map((user) => {
    return <UserTableItem user={user} />
  });

  return (
    <table className="ui striped collapsing celled table">
      <thead>
        <tr>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {userItems}
      </tbody>
    </table>
  );
}

export default UserTable