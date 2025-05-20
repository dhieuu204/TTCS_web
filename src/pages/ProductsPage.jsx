import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: "Gucci duffle bag",
      price: 960,
      originalPrice: 1160,
      discount: 35,
      image: "/images/products/gucci-bag.png",
    },
    {
      id: 2,
      name: "RGB liquid CPU Cooler",
      price: 1560,
      image: "/images/products/cpu-cooler.png",
    },
    {
      id: 3,
      name: "GP11 Shooter USB Gamepad",
      price: 550,
      image: "/images/products/gamepad.png",
    },
    {
      id: 4,
      name: "Quilted Satin Jacket",
      price: 750,
      image: "/images/products/jacket.png",
    },
  ];

  const handleAddToCart = (id) => {
    // TODO: Implement real add to cart
    console.log("Add to cart:", id);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-medium mb-8">All Products</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div key={item.id} className="bg-[#F5F5F5] p-4 relative group">
              {item.discount && (
                <span className="absolute top-4 left-4 bg-[#DB4444] text-white px-3 py-1 text-sm">
                  -{item.discount}%
                </span>
              )}

              <div className="aspect-square mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-2">
                <h3 className="font-medium text-lg">{item.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-[#DB4444] font-medium">
                    ${item.price}
                  </span>
                  {item.originalPrice && (
                    <span className="text-gray-500 line-through">
                      ${item.originalPrice}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => handleAddToCart(item.id)}
                  className="w-full bg-black text-white py-2 hover:bg-gray-800 transition-colors"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductsPage;
