import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom"

const Register = () => {

    const [registerdata, setregisterdata] = useState(
        {
            fullName: "",
            email: "",
            password: "",
            phone: "",
            address: "",
            avatar: null,
            userType: ""
        }
    );
    const handleCheckbox = (userType) => {
        setregisterdata({ ...registerdata, userType: userType })
    }
    console.log('userType', registerdata.userType)
    const navigate = useNavigate();

    console.log('image', registerdata.avatar)

    //handle the register router

    const handleregister = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("fullName", registerdata.fullName);
        formData.append("email", registerdata.email);
        formData.append("phone", registerdata.phone);
        formData.append("password", registerdata.password);
        formData.append("address", registerdata.address);
        formData.append("avatar", registerdata.avatar);
        formData.append("userType", registerdata.userType);

        try {
            const res = await axios.post("http://localhost:3000/api/user/register", formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                    withCredentials: true,
                }
            )
            console.log('res', res.data)
            if (res.data.success) {
                toast.success(res.data.message)
                navigate("/");

            }

        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message)
            } else {
                toast.error('Something went wrong')
            }
            console.log('Register client:', error)
        }
    }


    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 bg-gray-700 p-8 rounded-xl shadow-2xl">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                            Create Account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-300">
                            Join our community today
                        </p>
                    </div>

                    <form className="mt-8 space-y-6" onSubmit={handleregister}>
                        <div className="rounded-md shadow-sm space-y-4">
                            <div>
                                <label htmlFor="fullName" className="sr-only">Full Name</label>
                                <input
                                    type="text"
                                    className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-500 placeholder-gray-400 text-white bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Full Name"
                                    value={registerdata.fullName}
                                    onChange={(e) => setregisterdata({ ...registerdata, fullName: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="sr-only">Email address</label>
                                <input
                                    type="email"
                                    className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-500 placeholder-gray-400 text-white bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Email address"
                                    value={registerdata.email}
                                    onChange={(e) => setregisterdata({ ...registerdata, email: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="sr-only">Phone</label>
                                <input
                                    type="text"
                                    className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-500 placeholder-gray-400 text-white bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Phone"
                                    value={registerdata.phone}
                                    onChange={(e) => setregisterdata({ ...registerdata, phone: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input
                                    type="password"
                                    className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-500 placeholder-gray-400 text-white bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Password"
                                    value={registerdata.password}
                                    onChange={(e) => setregisterdata({ ...registerdata, password: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="address" className="sr-only">Address</label>
                                <textarea className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-500 placeholder-gray-400 text-white bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
                                    name="address" id=""
                                    placeholder="Address"
                                    value={registerdata.address}
                                    onChange={(e) => setregisterdata({ ...registerdata, address: e.target.value })}
                                ></textarea>

                            </div>
                            <div>
                                <input
                                    type="file"
                                    className="appearance-none rounded-lg relative block w-full px-4 py-3 text-white bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    onChange={(e) => setregisterdata({ ...registerdata, avatar: e.target.files[0] })}
                                    accept="image/*"
                                />
                            </div>
                            <div className="">
                                <div className='flex items-center my-4'>
                                    <div className='flex items-center'>
                                        <p>User</p>
                                        <input
                                            type="checkbox"
                                            checked={registerdata.userType === "user"}
                                            onChange={() => handleCheckbox("user")}
                                            defaultChecked
                                            className="checkbox mx-2" />
                                    </div>
                                    <div className='flex items-center'>
                                        <p>Admin</p>
                                        <input
                                            type="checkbox"
                                            checked={registerdata.userType === "admin"}
                                            onChange={() => handleCheckbox("admin")}
                                            defaultChecked
                                            className="checkbox mx-2" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                                >
                                    Create Account
                                </button>
                            </div>

                            <div className="text-center">
                                <p className="text-sm text-gray-300">
                                    Already have an account?{' '}
                                    <Link to="/r" className="font-medium text-blue-400 hover:text-blue-300 transition duration-150 ease-in-out">
                                        Sign in here
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
