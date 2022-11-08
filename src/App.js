import React from "react";
import Greet from './Components/Greet'

const App = () => {
  return (
    <>
    <h1>Hello World</h1>
    <Greet name="Aakash"/>
    <Greet>
      <p>I study in DTU</p>
    </Greet>
    </>
  )
}

export default App