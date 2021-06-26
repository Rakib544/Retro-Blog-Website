import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { Context } from "../context/Context";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { dispatch } = useContext(Context);
    const [showSpinner, setShowSpinner] = useState(false)
    const [showError, setShowError] = useState(false)
    const history = useHistory();

    const onSubmit = async data => {
        setShowError(false)
        setShowSpinner(true)
        dispatch({ type: "LOGIN_START" });

        try {
            const res = await fetch('https://limitless-tundra-48536.herokuapp.com/api/auth/login', {
                method: 'POST',
                headers: { 'content-type': "application/json" },
                body: JSON.stringify(data)
            })
            const resData = await res.json();
            if(resData._id) {
                dispatch({ type: 'LOGIN_SUCCESS', payload: resData })
                setShowSpinner(false)
                setShowError(false)
                history.push('/')
            }else {
                setShowError(true)
                setShowSpinner(false)
            }

        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
            setShowError(true)
            setShowSpinner(false)
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full md:w-9/12 lg:w-1/2">
                <h2 className="text-2xl font-bold text-center pb-6">Login Here</h2>
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
                    <label htmlFor="password" className="text-md m-2 block">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        ref={register({ required: true })}
                        className="w-full rounded-full py-3 px-8 ring-0 focus:outline-none border border-gray-700"
                    />
                    <button
                        className="btn mt-5 block mx-auto">Log In</button>
                </form>
                <p className="mt-8 text-center">Don't have any account? <Link to="/register" className="underline">Register Here</Link></p>
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
                        showError ? 'Invalid email or password. Please try again with valid email and password' : ''
                    }
                </p>
            </div>
        </div>
    );
};

export default Login;