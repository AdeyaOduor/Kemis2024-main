import React from 'react'

function SearchLearner() {
  return (
    <>
     <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Search Learner</h1>

          {/* Search bar */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-md px-3 py-2 w-full"
            />
          </div>
        </div>
      </header>

      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Your content */}
        </div>
      </main>
    </>
  )
}

export default SearchLearner