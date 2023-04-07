import React from 'react'
 import { useRouteError } from 'react-router-dom'
function ERROR() {
  const error = useRouteError()
  return (
    <div>
       <h1>uh oh! we've got a problem</h1>
       <p>{error.message || error.statusText}</p>
    </div>
  )
}

export default ERROR