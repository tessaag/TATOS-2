import React from 'react';
import Link from 'next/link';

export default function Home() {
  return ( 
    <div className="bg-red-400 min-h-screen flex justify-center items-center">
      <div className="bg-white bg-opacity-50 p-8 rounded-md">
        <h1 className="text-2xl text-center font-bold mb-4">Login</h1>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-lg font-semibold mb-2">Username</label>
            <input type="text" id="username" name="username" className="border border-gray-300 px-3 py-2 rounded-md" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg font-semibold mb-2">Password</label>
            <input type="password" id="password" name="password" className="border border-gray-300 px-3 py-2 rounded-md" />
          </div>
          <div className="flex justify-center">
            <Link href="/fetch" legacyBehavior>
              <a className="bg-blue-500 text-white px-4 py-2 rounded-md">Login</a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
