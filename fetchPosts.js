// src/fetchPosts.js
import client from './client'

const fetchPosts = async () => {
    const query = `*[_type == "post"]{
    title,
    slug,
    author->name,
    mainImage{
      asset->{
        _id,
        url
      }
    },
    categories[]->title,
    publishedAt,
    body
  }`

    try {
        const posts = await client.fetch(query)
        return posts
    } catch (error) {
        console.error('Error fetching posts:', error)
        return []
    }
}

export default fetchPosts
