import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Context } from "../context/Context";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { dispatch, isFetching } = useContext(Context);

    const onSubmit = data => {
        dispatch({ type: "LOGIN_START" });
        try {
            fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'content-type': "application/json" },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    dispatch({ type: "LOGIN_SUCCESS", payload: data });
                })
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };
    return (
        <React.Fragment>
            <div className="w-full md:w-9/12 lg:w-1/2 mx-auto">
                <h2 className="text-2xl font-bold text-center my-6">Login Here</h2>
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
                        className="btn mt-5 block mx-auto"
                    >
                        {isFetching
                            ? <div className="flex bg-gray-300">
                                <svg className="animate-spin" viewBox="0 0 50 50">
                                    <circle cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                                </svg>
                                Login
                            </div>
                            : "Login"
                        }
                    </button>
                </form>
            </div>
        </React.Fragment>
    );
};

export default Login;