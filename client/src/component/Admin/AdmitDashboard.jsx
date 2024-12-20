import {
  ShoppingCart,
  PendingActions,
  LocalMall,
  People,
  TrendingUp,
  AttachMoney,
  Timeline,
  MoreVert
} from '@mui/icons-material';
import * as Recharts from 'recharts';

const AdmitDashboard = () => {
  const darkMode = true;
  
  const orderData = [
    { name: 'Jan', orders: 400, revenue: 2400 },
    { name: 'Feb', orders: 300, revenue: 1398 },
    { name: 'Mar', orders: 200, revenue: 9800 },
    { name: 'Apr', orders: 278, revenue: 3908 },
    { name: 'May', orders: 189, revenue: 4800 },
    { name: 'Jun', orders: 239, revenue: 3800 },
  ];

  const stats = [
    {
      title: 'Total Orders',
      value: '2,543',
      increase: '+15%',
      icon: <ShoppingCart />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Pending Orders',
      value: '300',
      increase: '+5%',
      icon: <PendingActions />,
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: 'Total Sales',
      value: '$45,678',
      increase: '+23%',
      icon: <LocalMall />,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Active Users',
      value: '1,789',
      increase: '+18%',
      icon: <People />,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className={`w-full min-h-screen p-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Dashboard Overview</h1>
            <p className="text-gray-400 mt-1">Welcome back, Admin</p>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center space-x-2 transition-all">
              <Timeline className="w-5 h-5" />
              <span>Generate Report</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 rounded-xl bg-gray-800 hover:bg-gray-750 transition-all">
              <div className="flex justify-between items-start">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                  {stat.icon}
                </div>
                <button className="text-gray-400 hover:text-white">
                  <MoreVert />
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-gray-400 font-medium">{stat.title}</h3>
                <div className="flex items-baseline space-x-4">
                  <span className="text-2xl font-bold">{stat.value}</span>
                  <span className="text-green-500 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {stat.increase}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Chart */}
          <div className="p-6 rounded-xl bg-gray-800">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold">Revenue Overview</h2>
                <p className="text-gray-400">Monthly revenue statistics</p>
              </div>
              <div className="flex items-center space-x-2">
                <AttachMoney className="text-green-500" />
                <span className="text-green-500 font-medium">+12.5% from last month</span>
              </div>
            </div>
            <RevenueChart data={orderData} />
          </div>

          {/* Orders Chart */}
          <div className="p-6 rounded-xl bg-gray-800">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold">Orders Analytics</h2>
                <p className="text-gray-400">Daily order statistics</p>
              </div>
              <div className="flex items-center space-x-2">
                <ShoppingCart className="text-blue-500" />
                <span className="text-blue-500 font-medium">+8.2% from yesterday</span>
              </div>
            </div>
            <OrdersChart data={orderData} />
          </div>
        </div>
      </div>
    </div>
  );
};

const RevenueChart = ({ data }) => {
  return (
    <Recharts.ResponsiveContainer width="100%" height={300}>
      <Recharts.AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <Recharts.defs>
          <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#4CAF50" stopOpacity={0}/>
          </linearGradient>
        </Recharts.defs>
        <Recharts.XAxis dataKey="name" stroke="#6B7280" />
        <Recharts.YAxis stroke="#6B7280" />
        <Recharts.Tooltip contentStyle={{ background: '#1F2937', border: 'none' }} />
        <Recharts.Area type="monotone" dataKey="revenue" stroke="#4CAF50" fillOpacity={1} fill="url(#revenueGradient)" />
      </Recharts.AreaChart>
    </Recharts.ResponsiveContainer>
  );
};

const OrdersChart = ({ data }) => {
  return (
    <Recharts.ResponsiveContainer width="100%" height={300}>
      <Recharts.BarChart data={data}>
        <Recharts.XAxis dataKey="name" stroke="#6B7280" />
        <Recharts.YAxis stroke="#6B7280" />
        <Recharts.Tooltip contentStyle={{ background: '#1F2937', border: 'none' }} />
        <Recharts.Bar dataKey="orders" fill="#3B82F6" radius={[4, 4, 0, 0]} />
      </Recharts.BarChart>
    </Recharts.ResponsiveContainer>
  );
};

export default AdmitDashboard;
