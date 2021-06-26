import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const [showSpinner, setShowSpinner] = useState(false)
    const [showError, setShowError] = useState(false)

    const onSubmit = async data => {
        setShowError(false)
        setShowSpinner(true)
        const res = await fetch('https://limitless-tundra-48536.herokuapp.com/api/auth/register', {
            method: 'POST',
            headers: { 'content-type': "application/json" },
            body: JSON.stringify(data)
        })
        const resData = await res.json();
        setShowSpinner(false)
        if (resData._id) {
            history.push('/login')
        } else {
            setShowError(true)
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full md:w-9/12 lg:w-1/2">
                <h2 className="text-2xl font-bold text-center pb-6">Register Here</h2>
                <form
                    className="px-2 md:px-10"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <label htmlFor="Name" className="text-md m-1 block text-gray-700">
                        Enter Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        name="username"
                        ref={register({ required: true })}
                        className="w-full rounded-full py-3 px-8 ring-0 focus:outline-none border border-gray-700"
                    />
                    <label htmlFor="Email" className="text-md m-1 block text-gray-700">
                        Enter Email
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        ref={register({ required: true })}
                        className="w-full rounded-full py-3 px-8 ring-0 focus:outline-none border border-gray-700"
                    />
                    <label htmlFor="password" className="text-md m-2 block">
                        Enter Password
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        ref={register({ required: true })}
                        className="w-full rounded-full py-3 px-8 ring-0 focus:outline-none border border-gray-700"
                    />
                    <button
                        className="btn mt-5 block mx-auto"
                    >
                        Register
                    </button>
                </form>
                <p className="mt-8 text-center">Already have an account? <Link to="/login" className="underline">Login Here</Link></p>
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
                <p className="text-center my-4 text-red-700">
                    {
                        showError ? 'This email is taken by another user. Please try with another email' : ''
                    }
                </p>
            </div>
        </div>
    );
};

export default Register;