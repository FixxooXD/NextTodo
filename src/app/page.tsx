"use client"
import { useRouter } from "next/navigation"

export default function home(){
  const router = useRouter();
  return(
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero bg-cover bg-center bg-no-repeat h-screen relative flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-white">Next TODO App: Reach Your Goals</h1>
          <p className="text-xl text-white mt-4">
            Track your progress, stay motivated, and achieve your daily goals with Next Todo.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded shadow-md mt-8" onClick={()=> router.push("/signup")}>
            Get Started
          </button>
        </div>
      </section>
      </div>
  )
}