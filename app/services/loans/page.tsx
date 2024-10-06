export default function Loan() {
  return (
    <div className="w-[70%] mt-5 mb-5 mr-16 bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Loan Service
      </h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your phone number"
            required
          />
        </div>

        {/* Loan Information */}
        <div className="mb-4">
          <label className="block text-gray-700">Loan Amount</label>
          <input
            type="number"
            name="loanAmount"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter loan amount"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Loan Term (Months)</label>
          <input
            type="number"
            name="loanTerm"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter loan term in months"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Purpose of Loan</label>
          <textarea
            name="loanPurpose"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Describe the purpose of the loan"
            required
          ></textarea>
        </div>

        {/* Employment Information */}
        <div className="mb-4">
          <label className="block text-gray-700">Employer Name</label>
          <input
            type="text"
            name="employerName"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter employer name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Monthly Income ($)</label>
          <input
            type="number"
            name="monthlyIncome"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your monthly income"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Bank Account Number</label>
          <input
            type="text"
            name="bankAccountNumber"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your bank account number"
            required
          />
        </div>

        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="termsAgreed"
              className="form-checkbox h-5 w-5 text-blue-600"
              required
            />
            <span className="ml-2 text-gray-700">
              I agree to the terms and conditions
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          Apply for Loan
        </button>
      </form>
    </div>
  );
}
