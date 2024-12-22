import PropTypes from 'prop-types'
import { useState } from "react"
import MenuBar from "./MenuBar"
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const Header = ({ darkMode, setDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate()
    const users = useSelector((store) => store?.user?.user)
    const getuser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    console.log('getuser', getuser)

    const handleaccount = () => {
        if (users?.userType === "user") {
            navigate('/account')
        }
        else if (users?.userType === "admin") {
            navigate('/admin')
        }

    }

    return (
        <div className="sticky top-0 z-50">
            <nav className={`flex flex-col md:flex-row items-center justify-between p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} shadow-md`}>
                {/* Left - Menu Button (Mobile) and Search Bar */}
                <div className="w-full md:w-auto mb-4 md:mb-0 flex items-center gap-2">
                    <button
                        className={`md:hidden p-2 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} rounded-lg`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                    <input
                        type="search"
                        placeholder="Search..."
                        className={`w-full md:w-auto px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
                    />
                </div>

                {/* Center - Logo */}
                <div className="w-full md:flex-1 flex justify-center mb-4 md:mb-0">
                    <h1 className="text-xl md:text-2xl font-bold">YogaStore</h1>
                </div>

                {/* Right - Account and Cart */}
                <div className="flex items-center ">
                    <div className="">
                        <button
                            className={`p-2 flex items-center ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} rounded-lg`}
                            onClick={handleaccount}
                        >
                                <h1 className='text-xl font-bold'>{users?.fullName || getuser?.fullName}</h1>
                                <p1 className=''>{users?.userType || getuser?.userType}</p1>

                            <img src={users?.avatar || getuser?.avatar || " "} alt="" className='w-8 h-8 rounded-full mx-2' />
                        </button>
                    </div>
                    <button
                        className={`p-2 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} rounded-lg`}
                        onClick={() => navigate('/cart')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={`p-2 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} rounded-lg`}
                    >
                        {darkMode ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className={`w-full md:hidden mt-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg`}>
                        <div className="p-4 space-y-4">
                            <Link to="#" className={`block px-4 py-2 ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-100'} rounded-lg`}>Home</Link>
                            <Link to="#" className={`block px-4 py-2 ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-100'} rounded-lg`}>Products</Link>
                            <Link to="#" className={`block px-4 py-2 ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-100'} rounded-lg`}>About</Link>
                            <Link to="#" className={`block px-4 py-2 ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-100'} rounded-lg`}>Contact</Link>
                            <Link to="/blog" className={`block px-4 py-2 ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-100'} rounded-lg`}>Blog</Link>
                        </div>
                    </div>
                )}
            </nav>
            <MenuBar darkMode={darkMode} />
        </div>
    )
}

Header.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired
}

export default Header
