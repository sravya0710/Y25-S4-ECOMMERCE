import React from 'react'
const Card = ({ title, price, image }) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-200">
      <img src={image} className="w-full h-40 object-cover rounded" alt={title} />
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-blue-500 font-medium">${price}</p>
    </div>
  );
};