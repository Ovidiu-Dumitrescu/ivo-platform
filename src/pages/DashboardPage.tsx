import { motion } from 'framer-motion'
import { Wallet, PieChart, RefreshCw, History } from 'lucide-react'
import { PortfolioCharts } from '../components/dashboard/PortfolioCharts'

const STATS = [
  { label: 'Total Portfolio Value', value: '$124,592.00', icon: Wallet, change: '+12.5%' },
  { label: 'Total Staked', value: '450,000 IVO', icon: PieChart, change: '+5.2%' },
  { label: 'Pending Rewards', value: '12,400 IVO', icon: RefreshCw, change: 'Active' },
]

const HISTORY = [
  { action: 'Staked', amount: '100,000 IVO', date: '2026-05-01', status: 'Confirmed' },
  { action: 'Reward Claim', amount: '1,200 IVO', date: '2026-04-28', status: 'Confirmed' },
  { action: 'Presale Purchase', amount: '50,000 IVO', date: '2026-04-20', status: 'Confirmed' },
]

const DashboardPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto px-4 py-20 space-y-8">
      <div className="mb-12">
        <h1 className="text-5xl font-extrabold mb-2">Investor Dashboard</h1>
        <p className="text-foreground-muted">Overview of your IVO ecosystem engagement.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {STATS.map((stat, i) => (
          <div key={i} className="glass-card p-8 border border-white/10 hover:border-primary/50 transition-all">
            <div className="flex justify-between items-start mb-4">
              <stat.icon className="text-primary" size={28} />
              <span className="text-xs font-bold px-2 py-1 rounded bg-secondary/20 text-secondary">{stat.change}</span>
            </div>
            <h3 className="text-foreground-muted text-sm mb-1">{stat.label}</h3>
            <p className="text-3xl font-extrabold">{stat.value}</p>
          </div>
        ))}
      </div>

      <PortfolioCharts />

      <div className="glass-card p-8 border border-white/10">
        <h2 className="text-2xl font-bold mb-8">Transaction History</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="text-foreground-muted border-b border-white/10">
              <th className="pb-4">Action</th>
              <th className="pb-4">Amount</th>
              <th className="pb-4">Date</th>
              <th className="pb-4 text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            {HISTORY.map((tx, i) => (
              <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5">
                <td className="py-6 font-semibold">{tx.action}</td>
                <td className="py-6">{tx.amount}</td>
                <td className="py-6 text-foreground-muted">{tx.date}</td>
                <td className="py-6 text-right text-secondary font-bold">{tx.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default DashboardPage
