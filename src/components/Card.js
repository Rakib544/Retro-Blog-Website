import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ post }) => {
    return (
        <Link to={`/blog/${post._id}`} className="p-2 cursor-pointer block">
            <img src={post.photo} alt={post.name} className="h-52 w-full"/>
            <p className="uppercase text-sm tracking-wider my-2 text-gray-400">26 February</p>
            <h1 className="text-2xl font-bold text-gray-700 mb-2">{post.title}</h1>
            <p className="truncate my-3 text-gray-600">{post.description}</p>
            <button className="btn">Read More</button>
        </Link>
    );
};

export default Card;