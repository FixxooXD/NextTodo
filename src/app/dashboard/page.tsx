"use client"

import Footer from "@/components/Footer";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      <header className="flex flex-row justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">To-Do App</h1>
        <button className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>
      </header>
      <main className="flex flex-col flex-grow px-6 py-8 space-y-8">
        <section className="flex flex-cols items-center">
        <div>
          <div className="text-lg font-bold text-gray-900 dark:text-white">Home</div>
          <div>Profile</div>
        </div>
          <button className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Add New Todo +
          </button>
        </section>
        <div className="flex flex-col space-y-4">
          {/* Individual todo items will be inserted here dynamically */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
