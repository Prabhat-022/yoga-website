import { Link } from "react-router-dom"

const MenuBar = ({ darkMode }) => {
  return (
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-b'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center space-x-8 py-4">
          <Link to="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} font-medium`}>
            Yoga Mats
          </Link>
          <Link to="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} font-medium`}>
            Yoga Wear
          </Link>
          <Link to="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} font-medium`}>
            Yoga Accessories
          </Link>
          <Link to="/blog" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} font-medium`}>
            Discover
          </Link>
          <Link to="#" className={`${darkMode ? 'text-red-400 hover:text-red-300' : 'text-red-600 hover:text-red-700'} font-medium`}>
            Sale
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MenuBar
