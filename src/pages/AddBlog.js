import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Context } from '../context/Context';

const AddBlog = () => {
    const { register, handleSubmit } = useForm();
    const [photo, setPhoto] = useState(null)
    const { user } = useContext(Context)

    const handleImageUpload = e => {
        const imageData = new FormData();
        imageData.set('key', 'd17139582dad6f2a6f60bbc19e0dbd5e');
        imageData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => setPhoto(res.data.data.display_url))
            .catch(err => console.log(err))
    }

    const onSubmit = data => {
        if (photo !== null) {
            const email = user.email;
            const productData = { photo, ...data, email };

            fetch('http://localhost:5000/api/posts', {
                method: "POST",
                headers: { "Content-type": 'application/json' },
                body: JSON.stringify(productData)
            })
            .then(res => res.json())
            .then(data => console.log(data))
        }
    };

    return (
        <React.Fragment>
            <div className="w-full px-2 md:px-8">
                <h2 className="text-2xl font-bold text-center my-6">Publish Your Blog Here</h2>
                <form
                    className="px-2 md:px-10"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {photo && <img src={photo} alt="uploadedPhoto" className="w-full h-80 mt-8 mb-2 object-cover"/>}
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
                            className="w-full py-3 px-2 text-3xl ring-0 focus:outline-none border-0"
                        />
                    </div>
                    <textarea
                        type="text"
                        placeholder="Tell Your story"
                        name="description"
                        rows="12"
                        ref={register({ required: true })}
                        className="w-full py-3 px-8 ring-0 focus:outline-none border-0 text-md font-semibold tracking-wider"
                    ></textarea>
                    <button
                        className="btn mt-5 block mx-auto"
                    >
                        Publish
                    </button>
                </form>
            </div>
        </React.Fragment>
    );
};

export default AddBlog;