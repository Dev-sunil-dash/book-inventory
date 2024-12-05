import React, { useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext'
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>Dashboard Page</h2>
      {
        user && <p>Welcome, {user.username}!</p>
      }
      <Link to={"/"}>Go to Homepage.</Link>
    </div>
  )
}

export default Dashboard