import React from 'react';
import Link from 'next/link';

export default async function Fetching() {
  const res = await fetch('https://api.escuelajs.co/api/v1/products');
  const products = await res.json();
  
  const productsToShow = products.slice(0, 43);

  return (
    
  <div className="bg-cover relative" style={{ backgroundImage: `url('/shopping.jpg')`, backgroundSize: 'auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'top center', minHeight: '100vh' }}>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div className="absolute top-0 left-0 p-4 text-4xl text-red-400 font-bold">TessA</div>
      <div className="absolute top-0 right-0 p-4">
        <Link href="/" legacyBehavior>
          <a className="text-blue-500">Logout</a>
        </Link>
      </div>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-white mb-4">Product List</h1>
        <ul className="grid grid-cols-3 gap-4">
          {productsToShow.map((product) => (
            <li key={product.id} className="border border-gray-200 p-4 rounded-md mb-4 bg-white bg-opacity-80">
              <img src={product.images[0]} alt={product.title} className="w-32 h-auto mb-4" />
              <div>
                <h2 className="text-xl font-semibold">{product.title}</h2>
                <p className="text-gray-600">{product.name}</p>
                <p className="text-gray-700 mb-2">{product.description}</p>
                <p className="text-gray-700 mb-2">${product.price}</p>
                <div className="flex items-center">
                  <input type="number" min="1" defaultValue="1" className="border border-gray-300 px-2 py-1 rounded-md mr-2 w-16" />
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Buy Now</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
