import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children,clique}) => {
    
  return (
    <div>
      {clique==true? children:<Navigate to="/Home" />}
    </div>
  )
}

export default PrivateRoute