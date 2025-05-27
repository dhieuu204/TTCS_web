import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = "http://localhost:3000/api/products";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error("Lấy dữ liệu sản phẩm thất bại");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (id) => {
    console.log("Add to cart:", id);
    // TODO: Xử lý thêm sản phẩm vào giỏ hàng
  };

  const handleAddToWishlist = (id) => {
    console.log("Add to wishlist:", id);
    // TODO: Xử lý thêm sản phẩm vào wishlist
  };

  if (loading)
    return <div className="text-center py-10">Đang tải sản phẩm...</div>;
  if (error)
    return <div className="text-center text-red-500 py-10">Lỗi: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-medium">Products</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="relative bg-white rounded-md shadow-md p-4 flex flex-col"
          >
            {/* Nút trái tim wishlist */}
            <button
              onClick={() => handleAddToWishlist(item.id)}
              className="absolute top-3 right-3 p-2 rounded-full bg-white shadow hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
              aria-label="Add to wishlist"
            >
              <FaHeart />
            </button>

            {/* Ảnh sản phẩm */}
            <div className="aspect-square mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Tên sản phẩm là Link */}
            <h3 className="text-lg font-semibold mb-2 truncate">
              <Link
                to={`/products/${item.id}`}
                className="hover:text-red-600 cursor-pointer"
              >
                {item.name}
              </Link>
            </h3>

            {/* Giá sản phẩm */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-red-600 font-semibold">${item.price}</span>
              {item.originalPrice && (
                <span className="text-gray-400 line-through text-sm">
                  ${item.originalPrice}
                </span>
              )}
            </div>

            {/* Nút thêm vào giỏ */}
            <button
              onClick={() => handleAddToCart(item.id)}
              className="mt-auto bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors cursor-pointer"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
