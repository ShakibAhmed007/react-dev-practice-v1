import React, { useState } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewUser from '../src/components/NewUser/NewUser';
import UserList from '../src/components/UserList/UserList';
const DUMMY_USER = [
  {
    email: 's@gmail.com',
    userName: 'Shakib'
  }
];

export default function App() {
  const [userList, setUserList] = useState(DUMMY_USER);
  const userFormSubmitHandler = data => {
    setUserList(prevUserList => {
      return [data, ...prevUserList];
    });
  };
  return (
    <div>
      <div className="card">
        <div class="card-header">New User</div>
        <div class="card-body">
          <NewUser onSubmitFormData={userFormSubmitHandler} />
        </div>
      </div>
      <br />
      <div className="card">
        <div class="card-header">User List</div>
        <div class="card-body">
          <UserList userList={userList} />
        </div>
      </div>
    </div>
  );
}
