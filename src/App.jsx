import React from 'react'
import Home  from "./Components/Home";
import About from "./Components/About";
import Nav from "./Components/Nav";
const App = () => {
  // getting data from the api/servr/backend
  // primitive/non-reference/immutable (single value hold krta hai)
  let data = "Data ajao"
  let subject = ["Maths","English"]
  let profile = {
    name: "Megha lawana",
    age:25,
    email:"megha132@gmail.com"
  }
  return (
    <div>
     <h1>{data}</h1>
     <h1>{subject}</h1>
     <h1>{profile.name}</h1>
     <h1>{profile.age}</h1>
     <h1>{profile.email}</h1>
      <Home/>
      <About/>
      <Nav/>
    </div>
  )
}

export default App
