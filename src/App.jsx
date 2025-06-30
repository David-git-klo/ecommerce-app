
import Layout from './components/Layout'
import { useState, useEffect } from 'react';

function App() {
  //array destructuring
  let [name, setName] = useState("Dave");
  let handleClick = () => { setName("David") };
  let doSomething = () => alert("Hi");
  return (
   <Layout>
    <h1>Hello World</h1>
    <h1>{name}</h1>
    <button onClick={handleClick}>Change</button>
    <button onClick={doSomething}>Click</button>
   </Layout>
  )
}

export default App