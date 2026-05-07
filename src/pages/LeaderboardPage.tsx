import { motion } from 'framer-motion'
import { Trophy, Medal, Crown } from 'lucide-react'

const LEADERBOARD_DATA = [
  { rank: 1, address: '0x71C...a928', staking: '1,250,000 IVO', roi: '142%' },
  { rank: 2, address: '0x29B...f812', staking: '980,000 IVO', roi: '138%' },
  { rank: 3, address: '0x88A...c391', staking: '850,000 IVO', roi: '135%' },
  { rank: 4, address: '0x44D...e204', staking: '720,000 IVO', roi: '129%' },
  { rank: 5, address: '0x99F...b112', staking: '650,000 IVO', roi: '122%' },
]

const LeaderboardPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-extrabold mb-6">Top <span className="gradient-text">Stakeholders</span></h1>
        <p className="text-xl text-foreground-muted">Honoring our most dedicated ecosystem participants.</p>
      </div>

      <div className="max-w-4xl mx-auto glass-card border border-white/10 overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/10 text-foreground-muted">
              <th className="p-6">Rank</th>
              <th className="p-6">Wallet Address</th>
              <th className="p-6">Staked Amount</th>
              <th className="p-6">APY Earned</th>
            </tr>
          </thead>
          <tbody>
            {LEADERBOARD_DATA.map((user, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-6 font-bold flex items-center gap-2">
                  {user.rank === 1 && <Crown className="text-yellow-500" size={20} />}
                  {user.rank === 2 && <Medal className="text-gray-300" size={20} />}
                  {user.rank === 3 && <Medal className="text-amber-700" size={20} />}
                  {user.rank > 3 && <span className="w-5 text-center">{user.rank}</span>}
                </td>
                <td className="p-6 font-mono">{user.address}</td>
                <td className="p-6 font-bold">{user.staking}</td>
                <td className="p-6 text-secondary font-bold">{user.roi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default LeaderboardPage
