const Register = () => {
  return (
    <div className="rounded-lg shadow-sm border border-slate-200 my-[20px] py-[20px]">
      <form action="">
        <div className="flex flex-row gap-5 justify-center">
          <div className="w-[40%] px-[50px] flex flex-col gap-3">
            <div>
              <label className="block text-sm font-medium text-neutral-600 mb-1">
                First Name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-600 mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-600 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-600 mb-1">
                Mobile Number
              </label>
              <input
                type="text"
                className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter Mobile Number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-600 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Create Password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-600 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div className="w-[40%] px-[50px] flex flex-col gap-3">
            <div>
              <label className="block text-sm font-medium text-neutral-600 mb-1">
                Address Line 1
              </label>
              <input
                type="text"
                className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter Mobile Number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-600 mb-1">
                Address Line 2
              </label>
              <input
                type="text"
                className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter Mobile Number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-600 mb-1">
                Street Name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter Mobile Number"
              />
            </div>
            <div className="flex flex-row gap-3 w-full">
              <div className="w-[40%]">
                <label className="block text-sm font-medium text-neutral-600 mb-1">
                  ZIP
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter Mobile Number"
                />
              </div>
              <div className="w-[40%]">
                <label className="block text-sm font-medium text-neutral-600 mb-1">
                  City
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter Mobile Number"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-600 mb-1">
                State
              </label>
              <input
                type="text"
                className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter Mobile Number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-600 mb-1">
                Country
              </label>
              <input
                type="text"
                className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter Mobile Number"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center py-4">
          <div className="flex items-center justify-between text-center">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-neutral-300 text-blue-500 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-neutral-600">
                I agree to the Terms of Service and Privacy Policy.
              </span>
            </label>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center">
          <button
            type="submit"
            className="w-[30%] py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
