// src/NewsPage.js
import React, { useEffect, useState } from 'react'
import fetchPosts from '../../fetchPosts'

const NewsPage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const data = await fetchPosts()
            setPosts(data)
        }

        getPosts()
    }, [])

    return (
        <div>
            <h1>News</h1>
            <div>
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post.slug.current}>
                            <h2>{post.title}</h2>
                            <p>By {post.author}</p>
                            <img src={post.mainImage.asset.url} alt={post.title} />
                            <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
                            <p>{post.body[0]?.children[0]?.text}</p> {/* Giả sử body là blockContent */}
                            <a href={`/post/${post.slug.current}`}>Read more</a>
                        </div>
                    ))
                ) : (
                    <p>Loading posts...</p>
                )}
            </div>
        </div>
    )
}

export default NewsPage
