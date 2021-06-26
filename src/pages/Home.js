import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';

const Home = () => {
    const [posts, setPosts] = useState([])
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
    }, [setShowSpinner])

    return (
        <>
            {
                showSpinner
                    ? <Preloader />
                    : <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2 md:px-8 pt-48 pb-10 h-auto rounded">
                        {
                            posts?.map(post => <Card key={post._id} post={post} />)
                        }
                    </div>
            }
            <Footer />
        </>
    );
};

export default Home;