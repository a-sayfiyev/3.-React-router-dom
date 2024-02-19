import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div className="container p-4">
    <Link to="/dashboard" className='btn btn-primary'>Dashboard</Link>
      <h1 className="text-center display-3 fw-bolder">Welcome to my place!</h1>
      <p className="text-center">what are you looking for?</p>
    </div>
  );
}
