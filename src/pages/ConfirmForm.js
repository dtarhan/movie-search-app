import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState([]);
  

  useEffect(() => {
    localStorage.setItem('emailKey', JSON.stringify(email));
    localStorage.setItem('passwordKey', JSON.stringify(password));
  }, [email,password]);

  const handleSubmit = (event) => {
    event.preventDefault();

    //validation
    if (email === '' || password === '') {
      alert('Email and password should be required.');
      return;
    }
    if (password.length < 6) {
      alert('Password should be longer than 6 letters.');
      return;
    }

    //localStorage.setItem('user', 'mail:' + email + ' ' + 'pas:' + password);
    navigate('/');

    setEmail("");
    setPassword("");
  };


  const confirm = () => {
    if (password.length > 6) { navigate('/') }

  }
  return (
    <div>
      <div className="container my-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Adress
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Ex: dtarhan@gmail.com"
              autoFocus
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="password"
              placeholder="Ex: 123456"
              autoFocus
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className="d-flex justify-content-center my-5">
            <button
              type="submit"
              onClick={confirm}
              className="btn btn-primary w-20"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ConfirmForm;


/*const confirm = () => {
  if (!localStorage.getItem('user')) {
    navigate('/login');
  }
};*/