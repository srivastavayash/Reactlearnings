import React from 'react'

function Hero({ heroname }) {
  if (heroname === 'jokey') {
    throw new Error("System Fucked upp by Harley Quinn !")
  }
  return (
    <div><h1>{heroname}</h1></div>
  )
}

export default Hero