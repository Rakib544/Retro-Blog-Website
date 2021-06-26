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
                        <h2 className="pt-28 text-center text-md font-semibold">Manage Blogs Here</h2>
                        <div className="grid grid-cols-5 gap-4 bg-gray-100 px-8 py-8 my-4 px-2 md:px-8">
                            <h2>Images</h2>
                            <h2 className="text-center">Id</h2>
                            <h2 className="text-center">Title</h2>
                            <h2 className="text-center">Posted At</h2>
                            <h2>Action</h2>
                        </div>
                        <div className="text-center px-2 md:px-8">
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