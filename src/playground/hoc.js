console.log('hoc')

import React from 'react'
import ReactDOM from 'react-dom'

const Info = ({ info }) => (
  <div>
    <h1>Info</h1>
    <p>The info is <b>{info}</b></p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>PRIVATE INFO</p>}
      <WrappedComponent {...props} />
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    props.isAuthenticated ? (
      <WrappedComponent {...props} />
    ) : (
      <p>Please sign in</p>
    )
  )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={true} info='you are a genius!' />, document.getElementById('root'))
