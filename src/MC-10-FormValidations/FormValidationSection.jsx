import { useState } from 'react';

export const FormValidationSection = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  function onChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
  }

  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          minLength="3"
          required
          onChange={(e) => onChange(e)}
          value={data.name}
          name="name"
          placeholder="Enter Name"
          className="border border-gray-300 text-gray-700 focus:ring-2 focus:ring-[#0000FF] rounded-md transition duration-300 outline-none  px-2 py-3 "
          type="text"
        />
        <input
          onChange={(e) => onChange(e)}
          required
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          value={data.email}
          name="email"
          placeholder="Enter Email"
          className="mt-5 border border-gray-300 text-gray-700 focus:ring-2 focus:ring-[#0000FF] rounded-md transition duration-300 outline-none  px-2 py-3 "
          type="email"
        />
        <input
          onChange={(e) => onChange(e)}
          value={data.password}
          name="password"
          placeholder="Enter Password"
          className="mt-5 border border-gray-300 text-gray-700 focus:ring-2 focus:ring-[#0000FF] rounded-md transition duration-300 outline-none  px-2 py-3 "
          type="password"
        />
        <input
          onChange={(e) => onChange(e)}
          value={data.confirmPassword}
          name="confirmPassword"
          placeholder="Confirm Password"
          className="mt-5 border border-gray-300 text-gray-700 focus:ring-2 focus:ring-[#0000FF] rounded-md transition duration-300 outline-none  px-2 py-3 "
          type="password"
        />
        <div>
          <button
            type="submit"
            className="mt-5 px-2 py-3 bg-[#0000FF] text-[#fff] rounded-xl"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
