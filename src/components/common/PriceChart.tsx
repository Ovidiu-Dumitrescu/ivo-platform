import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 4780 },
  { name: 'May', value: 8900 },
  { name: 'Jun', value: 9500 },
];

export const PriceChart = () => (
  <div className="h-[300px] w-full">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name" hide />
        <YAxis hide />
        <Tooltip 
          contentStyle={{ backgroundColor: '#0D1117', border: '1px solid #3B82F6', borderRadius: '8px' }}
          itemStyle={{ color: '#fff' }}
        />
        <Area type="monotone" dataKey="value" stroke="#3B82F6" fillOpacity={1} fill="url(#colorValue)" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);
