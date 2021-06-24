import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/posts/')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            {
                posts?.map(post => <Link to={`/blog/${post._id}`} key={post._id} className="block">{post.title}</Link>)
            }
        </div>
    );
};

export default Home;