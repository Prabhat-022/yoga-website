import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
    const user = useSelector((store) => store?.user?.user);
    const navigate = useNavigate();

    const [Editdata, setEditdata] = useState({
        fullName: user?.fullName || "",
        email: user?.email || "",
        password: "",
        phone: user?.phone || "",
        address: user?.address || "",
        avatar: null,
    });
    console.log('img', Editdata.avatar)

    // Handle input field changes
    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setEditdata((prev) => ({ ...prev, [name]: value }));
    // };

    // Handle file input changes
    const handleFileChange = (e) => {
        setEditdata((prev) => ({ ...prev, avatar: e.target.files[0] }));
    };

    const handleEditProfile = async (e) => {
        e.preventDefault();

        try {
            // Create FormData object
            const formData = new FormData();
            formData.append("userId", user._id); // Send userId
            formData.append("fullName", Editdata.fullName);
            formData.append("email", Editdata.email);
            formData.append("password", Editdata.password);
            formData.append("phone", Editdata.phone);
            formData.append("address", Editdata.address);

            console.log('formData', formData)

            if (Editdata.avatar) {
                formData.append("avatar", Editdata.avatar);
            }

            // Send the request
            const res = await axios.post(
                "http://localhost:3000/api/user/edit-profile",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );


            console.log("Profile updated:", res.data);
            alert("Profile updated successfully!");

        }
        catch (error) {
            console.error("Error updating profile:", error);
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


                    <form className="mt-8 space-y-6" onSubmit={handleEditProfile}>
                        <div className="rounded-md shadow-sm space-y-4">

                            <div>
                                <label htmlFor="fullName" className="sr-only">Full Name</label>
                                <input
                                    type="text"
                                    className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-500 placeholder-gray-400 text-white bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Full Name"
                                    value={Editdata.fullName}
                                    onChange={(e) => setEditdata({ ...Editdata, fullName: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="sr-only">Email address</label>
                                <input
                                    type="email"
                                    className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-500 placeholder-gray-400 text-white bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Email address"
                                    value={Editdata.email}
                                    onChange={(e) => setEditdata({ ...Editdata, email: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="sr-only">Phone</label>
                                <input
                                    type="text"
                                    className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-500 placeholder-gray-400 text-white bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Phone"
                                    value={Editdata.phone}
                                    onChange={(e) => setEditdata({ ...Editdata, phone: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input
                                    type="password"
                                    className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-500 placeholder-gray-400 text-white bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Password"
                                    value={Editdata.password}
                                    onChange={(e) => setEditdata({ ...Editdata, password: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="address" className="sr-only">Address</label>
                                <textarea className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-500 placeholder-gray-400 text-white bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focusborder-transparent "
                                    name="address" id=""
                                    placeholder="Address"
                                    value={Editdata.address}
                                    onChange={(e) => setEditdata({ ...Editdata, address: e.target.value })}
                                ></textarea>

                            </div>
                            <div>
                                <input
                                    type="file"
                                    className="appearance-none rounded-lg relative block w-full px-4 py-3 text-white bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    onChange={handleFileChange}
                                    accept="image/*"
                                />
                            </div>
                        </div>


                        <div className="flex">
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                            >
                                Save
                            </button>
                            <button onClick={() => navigate("/home")}
                                className=" group relative flex justify-center mx-1 py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                            >
                                Home
                            </button>
                        </div>


                    </form>
                </div>
            </div>
        </>

    )
}


export default EditProfile
