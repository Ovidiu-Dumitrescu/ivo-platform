import { useState } from 'react'
import { ShieldCheck, Lock, ChevronRight } from 'lucide-react'

const STAKING_PLANS = [
  { duration: '30 Days', apy: '12%', min: '1,000 IVO' },
  { duration: '90 Days', apy: '28%', min: '5,000 IVO' },
  { duration: '180 Days', apy: '55%', min: '10,000 IVO' },
  { duration: '365 Days', apy: '110%', min: '50,000 IVO' },
]

const StakingCard = ({ plan }: { plan: typeof STAKING_PLANS[0] }) => (
  <div className="glass-card p-6 border border-white/5 hover:border-primary/50 transition-all duration-300">
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 bg-primary/10 rounded-lg">
        <Lock className="text-primary" size={24} />
      </div>
      <span className="text-primary font-bold text-lg">{plan.apy} APY</span>
    </div>
    <h3 className="text-xl font-bold mb-1">{plan.duration}</h3>
    <p className="text-foreground-muted text-sm mb-6">Minimum: {plan.min}</p>
    <button className="w-full py-3 bg-background-lighter hover:bg-primary transition-colors rounded-xl font-semibold flex items-center justify-center gap-2">
      Stake Now <ChevronRight size={16} />
    </button>
  </div>
)

const StakingPage = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-extrabold mb-6">Maximize Your <span className="gradient-text">IVO</span> Yield</h1>
        <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
          Lock your tokens and earn industry-leading rewards. Our audited staking platform ensures your assets grow securely within a non-custodial environment.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {STAKING_PLANS.map((plan, i) => (
          <StakingCard key={i} plan={plan} />
        ))}
      </div>

      <div className="glass-card p-12 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <ShieldCheck size={64} className="text-secondary shrink-0" />
          <div>
            <h4 className="text-2xl font-bold mb-2">Institutional Grade Security</h4>
            <p className="text-foreground-muted max-w-xl">
              All staking contracts are time-locked and undergo rigorous multi-step auditing. Your principal is protected by decentralized smart contracts, with reward distributions automated by our proprietary yield engine.
            </p>
          </div>
        </div>
        <button className="btn-primary whitespace-nowrap !py-4 !px-8">Download Security Audit</button>
      </div>
      
      <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
        {[
          { title: 'Automatic Compounding', desc: 'Rewards are automatically restaked to maximize your APY over time.' },
          { title: 'Governance Rights', desc: 'Stakers receive voting power in the IVO DAO based on their locked duration.' },
          { title: 'Liquidity Pools', desc: 'Your stake contributes to IVO/ETH deep liquidity pools, ensuring platform stability.' }
        ].map((item, i) => (
          <div key={i} className="p-6">
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-foreground-muted text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StakingPage
