import React, { useState, useEffect } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewUser from '../src/components/NewUser/NewUser';
import UserList from '../src/components/UserList/UserList';
const DUMMY_USER = [];

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
    getData();
  };

  const getData = async () => {
    try {
      const response = await fetch(
        'https://dev-http-default-rtdb.firebaseio.com/user.json'
      );
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json();
      const dataArr = [];
      for (const key in data) {
        dataArr.push({
          id: data[key].email,
          email: data[key].email,
          userName: data[key].userName
        });
      }
      setUserList(dataArr);
    } catch (error) {}
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
      <button className="btn btn-primary" onClick={getData}>
        Get Data
      </button>
      <div className="card">
        <div className="card-header">User List</div>
        <div className="card-body">
          <UserList userList={userList} />
        </div>
      </div>
    </div>
  );
}
