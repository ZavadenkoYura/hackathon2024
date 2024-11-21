export default function TransferFunds() {
  return (
    <div className="w-full flex items-center justify-center min-h-screen">
      <div className="w-[90%] md:w-[70%] lg:w-[50%] bg-white p-8 rounded-lg shadow-lg border border-gray-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Transfer Funds
        </h2>
        <div className="w-full h-[2px] bg-gray-300 mb-6"></div>
        <form>
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Sender's Full Name
            </label>
            <input
              type="text"
              name="senderName"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter sender's full name"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Sender's Account Number
            </label>
            <input
              type="text"
              name="senderAccount"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter sender's account number"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Recipient's Full Name
            </label>
            <input
              type="text"
              name="recipientName"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter recipient's full name"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Recipient's Account Number
            </label>
            <input
              type="text"
              name="recipientAccount"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter recipient's account number"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Transfer Amount
            </label>
            <input
              type="number"
              name="transferAmount"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter transfer amount"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Transfer Description
            </label>
            <textarea
              name="transferDescription"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter transfer description (optional)"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-md shadow-lg hover:bg-green-700 transition-all duration-300"
          >
            Transfer Funds
          </button>
        </form>
      </div>
    </div>
  );
}
