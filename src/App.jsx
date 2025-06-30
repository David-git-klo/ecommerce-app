import { useState } from 'react';
import Layout from './components/Layout';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
      body: "This is First post",
      author: "Dave"
    },
    {
      id: 2, // Changed ID to 2 for the second post to be unique
      title: "Second Post",
      body: "This is Second post",
      author: "John"
    },
    {
      id: 3, // Added a post with ID 3
      title: "Third Post",
      body: "This is the amazing third post!",
      author: "Alice"
    }
  ]);

  // Function to find and set the post with ID 3
  const showPostWithId3 = () => {
    const postWithId3 = posts.find(post => post.id === 3);
    if (postWithId3) {
      setPosts([postWithId3]); // Set the posts array to only contain the post with ID 3
    }
  };

  return (
    <Layout>
      {posts.map((post) => {
        return <h1 key={post.id}>{post.title}</h1>
      })}
      <button onClick={showPostWithId3}>Show Post with ID 3</button>
    </Layout>
  );
}

export default App;