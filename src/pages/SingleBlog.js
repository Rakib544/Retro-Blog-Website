import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/api/posts/${id}`)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [id])
    
    return (
        <>
            This is single blog page
        </>
    );
};

export default SingleBlog;