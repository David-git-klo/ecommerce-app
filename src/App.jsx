
import { useState } from 'react';
import Layout from './components/Layout'

function App() {
  let [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
      body: "This is First post",
      author: "Dave"
    },
    {
      id: 1,
      title: "Second Post",
      body: "This is Second post",
      author: "John"
    }
  ]);
  return (
    <Layout>
{posts.map((post) => {
  return <h1 key={post.id}>{post.title}</h1>
})}
{/* <button onClick={() => setPosts([post])}>Click </button> */}
    </Layout>
  )
}

export default App