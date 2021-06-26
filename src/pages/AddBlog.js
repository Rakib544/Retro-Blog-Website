import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Context } from '../context/Context';

const AddBlog = () => {
    const { register, handleSubmit } = useForm();
    const [photo, setPhoto] = useState(null)
    const { user } = useContext(Context)
    const history = useHistory();
    const [showSpinner, setShowSpinner] = useState(false)

    const handleImageUpload = async e => {
        setShowSpinner(true)
        const imageData = new FormData();
        imageData.set('key', 'd17139582dad6f2a6f60bbc19e0dbd5e');
        imageData.append('image', e.target.files[0]);

        await axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                setPhoto(res.data.data.display_url)
                setShowSpinner(false)
            })
            .catch(err => console.log(err))
    }

    const onSubmit = data => {
        if (photo) {
            const email = user.email;
            const date = new Date().toDateString();
            const productData = { photo, ...data, email, date };

            fetch('https://limitless-tundra-48536.herokuapp.com/api/posts', {
                method: "POST",
                headers: { "Content-type": 'application/json' },
                body: JSON.stringify(productData)
            })
                .then(res => res.json())
                .then(data => history.push('/'))
        }
    };

    return (
        <div className="w-full px-2 md:px-8">
            <form
                className="px-2 md:px-10 pt-24"
                onSubmit={handleSubmit(onSubmit)}
            >
                <button
                    className="btn my-5 block ml-auto"
                >
                    Publish
                </button>
                {showSpinner
                    ? <div>
                        <img src="https://i.ibb.co/h2WBFxx/spinner.gif" alt="spinner" className="block mx-auto" /> <p className="text-center mb-4">Image Uploading...</p>
                    </div>
                    : photo && <img src={photo} alt="uploadedPhoto" className="w-full h-80 mt-8 mb-2 object-cover px-0 md:px-8" />
                }
                <div className="flex items-center">
                    <label htmlFor="fileInput" className="p-2 rounded-full border-2 cursor-pointer border-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </label>
                    <input
                        accept="image/*"
                        id="fileInput"
                        multiple
                        type="file"
                        className="hidden"
                        onChange={handleImageUpload}
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        ref={register({ required: true })}
                        className="w-full py-3 px-2 text-3xl ring-0 focus:outline-none border-0 mb-4 bg-info"
                    />
                </div>
                <textarea
                    type="text"
                    placeholder="Tell Your story"
                    name="description"
                    rows="12"
                    ref={register({ required: true })}
                    className="w-full bg-info py-3 px-8 ring-0 focus:outline-none border-0 text-md font-semibold tracking-wider"
                ></textarea>
            </form>
        </div>
    );
};

export default AddBlog;