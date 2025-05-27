import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import signupImage from "../assets/images/signup-image.png";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [method, setMethod] = useState("sms");
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    if (showOtpModal && counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [counter, showOtpModal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Gửi email hoặc OTP qua API ở đây
    setSubmitted(true);
    setShowOtpModal(true); // Hiện OTP Modal
  };

  const handleOtpConfirm = () => {
    // TODO: Gửi OTP xác nhận tới backend
    console.log("Xác nhận OTP:", otp);
    setShowOtpModal(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="flex min-h-[calc(100vh-200px)]">
        {/* Left Side - Image */}
        <div className="w-1/2 bg-[#C1DBE3] p-12 flex items-center justify-center">
          <div className="relative w-full max-w-[500px] aspect-square">
            <img
              src={signupImage}
              alt="Reset password illustration"
              className="w-full h-full object-contain"
            />
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#D9D9D9] rounded-full opacity-30"></div>
            <div className="absolute -bottom-4 right-12 w-8 h-8 bg-[#D9D9D9] rounded-full opacity-30"></div>
            <div className="absolute top-1/4 -right-4 w-6 h-6 bg-[#D9D9D9] rounded-full opacity-30"></div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-1/2 flex items-center justify-center p-12">
          <div className="w-full max-w-[370px]">
            <h1 className="text-4xl font-medium mb-6">Forgot Password</h1>
            <p className="text-base text-gray-600 mb-8">
              Enter your registered email below
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="w-full px-2 py-2 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black placeholder-gray-500"
                />
              </div>

              <button
                type="submit"
                className="bg-[#DB4444] text-white px-8 py-4 rounded hover:bg-red-600 transition-colors cursor-pointer"
              >
                Send Reset OTP
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link to="/login" className="text-black hover:underline">
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* OTP Modal */}
      {showOtpModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Xác thực email đăng ký
            </h2>
            <p className="mb-4 text-center text-gray-600">
              Nhập mã OTP được gửi qua email
            </p>

            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Nhập mã OTP"
              className="w-full px-4 py-2 border rounded mb-4"
            />

            <button
              className="w-full bg-red-600 text-white py-2 rounded mb-4 hover:bg-red-700 cursor-pointer"
              onClick={handleOtpConfirm}
            >
              Xác nhận
            </button>

            <div className="mt-1 text-center">
              <button
                onClick={() => setShowOtpModal(false)}
                className="text-gray-500 hover:underline cursor-pointer"
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPasswordPage;
