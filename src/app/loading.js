// components/Loading.js
import React from 'react';

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="loader ease-linear rounded-full border-t-8 border-gray-200 h-24 w-24 animate-spin"></div>
    </div>
  );
};

export default Loading;
