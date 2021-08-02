import React, { useState } from 'react';

const NewUser = props => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');

  const emailChangeHandler = event => {
    setEmail(event.target.value);
  };

  const userNameChangeHandler = event => {
    setUserName(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    console.log(email, userName);
    const data = {
      email: email,
      userName: userName
    };
    props.onSubmitFormData(data);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={emailChangeHandler}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">User Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Name"
            value={userName}
            onChange={userNameChangeHandler}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewUser;
