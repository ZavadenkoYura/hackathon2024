export default function Investments() {
  return (
    <div className="w-full flex items-center justify-center min-h-screen">
      <div className="w-[90%] md:w-[70%] lg:w-[50%] bg-white p-8 rounded-lg shadow-lg border border-gray-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Investment Service
        </h2>
        <div className="w-full h-[2px] bg-gray-300 mb-6"></div>
        <form>
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Investment Amount
            </label>
            <input
              type="number"
              name="investmentAmount"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter investment amount"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Investment Type
            </label>
            <select
              name="investmentType"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            >
              <option value="">Select Investment Type</option>
              <option value="Stocks">Stocks</option>
              <option value="Bonds">Bonds</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Mutual Funds">Mutual Funds</option>
            </select>
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Account Number
            </label>
            <input
              type="text"
              name="accountNumber"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your account number"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-md shadow-lg hover:bg-green-700 transition-all duration-300"
          >
            Invest Now
          </button>
        </form>
      </div>
    </div>
  );
}
