import React, { useState } from 'react';

const predefinedUserData = [
  
    {
        id: 1,
        name: "ABC",
        email: "abc@gmail.com",
        password: "12"
    },
    {
        id: 2,
        name: "DEF",
        email: "def@gmail.com",
        password: "1234"
    },
    {
        id: 3,
        name: "GHI",
        email: "ghi@gmail.com",
        password: "123456"
    }

  ]

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userError, setUserError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setUserError('');
    setPasswordError('');

    setTimeout(() => {
      if (email !== predefinedUserData.email) {
        setUserError('User not found');
      } else if (password !== predefinedUserData.password) {
        setPasswordError('Password Incorrect');
      } else {
        alert('Login successful!');
        setEmail('');
        setPassword('');
      }
    }, 3000);
  };

  const clearErrors = () => {
    setUserError('');
    setPasswordError('');
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            id="input-email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              clearErrors();
            }}
          />
          {userError && <div id="user-error" style={{ color: 'red' }}>{userError}</div>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            id="input-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              clearErrors();
            }}
          />
          {passwordError && <div id="password-error" style={{ color: 'red' }}>{passwordError}</div>}
        </div>
        <button type="submit" id="submit-form-btn">Submit</button>
      </form>
    </div>
  );
}

export default Login;
