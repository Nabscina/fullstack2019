import React from 'react'
import PropTypes from 'prop-types'


const LoginForm = ({
  handleLogin, handleUserChange, handlePassChange, username, password }) => {
  return (
    <div>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div>
          username
          <input
            type="text"
            value={username}
            name="Username"
            onChange={handleUserChange}
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            name="Password"
            onChange={handlePassChange}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  handleUserChange: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  handlePassChange: PropTypes.func.isRequired
}

export default LoginForm