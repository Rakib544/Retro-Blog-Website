import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ post }) => {
    return (
        <Link to={`/blog/${post._id}`} className="p-4 cursor-pointer block shadow-sm">
            <img src={post.photo} alt={post.name} className="h-52 w-full object-cover" />
            <p className="uppercase text-xs tracking-wider my-2 text-gray-400">{post?.date}</p>
            <h1 className="text-lg font-semibold text-gray-700 mb-2 truncate">{post.title}</h1>
            <p className="truncate text-sm my-3 text-gray-600">{post.description}</p>
            <button className="btn">Read More</button>
        </Link>
    );
};

export default Card;