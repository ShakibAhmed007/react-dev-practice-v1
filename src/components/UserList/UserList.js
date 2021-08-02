import React from 'react';

const UserList = props => {
  const data = props.userList.map(user => {
    return (
      <div className="card">
        <div class="card-body">
          <div>{user.email}</div>
          <div>{user.userName}</div>
        </div>
      </div>
    );
  });

  return data;
};

export default UserList;
