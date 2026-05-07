import { motion } from 'framer-motion'
import { CheckCircle2, Circle, GitBranch } from 'lucide-react'

const ROADMAP_DATA = [
  {
    phase: 'Phase 1: Foundation',
    status: 'completed',
    items: ['Smart Contract Audit', 'Presale Launch', 'Core Team Scaling', 'Website V1.0']
  },
  {
    phase: 'Phase 2: Ecosystem',
    status: 'active',
    items: ['DEX Integration', 'Yield Farm V1', 'Community DAO Governance', 'Multi-chain Bridge']
  },
  {
    phase: 'Phase 3: Institutional',
    status: 'upcoming',
    items: ['Lending Protocol', 'Global Institutional Partnerships', 'IVO Mobile App', 'Tier-1 Exchange Listings']
  }
]

const RoadmapPage = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-20">
        <h1 className="text-6xl font-extrabold mb-6">Project <span className="gradient-text">Timeline</span></h1>
        <p className="text-xl text-foreground-muted max-w-2xl mx-auto">Our strategic roadmap to decentralized dominance. Clear objectives, measurable growth.</p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

        {ROADMAP_DATA.map((phase, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row gap-8 mb-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 mt-2 w-4 h-4 rounded-full bg-background border-4 border-primary z-10" />

            {/* Content Card */}
            <div className="ml-20 md:ml-0 md:w-1/2 p-8 glass-card border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <GitBranch className="text-primary" />
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${phase.status === 'completed' ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'}`}>
                  {phase.status}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-6">{phase.phase}</h3>
              <ul className="space-y-4">
                {phase.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3">
                    {phase.status === 'completed' ? 
                      <CheckCircle2 size={20} className="text-secondary" /> : 
                      <Circle size={20} className="text-primary" />
                    }
                    <span className="text-foreground-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default RoadmapPage
