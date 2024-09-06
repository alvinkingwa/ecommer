/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <img className="h-48 w-full object-cover object-center" src={product.imageUrl} alt={product.name} />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{product.name}</h2>
        <p className="mb-2 text-base dark:text-gray-300 text-gray-700">{product.description}</p>
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">${product.price.toFixed(2)}</p>
          <p className="text-base font-medium text-gray-500 line-through dark:text-gray-300">${product.originalPrice.toFixed(2)}</p>
          <p className="ml-auto text-base font-medium text-green-500">{product.discount}% off</p>
        </div>
      </div>
    </div>
  );
};

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const Phones = () => {
  const phoneProducts = [
    {
      id: 1,
      name: 'iPhone 13',
      description: 'The latest iPhone model with advanced features.',
      price: 799,
      originalPrice: 899,
      discount: 10,
      imageUrl: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S21',
      description: "Samsung's flagship phone with cutting-edge technology.",
      price: 699,
      originalPrice: 799,
      discount: 15,
      imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 3,
      name: 'Google Pixel 6',
      description: "Google's premium phone with an exceptional camera.",
      price: 599,
      originalPrice: 699,
      discount: 20,
      imageUrl: 'https://images.unsplash.com/photo-1613836255019-a7b845804788?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 4,
      name: 'OnePlus 9 Pro',
      description: 'A flagship phone with top-of-the-line specifications.',
      price: 799,
      originalPrice: 899,
      discount: 12,
      imageUrl: 'https://images.unsplash.com/photo-1628483368859-49fe1b435414?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
      id: 5,
      name: 'Xiaomi Mi 11',
      description: 'A powerful and affordable flagship phone with impressive camera capabilities.',
      price: 649,
      originalPrice: 749,
      discount: 13,
      imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 6,
      name: 'iPhone 12',
      description: 'A powerful iPhone with 5G capabilities and a stunning display.',
      price: 699,
      originalPrice: 799,
      discount: 12,
      imageUrl: 'https://images.unsplash.com/photo-1607936854279-55e8a4c64888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4 md:px-0">
      <h1 className="text-3xl font-bold mb-8">Phones</h1>
      <ProductList products={phoneProducts} />
    </div>
  );
};

export default Phones;