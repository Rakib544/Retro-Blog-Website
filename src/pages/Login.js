import React from 'react';

const Login = () => {
    return (
        <React.Fragment>
            <div className="w-full md:w-9/12 lg:w-1/2 mx-auto">
                <h2 className="text-2xl font-bold text-center my-6">Login Here</h2>
                <form className="px-2 md:px-10">
                    <label htmlFor="Email" className="text-lg m-1 block text-gray-700">
                        Email
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        className="w-full rounded-full py-3 px-8 ring-0 focus:outline-none border border-gray-700"
                    />
                    <label htmlFor="password" className="text-lg m-2 block">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        className="w-full rounded-full py-3 px-8 ring-0 focus:outline-none border border-gray-700"
                    />
                    <button
                        className="btn duration-300 bg-white hover:text-white hover:bg-primary border-2 border-primary mt-5 block mx-auto"
                    >
                        Log in
                    </button>
                </form>
            </div>
        </React.Fragment>
    );
};

export default Login;