import React from 'react'

const Error = ({ children }) => {
  console.log(children)
  return <h3 style={{ color: 'red' }}>{children}</h3>
}

export default Error
