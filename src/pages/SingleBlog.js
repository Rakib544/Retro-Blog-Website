import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/api/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])

    return (
        <div className="px-8">
            <h1 className="text-4xl font-bold my-8 text-center text-gray-500">{post.title}</h1>
            {post.photo && <img src={post.photo} alt={post.title} className="w-full h-80 mt-8 mb-2 object-cover" />}
            <p className="text-lg font-semibold my-8">{post.description}</p>
        </div>
    );
};

export default SingleBlog;