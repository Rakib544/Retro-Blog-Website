import React, { useEffect, useState } from 'react';

const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/posts/')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    return (
        <div>
            This is home page
        </div>
    );
};

export default Home;