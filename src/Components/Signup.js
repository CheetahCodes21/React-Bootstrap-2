import React from 'react';
import './Signup.js';

const Signup = () => {
  return (
    <div className='d-flex justify-content-center bg-primary-subtle align-items-center vh-100'>
      <div className='border border-3 border-dark p-4 bg-dark-subtle'>
        <form>
          <h2 className="text-center">Sign Up</h2>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email" name="email" className="form-control" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter your password" name="password" className="form-control" />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" placeholder="Confirm your password" name="confirmPassword" className="form-control" />
          </div>
          <div className='m-3 d-grid'>
            <button className='btn btn-primary' type='submit'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
