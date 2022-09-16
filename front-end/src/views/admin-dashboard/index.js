import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

const Index = () => {

  const navigate = useNavigate();
  const user = (JSON.parse(localStorage.getItem('profile')));


  useEffect(() => {
    // if (!user.isAdmin) navigate('/404');
    if (!user?.user?.isAdmin){ 
      navigate('/404');
  } else {
    navigate('/admin-dashboard/users');
  }

  }, [navigate, user])

  return (
    <div>Admin Dashboard</div>
  )
}

export default Index