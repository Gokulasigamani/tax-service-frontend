import { Link } from "react-router-dom"

export default function Signup() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 font-sans">

      {/* LEFT SIDE */}

      <div className="flex items-center justify-center px-10 lg:px-20">

        <div className="w-full max-w-md">

          {/* Logo */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold tracking-tight">
              DocExtract
            </h2>
          </div>

          {/* Heading */}

          <h1 className="text-3xl font-semibold mb-3">
            Create your account
          </h1>

          <p className="text-gray-500 text-sm mb-8">
            Start extracting structured data from documents using
            intelligent rules, custom fields, and automated workflows.
          </p>

          {/* FORM */}

          <form className="space-y-5">

            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Full name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Email address
              </label>

              <input
                type="email"
                placeholder="name@company.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Password
              </label>

              <input
                type="password"
                placeholder="Create password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Confirm password
              </label>

              <input
                type="password"
                placeholder="Confirm password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex items-start gap-2 text-sm">

              <input type="checkbox" className="mt-1" />

              <span className="text-gray-600">
                I agree to the Terms of Service and Privacy Policy
              </span>

            </div>

            {/* SIGNUP BUTTON */}

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition"
            >
              Create account
            </button>

          </form>

          {/* SIGNIN LINK */}

          <p className="text-sm text-center mt-8 text-gray-600">
            Already have an account?{" "}
            <Link to="/signin" className="text-indigo-600 font-medium">
              Sign in
            </Link>
          </p>

        </div>

      </div>


      {/* RIGHT SIDE IMAGE */}

      <div className="hidden lg:block h-screen">

        <img
         src="../public/signin.jpg"
          alt="Document extraction platform dashboard"
          className="w-full h-full object-cover"
        />

      </div>

    </div>
  )
}