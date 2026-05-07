import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, AreaChart, Area, XAxis, YAxis } from 'recharts';

const portfolioData = [
  { name: 'Staking', value: 450000, color: '#3B82F6' },
  { name: 'Liquidity', value: 200000, color: '#10B981' },
  { name: 'Governance', value: 150000, color: '#8B5CF6' },
];

const activityData = [
  { time: '00:00', value: 1200 },
  { time: '04:00', value: 1800 },
  { time: '08:00', value: 3200 },
  { time: '12:00', value: 2800 },
  { time: '16:00', value: 4500 },
  { time: '20:00', value: 4200 },
];

export const PortfolioCharts = () => (
  <div className="grid md:grid-cols-2 gap-8">
    <div className="glass-card p-6 border border-white/10">
      <h3 className="font-bold mb-4">Asset Distribution</h3>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={portfolioData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
              {portfolioData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
    <div className="glass-card p-6 border border-white/10">
      <h3 className="font-bold mb-4">Staking Activity</h3>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={activityData}>
            <Area type="monotone" dataKey="value" stroke="#10B981" fill="#10B981" fillOpacity={0.2} />
            <XAxis dataKey="time" hide />
            <YAxis hide />
            <Tooltip contentStyle={{ backgroundColor: '#05070A', border: 'none' }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);
