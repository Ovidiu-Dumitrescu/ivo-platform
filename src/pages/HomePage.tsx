import { motion } from 'framer-motion'
import { PriceChart } from '../components/common/PriceChart'
import { FAQ } from '../components/common/FAQ'
import { YieldCalculator } from '../components/dashboard/YieldCalculator'
import { LiveTicker } from '../components/dashboard/LiveTicker'
import { Shield, Zap, Target, Users, CheckCircle2, MessageSquare, Twitter, Github, TrendingUp, Activity, BarChart3, Database } from 'lucide-react'

const FEATURES = [
  { icon: Shield, title: 'Audited Security', desc: 'Enterprise-grade smart contract architecture.' },
  { icon: Zap, title: 'Lightning Fast', desc: 'Built for high-frequency transactions.' },
  { icon: Target, title: 'Predictive ROI', desc: 'AI-driven analytics dashboard.' },
  { icon: Users, title: 'Governance', desc: 'True decentralization for holders.' },
]

const MARKET_STATS = [
  { label: 'Total Value Locked', value: '$84.2M', icon: Database },
  { label: '24h Trading Volume', value: '$12.4M', icon: Activity },
  { label: 'Current APY', value: '110.5%', icon: TrendingUp },
  { label: 'Circulating Supply', value: '420M IVO', icon: BarChart3 },
]

const ROADMAP = [
  { phase: 'Phase 1', title: 'Foundation', items: ['Smart Contract Audit', 'Presale Launch', 'Core Team Scaling'] },
  { phase: 'Phase 2', title: 'Expansion', items: ['DEX Integration', 'Yield Farm V1', 'Community DAO'] },
  { phase: 'Phase 3', title: 'Institutional', items: ['Cross-chain Bridge', 'Lending Protocol', 'Global Partnerships'] },
]

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

const HomePage = () => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="py-12 px-4 space-y-32">
      {/* Hero Section */}
      <section className="text-center space-y-8 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        <motion.div variants={itemVariants} className="bg-primary/10 border border-primary/20 px-6 py-2 rounded-full inline-block mb-8 text-primary font-bold uppercase text-sm tracking-widest">
          The Future of Institutional Finance
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-7xl md:text-[120px] font-extrabold tracking-tighter leading-none mb-8">
          Scale Your Wealth with <br/><span className="gradient-text">IVO</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-2xl text-foreground-muted max-w-2xl mx-auto mb-12">
          The next-gen ecosystem combining automated staking, predictive yield, and cross-chain liquidity. Built for the modern investor.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex gap-6 justify-center">
          <a href="/presale" className="btn-primary">Join Presale</a>
          <a href="/staking" className="btn-secondary">Explore Staking</a>
        </motion.div>
      </section>

      {/* Market Stats Bar */}
      <section className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {MARKET_STATS.map((stat, i) => (
          <motion.div key={i} variants={itemVariants} className="glass-card p-6 flex flex-col items-center justify-center text-center">
            <stat.icon className="text-primary mb-3" size={24} />
            <h4 className="text-foreground-muted text-sm uppercase tracking-wider">{stat.label}</h4>
            <span className="text-2xl font-bold mt-1">{stat.value}</span>
          </motion.div>
        ))}
      </section>

      {/* Interactive Bento Grid */}
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div variants={itemVariants} className="md:col-span-2 glass-card p-10 border-l-4 border-l-blue-500">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold">Live Token Performance</h3>
            <span className="text-secondary bg-secondary/10 px-3 py-1 rounded text-xs font-bold uppercase animate-pulse">Live</span>
          </div>
          <PriceChart />
        </motion.div>
        
        <div className="space-y-6">
          <motion.div variants={itemVariants}>
            <YieldCalculator />
          </motion.div>
          <motion.div variants={itemVariants}>
            <LiveTicker />
          </motion.div>
        </div>

        {FEATURES.map((f, i) => (
          <motion.div key={i} variants={itemVariants} className="glass-card p-6 border border-white/10 flex items-center gap-4 hover:bg-white/5 transition-colors">
            <div className="p-3 bg-primary/10 rounded-lg text-primary"><f.icon size={24} /></div>
            <div>
              <h4 className="font-bold">{f.title}</h4>
              <p className="text-sm text-foreground-muted">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Roadmap Section */}
      <section className="container mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-16">The Road Ahead</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {ROADMAP.map((phase, i) => (
            <motion.div key={i} variants={itemVariants} className="glass-card p-8 border border-white/10 space-y-4">
              <span className="text-primary font-bold">{phase.phase}</span>
              <h3 className="text-2xl font-bold">{phase.title}</h3>
              <ul className="space-y-3">
                {phase.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-foreground-muted">
                    <CheckCircle2 size={18} className="text-secondary" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12">Frequently Asked Questions</h2>
        <FAQ />
      </section>

      {/* Community / CTA Section */}
      <section className="bg-primary/5 rounded-3xl p-16 text-center border border-primary/10">
        <h2 className="text-4xl font-extrabold mb-8">Join the Inner Circle</h2>
        <div className="flex justify-center gap-6 mb-12">
          <button className="p-4 bg-white/5 rounded-full hover:bg-primary transition-colors"><Twitter size={24} /></button>
          <button className="p-4 bg-white/5 rounded-full hover:bg-primary transition-colors"><MessageSquare size={24} /></button>
          <button className="p-4 bg-white/5 rounded-full hover:bg-primary transition-colors"><Github size={24} /></button>
        </div>
        <button className="btn-primary !px-12 !py-4 text-lg text-white">Join Community</button>
      </section>
    </motion.div>
  )
}

export default HomePage
