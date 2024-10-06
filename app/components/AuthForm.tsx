type Props = {
  title: string;
};

export function AuthForm({ title }: Props) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">{title}</h2>
        <form className="space-y-5">
          {title == "Sign up" && (
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="qwerty"
              />
            </div>
          )}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="example@example.com"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Sign In
          </button>
        </form>
        {title === "Sign in" ? (
          <p className="text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <span className="text-blue-600">Sign Up</span>
          </p>
        ) : (
          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <span className="text-blue-600">Sign In</span>
          </p>
        )}
      </div>
    </div>
  );
}
