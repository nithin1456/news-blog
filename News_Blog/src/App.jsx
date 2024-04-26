import Nav from "./components/Nav"
import Body from "./components/Body"
import { useState } from "react"

function App() {


  const [category,setCategory] = useState("general");
 

  return (
    <>
    <Nav setCategory={setCategory}></Nav>
    <Body category ={category}></Body>
      
    </>
  )
}

export default App
