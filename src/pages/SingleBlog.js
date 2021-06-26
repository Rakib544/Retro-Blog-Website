import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch(`https://limitless-tundra-48536.herokuapp.com/api/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])

    return (
        <div className="px-8">
            <h1 className="text-2xl font-semibold pb-8 pt-24 text-center text-gray-500">{post.title}</h1>
            {post.photo && <img src={post.photo} alt={post.title} className="w-full h-80 mt-8 mb-2 object-cover px-0 md:px-8" />}
            <p className="text-md font-light my-8">{post.description}</p>
        </div>
    );
};

export default SingleBlog;