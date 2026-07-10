import { UserPlus, Users, ClipboardCheck } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer
} from 'recharts';

const Analytics = () => {
  const topStats = [
    { title: 'New leads', value: '25', icon: UserPlus },
    { title: 'Active Clients', value: '85', icon: Users },
    { title: 'Completed Tasks', value: '32', icon: ClipboardCheck },
  ];

  const generateData = () => [
    { name: 'Jan', value: 0 },
    { name: 'Feb', value: 15 },
    { name: 'Mar', value: 12 },
    { name: 'Apr', value: 35 },
    { name: 'May', value: 30 },
    { name: 'Jun', value: 45 },
    { name: 'Jul', value: 45 },
    { name: 'Aug', value: 65 },
    { name: 'Sep', value: 75 },
  ];

  const charts = [
    { title: 'Leads Growth', data: generateData() },
    { title: 'Clients Growth', data: generateData() },
    { title: 'Revenue Growth', data: generateData() },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Stat Cards */}
      <div className="grid grid-cols-3 gap-6">
        {topStats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="card flex items-center gap-4">
              <div className="p-3 bg-[var(--color-primary-light)] text-primary rounded-full">
                 <Icon size={24} />
              </div>
              <div>
                <h3 className="text-muted font-medium mb-1">{stat.title}</h3>
                <div className="text-2xl font-bold">{stat.value}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-3 gap-6">
        {charts.map((chart, idx) => (
          <div key={idx} className="card flex flex-col">
            <h3 className="mb-6 font-semibold text-lg">{chart.title}</h3>
            <div style={{ width: '100%', height: 250 }}>
              <ResponsiveContainer>
                <LineChart data={chart.data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#93c5fd" 
                    strokeWidth={3} 
                    dot={false}
                    fill="url(#colorUv)" 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
