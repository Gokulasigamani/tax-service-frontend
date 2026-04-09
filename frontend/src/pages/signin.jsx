import { Link, useLocation, useNavigate } from "react-router-dom"
import { signIn } from "../routes/auth.js"
import { ROUTES } from "../routes/routeConfig.js"
import signin from "../../public/signin.jpg"

export default function Signin() {
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || ROUTES.dashboard

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
            Sign in to your workspace
          </h1>

          <p className="text-text-main/70 text-sm mb-8">
            Upload documents, define fields, and automatically extract
            structured data using intelligent rules.
          </p>

          {/* FORM */}

          <form className="space-y-5">

            <div>
              <label className="text-sm text-text-main/70 mb-1 block">
                Email address
              </label>

              <input
                type="email"
                placeholder="name@company.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="text-sm text-text-main/70 mb-1 block">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex items-center justify-between text-sm">

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <button
                type="button"
                className="text-indigo-600 hover:underline"
              >
                Forgot password?
              </button>

            </div>

            {/* Login Button */}

            <button
              type="button"
              className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition"
              onClick={() => {
                signIn()
                navigate(from, { replace: true })
              }}
            >
              Sign in
            </button>

          </form>

          {/* Signup */}

          <p className="text-sm text-center mt-8 text-text-main/70">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-indigo-600 font-medium">
              Create account
            </Link>
          </p>

        </div>

      </div>


      {/* RIGHT SIDE IMAGE */}

      <div className="hidden lg:block h-screen">

        <img
          src={signin}
          alt="Document extraction dashboard preview"
          className="w-full h-full object-cover"
        />

      </div>

    </div>
  )
}