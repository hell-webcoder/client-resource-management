import { UserPlus, Users, ClipboardList, DollarSign } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const Dashboard = () => {
  const stats = [
    { title: 'Total leads', value: '250', change: '12.5%', isUp: true, icon: UserPlus },
    { title: 'Total Clients', value: '85', change: '8.3%', isUp: true, icon: Users },
    { title: 'Total Tasks', value: '32', change: '5.2%', isUp: false, icon: ClipboardList },
    { title: 'Revenue', value: '$24,000', change: '15.4%', isUp: true, icon: DollarSign },
  ];

  const data = [
    { name: '0', value: 0 },
    { name: '10', value: 20 },
    { name: '20', value: 60 },
    { name: '30', value: 48 },
    { name: '40', value: 55 },
    { name: '50', value: 100 },
    { name: '60', value: 78 },
    { name: '70', value: 92 },
    { name: '80', value: 65 },
    { name: '90', value: 100 },
    { name: '100', value: 70 },
    { name: '110', value: 90 },
    { name: '120', value: 118 },
  ];

  const activities = [
    { text: 'New lead added', time: '2M ago' },
    { text: 'Task completed', time: '1M ago' },
    { text: 'New client added', time: '4M ago' },
    { text: 'Lead update', time: '8M ago' },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="card flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[var(--color-primary-light)] text-primary rounded-full">
                   <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-muted font-medium mb-1">{stat.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">{stat.value}</span>
                    <span className={`badge ${stat.isUp ? 'badge-success' : 'badge-danger'}`}>
                      {stat.isUp ? '↑' : '↓'} {stat.change}
                    </span>
                  </div>
                  <p className="text-xs text-muted mt-1">Vs last 30 days</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Chart Area */}
        <div className="card" style={{ gridColumn: 'span 2' }}>
           <h3 className="mb-6 font-semibold">Growth Overview</h3>
           <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
              <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="var(--color-primary)" strokeWidth={3} dot={false} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card">
          <h3 className="mb-6 font-semibold">Recent Activity</h3>
          <div className="flex flex-col gap-6">
            {activities.map((activity, idx) => (
              <div key={idx} className="flex justify-between items-center pb-4 border-b border-[var(--color-border)] last:border-0 last:pb-0">
                <span className="text-sm font-medium">{activity.text}</span>
                <span className="text-xs text-muted">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
