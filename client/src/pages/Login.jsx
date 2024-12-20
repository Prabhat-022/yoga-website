import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { setloginuser } from '../redux/UserSlice'


const Login = () => {
    const [logindata, setlogindata] = useState({
        email: "",
        password: "",
    });
     
    const navigate = useNavigate();
const dispatch = useDispatch();
    
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`http://localhost:3000/api/user/login`, logindata, {
                withCredentials: true
            })

            if (res.data.success) {
                toast.success("Login successful")
                dispatch(setloginuser(res.data.user))
                    navigate("/home")
            }

            console.log(res.data)

        } catch (error) {
            toast.error("Something went wrong")
            console.log(error)
        }
    }


    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 bg-gray-700 p-8 rounded-xl shadow-2xl">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                            Welcome Back!
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-300">
                            Sign in to your account
                        </p>

                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                        <div className="rounded-md shadow-sm space-y-4">
                            <div>
                                <label htmlFor="email" className="sr-only">Email address</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-500 placeholder-gray-400 text-white bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Email address"
                                    value={logindata.email}
                                    onChange={(e) => setlogindata({ ...logindata, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-500 placeholder-gray-400 text-white bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Password"
                                    value={logindata.password}
                                    onChange={(e) => setlogindata({ ...logindata, password: e.target.value })}
                                />
                            </div>
                        </div>
                
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                            >
                                Sign in
                            </button>
                        </div>

                        <div className="text-center">
                            <p className="text-sm text-gray-300">
                                Don&apos;t have an account?{' '}
                                <Link to="/register" className="font-medium text-blue-400 hover:text-blue-300 transition duration-150 ease-in-out">
                                    Register here
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
