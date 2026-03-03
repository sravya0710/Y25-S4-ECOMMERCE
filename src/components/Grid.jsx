
import React from 'react'
const Grid = () => {
  const products = [
    { id: 1, title: "Product A", price: 20, img: "https://picsum.photos/200" },
    { id: 2, title: "Product B", price: 35, img: "https://picsum.photos/201" },
    { id: 3, title: "Product C", price: 50, img: "https://picsum.photos/202" },
    { id: 4, title: "Product D", price: 15, img: "https://picsum.photos/203" },
  ];

  return (
    <div className="p-10">
      {/* 1 column on mobile, 2 on tablet (md), 4 on desktop (lg) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <Card key={item.id} title={item.title} price={item.price} image={item.img} />
        ))}
      </div>
    </div>
  );
};