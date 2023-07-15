import React from 'react'
import "./Login.css";

const Login = () => {
  return (
    <div className='d-flex justify-content-center bg-danger-subtle align-items-center vh-100'>
        <div className='border border-3 border-dark p-4 bg-dark-subtle'>
            <form>
                <h2 className="text-center">Login</h2>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter your email" name="Email" className="form-control"></input>
                </div>
                <h2 className="text-center"></h2>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter your password" name="Password" className="form-control"></input>
                </div>
                <div className='mb-3'>
                    <input type='checkbox' className='custom-control-custom-checkbox me-1'></input>
                    <label htmlFor='checkbox'>Remember Me</label>
                </div>
                <div className='mb-3'>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
                <div className='m-3 d-grid'>
                <button className='btn btn-danger' type='submit'>
                    Login
                </button>
                </div>
                </form> 
        </div>
        <div>
        </div>
    </div>
  )
}

export default Login