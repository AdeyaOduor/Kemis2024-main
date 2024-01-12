import React from "react";
import FeatAboutReg from "./Feat-LearnerReg";


function LearnersRegistration() {
  return (
    <>
      <div className="rounded-3xl mx-auto py-4 max-w-2xl sm:mt-12 lg:mx-6 lg:flex lg:max-w-none">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>

          <div className="p-8 sm:p-10 lg:flex-auto">
            <h2 className="font-bold tracking-tight text-gray-900 lg:text-5xl">
              Learners Registration
            </h2>
            <h2 className="font-bold mt-6  tracking-tight text-gray-900 lg:text-3xl">
              Welcome to the School Registration Revolution!
            </h2>
            <p className="mt-6 text-5x1 leading-8 text-gray-600">
                <strong>
                  Streamline Your Registration Process with Our Digital Solution
                </strong><br />          
              <span className="text-3xl">We understand the challenges of traditional manual registration
              processes. That's why we're excited to introduce a groundbreaking
              solution that will transform the way you handle student
              registrations.</span></p>
          </div>
        </div>
        <div className="-mt-2 lg:mt-8 mr-8 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div className="my-10 mx-8 px-4 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div className="text-left">
                  <h3 className="text-3xl  font-bold tracking-tight text-gray-900">
                    Sign in to your account
                  </h3>
                  <p className="text-xs font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    {" "}
                    Use your NEMIS Credential to Login into the System.
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-left font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="http://nemis.education.go.ke/passreset.aspx"
                        target="-blank"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                <hr className="mb-4"></hr>
                Don't Have an account{" "}
                <a
                  href="http://nemis.education.go.ke/userregister.aspx"
                  className="font-semibold leading-6 text-App-link hover:text-indigo-500"
                >
                  Use your NEMIS Credential to Login into the System.
                </a>
              </p>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
        </div>
      </div>
      <FeatAboutReg />
    </>
  );
}

export default LearnersRegistration;
