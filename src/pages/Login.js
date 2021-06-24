import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, error } = useForm();
    
    const onSubmit = data => {
        fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers:{'content-type':"application/json"},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => console.log(data))
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
                        ref={register({required: true})}
                        className="w-full rounded-full py-3 px-8 ring-0 focus:outline-none border border-gray-700"
                    />
                    <label htmlFor="password" className="text-md m-2 block">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        ref={register({required: true})}
                        className="w-full rounded-full py-3 px-8 ring-0 focus:outline-none border border-gray-700"
                    />
                    <button
                        className="btn mt-5 block mx-auto"
                    >
                        Log in
                    </button>
                </form>
            </div>
        </React.Fragment>
    );
};

export default Login;