import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddAdmin = () => {
    const { register, handleSubmit } = useForm();
    const [showSpinner, setShowSpinner] = useState(false)
    const [showMessage, setShowMessage] = useState(false)

    const onSubmit = async data => {
        setShowSpinner(true)
        await fetch('https://limitless-tundra-48536.herokuapp.com/api/admin/addAdmin', {
            method: 'POST',
            headers: { 'content-type': "application/json" },
            body: JSON.stringify(data)
        })
        setShowSpinner(false)
        setShowMessage(true)
    };
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full md:w-9/12 lg:w-1/2">
                <h2 className="text-2xl font-bold text-center pb-6">Add Admin Here</h2>
                <form
                    className="px-2 md:px-10"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <label htmlFor="Email" className="text-md m-1 block text-gray-700">
                        Email
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        ref={register({ required: true })}
                        className="w-full rounded-full py-3 px-8 ring-0 focus:outline-none border border-gray-700"
                    />
                    <button
                        className="btn mt-5 block mx-auto"
                    >
                        Add Admin
                    </button>
                </form>
                <div>
                    {
                        showSpinner
                            ? <>
                                <img src="https://i.ibb.co/h2WBFxx/spinner.gif" alt="spinner" className="block mx-auto" />
                                <p className="text-center my-4">Please wait..</p>
                            </>
                            : ""
                    }
                </div>
                <p className="text-center my-4 text-green-700">
                    {
                        showMessage ? 'Successfully added as an Admin' : ''
                    }
                </p>
            </div>
        </div>
    );
};

export default AddAdmin;