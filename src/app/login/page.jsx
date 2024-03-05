"use client"
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Footer from "@/components/Footer";


const SignUpForm = () => {
  
  const router = useRouter();
  //Top Loading Bar
  const [processing, setProcessing] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [user, setUser] = React.useState({
    email: "",
    password: ""
  })
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowPassword(true);
     try {
     const response = await axios.post("/api/users/login", user);
     console.log(response.data);
     toast.success("Login Success")
     setProcessing(false)
     router.push("/dashboard")
     } catch (error) {
      console.log(error);
      setProcessing(false)
      toast.error("Something went wrong: " + error.response.data.error + "!!")
     }
  }
  return (
    <>
    <section className="bg-gray-50 dark:bg-gray-900 flex flex-col h-screen">
      <div className='w-full text-end' >{processing ? <p>Logging...</p> : null}</div>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto sm:w-[28rem] h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-[25rem] xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-5 space-y-4 md:space-y-6 ">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" onChange={(e) => setUser({...user, email: e.target.value})}  required />
              </div>
              <div>
                <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setUser({...user, password: e.target.value})} required />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" onClick={() => setShowPassword(!showPassword)} required />
                </div>
                <div className="ml-1 text-sm">
                  <p className="font-medium text-primary-600 dark:text-primary-500" href="#">Show Password</p>
                </div>
              </div>
              <button disabled={!user.email || !user.password ? true : false} onClick={handleSubmit} type="submit" className="w-full text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don&apos;t have an account? <a onClick={()=> router.push('/signup')} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Getsignup</a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
    </>
  );
};

export default SignUpForm;
