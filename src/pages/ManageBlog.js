import React, { useEffect, useState } from 'react';
import SingleList from '../components/SingleList';

const ManageBlog = () => {
    const [posts, setPosts] = useState([])
    const [num, setNumber] = useState(0);

    useEffect(() => {
        fetch('https://limitless-tundra-48536.herokuapp.com/api/posts/')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [num])

    return (
        <>
            <h2>ALL Blogs</h2>
            <div className="grid grid-cols-4 bg-gray-100 px-8 my-10">
                <h2>Images</h2>
                <h2>Id</h2>
                <h2>Title</h2>
                <h2>Action</h2>
            </div>
            <div className="text-center">
                {
                    posts.map(post => <SingleList key={post._id} post={post} setNumber={setNumber} num={num} />)
                }
            </div>
        </>
    );
};

export default ManageBlog;