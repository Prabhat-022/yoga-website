import { 
  Dashboard,
  People,
  Settings,
  ExitToApp,
  Search,
  Notifications,
  Email
} from '@mui/icons-material';
import { useSelector } from 'react-redux';


const AdminProfile = () => {
  const darkMode = true;
const users = useSelector((store) => store?.user?.user)

  
  return (
    <div className={`min-h-screen p-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header with notifications */}
        <div className="flex justify-end mb-6 space-x-4">
          <button className="p-2 hover:bg-gray-700 rounded-full transition-all">
            <Email className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-gray-700 rounded-full transition-all">
            <Notifications className="w-6 h-6" />
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              {/* <Person className="w-16 h-16 text-white" /> */}
              <img src={users?.avatar} alt="" className='w-16 h-16 rounded-full' />
            </div>
            <div className="absolute bottom-0 right-0 bg-green-500 w-5 h-5 rounded-full border-4 border-gray-900"></div>
          </div>
          <h1 className="text-3xl font-bold mt-4">{users?.fullName}</h1>
          <p className="text-gray-400 mt-1">Super Admin</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-10">
          <div className="flex items-center bg-gray-800 rounded-lg p-3">
            <Search className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none w-full text-white placeholder-gray-400"
            />
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-400">Main Menu</h2>
          
          <div className="space-y-2">
            {[
              { icon: <Dashboard />, label: 'Dashboard', badge: 3 },
              { icon: <People />, label: 'User Management' },
              { icon: <Settings />, label: 'Settings' },
              { icon: <ExitToApp />, label: 'Logout' }
            ].map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center p-3 rounded-lg hover:bg-gray-800 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-800 group-hover:bg-gray-700 flex items-center justify-center mr-4">
                  {item.icon}
                </div>
                <span className="flex-grow text-left">{item.label}</span>
                {item.badge && (
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
