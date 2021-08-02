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
  const userFormSubmitHandler = async data => {
    const saveData = fetch(
      'https://dev-http-default-rtdb.firebaseio.com/user.json',
      {
        method: 'POST',
        body: JSON.stringify(data),
        'Content-Type': 'application/json'
      }
    );

    setUserList(prevUserList => {
      return [data, ...prevUserList];
    });
  };
  return (
    <div>
      <div className="card">
        <div className="card-header">New User</div>
        <div className="card-body">
          <NewUser onSubmitFormData={userFormSubmitHandler} />
        </div>
      </div>
      <br />
      <div className="card">
        <div className="card-header">User List</div>
        <div className="card-body">
          <UserList userList={userList} />
        </div>
      </div>
    </div>
  );
}
