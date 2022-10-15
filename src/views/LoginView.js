import axios from 'axios';
import { useState } from 'react';

function LoginView({ setPage }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const baseURL = 'http://localhost:3000';

  const login = async e => {
    try {
      e.preventDefault();
      const { data } = await axios({
        method: 'post',
        url: `${baseURL}/login`,
        data: {
          email,
          password,
        },
      });

      localStorage.setItem('access_token', data.access_token);
      setPage('home');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container max-w-md p-3 m-auto my-auto mt-24 mb-20 bg-white border-2 border-gray-200 rounded-md">
      <div className="my-6 text-center">
        <h1 className="text-3xl font-semibold text-gray-700">Sign in</h1>
        <p className="text-gray-500">Sign in to access your account</p>
      </div>
      <div className="m-6">
        <form onSubmit={login} className="mb-4">
          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
            >
              Email Address
            </label>
            <input
              onChange={e => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
          </div>
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <label
                for="password"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                Password
              </label>
            </div>
            <input
              onChange={e => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full px-3 py-4 text-white duration-100 ease-in-out bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none"
            >
              Sign in
            </button>
          </div>
          <p className="text-sm text-center text-gray-400">
            Don&#x27;t have an account yet? .
          </p>
        </form>
        <div className="flex flex-row justify-center mb-8">
          <span className="absolute px-4 text-gray-400 bg-white">
            or sign in with
          </span>
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex justify-center w-full">
            <div id="customBtn"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginView;
