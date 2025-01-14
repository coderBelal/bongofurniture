import { FaArrowRight } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4 tracking-wide">
            Pramanik Furniture
          </h1>
          <p className="text-gray-700 text-lg font-medium">Log in</p>
          <p className="text-sm text-gray-500 mb-8">
            Enter your email and we’ll send you a login code.
          </p>
        </div>
        <form>
          <div className="mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-300"
          >
            Continue <FaArrowRight className="ml-2" />
          </button>
        </form>
        <div className="mt-8 text-center">
          <a
            href="#"
            className="text-sm text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;