import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from './sanityClient';

const PostDetailPage = () => {
    const { slug } = useParams(); // Lấy slug từ URL
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            const query = `*[_type == "post" && slug.current == $slug][0]{
        title,
        slug,
        author->name,
        mainImage,
        publishedAt,
        body
      }`;
            const data = await client.fetch(query, { slug });
            setPost(data);
        };

        fetchPost();
    }, [slug]);

    if (!post) return <div>Loading...</div>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>by {post.author}</p>
            <img src={post.mainImage.asset.url} alt={post.title} />
            <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            <div>{post.body[0]?.children[0]?.text}</div>
        </div>
    );
};

export default PostDetailPage;
