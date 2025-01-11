import React, { useEffect, useState } from 'react';
import client from './sanityClient';

const NewsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const query = `*[_type == "post"]{
        title,
        slug,
        author->name,
        mainImage,
        publishedAt,
        body
      }`;
            const data = await client.fetch(query);
            setPosts(data);
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h1>News</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.slug.current}>
                        <h2>{post.title}</h2>
                        <p>by {post.author}</p>
                        <img src={post.mainImage.asset.url} alt={post.title} />
                        <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
                        <div>{post.body[0]?.children[0]?.text}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsPage;
