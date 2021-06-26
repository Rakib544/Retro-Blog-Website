import React from 'react';

const SingleList = ({ post, setNumber, num }) => {

    const handleDelete = () => {
        fetch(`https://limitless-tundra-48536.herokuapp.com/api/posts/${post._id}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => setNumber(num + 1))
    }
    return (
        <div className="grid grid-cols-5 gap-4 my-4 cursor-pointer items-center shadow-sm">
            <img src={post.photo} alt={post.title} className="h-20 w-24" />
            <h2>{post._id}</h2>
            <h2>{post.title}</h2>
            <h2>{post?.date}</h2>
            <h2 onClick={handleDelete} className="text-right">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </h2>
        </div>
    );
};

export default SingleList;