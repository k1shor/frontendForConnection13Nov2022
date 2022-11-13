import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{return response.json()})
        // .then(result => console.log(result))
        .then(result => setPosts(result))
    },[])

  return (
    <>
        {
            posts.map(post=>{
                return <div className='card m-5 p-3' key={post.id}>
                <h2 className='card-title'>{post.id}. {post.title}</h2>
                <h4 className='card-text'>{post.body}</h4>
                </div>
            })
        }
    </>
  )
}

export default FetchData

// JSON - Javascript Object Notation
// { "key": "value", "key2":"value2"}