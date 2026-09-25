import React from 'react'

const Child = (data) => {
    console.log(data)
  return (
    <div>
        <h1>Welcome to Child</h1>
        {data.userName}
    </div>
  )
}

export default Child