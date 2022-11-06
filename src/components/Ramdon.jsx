import React from 'react'

function Ramdon() {
    const randomMinNumber = Math.floor(Math.random() * 6)
    const randomMaxNumber = Math.floor(Math.random() * 100)
    
  return (


    <div>

    <p>Random value between 1 and 100 =>{randomMinNumber}</p>
    <p>Random value between 1 and 100 =>{randomMaxNumber}</p>

    </div>
  )
}

export default Ramdon