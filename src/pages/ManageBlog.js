import React, { useEffect, useState } from 'react';
import SingleList from '../components/SingleList';
import Preloader from '../components/Preloader';

const ManageBlog = () => {
    const [posts, setPosts] = useState([])
    const [num, setNumber] = useState(0);
    const [showSpinner, setShowSpinner] = useState(false)

    useEffect(() => {
        setShowSpinner(true)
        const loadData = async () => {
            const res = await fetch('https://limitless-tundra-48536.herokuapp.com/api/posts/')
            const data = await res.json();
            setPosts(data)
            setShowSpinner(false)
        }
        loadData();
    }, [num])

    return (
        <>
            {
                showSpinner
                    ? <Preloader />
                    : <>
                        <h2 className="pt-24 text-center text-md font-semibold">Manage Blogs Here</h2>
                        <div className="grid grid-cols-4 bg-gray-100 px-8 py-8 my-8 text-center">
                            <h2>Images</h2>
                            <h2>Id</h2>
                            <h2>Title</h2>
                            <h2>Action</h2>
                        </div>
                        <div className="text-center">
                            {
                                posts?.map(post => <SingleList key={post._id} post={post} setNumber={setNumber} num={num} />)
                            }
                        </div>
                    </>
            }
        </>
    );
};

export default ManageBlog;