import ProgressBar from '../common/ProgressBar'
import CountdownTimer from '../common/CountdownTimer'
import { Wallet, Zap, TrendingUp, Info } from 'lucide-react'

const PresaleCard = () => {
  return (
    <div className="glass-card p-8 max-w-2xl mx-auto border-t border-primary/20">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">IVO Token Presale</h2>
          <p className="text-foreground-muted">Secure your tokens at the early bird price.</p>
        </div>
        <div className="bg-primary/10 px-4 py-2 rounded-full border border-primary/20 text-primary font-bold text-sm">
          Phase 1
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-6">
          <div className="bg-background-lighter p-4 rounded-xl border border-white/5">
            <p className="text-foreground-muted text-sm mb-1">1 IVO =</p>
            <p className="text-2xl font-bold text-white">$0.0025</p>
          </div>
          <div className="bg-background-lighter p-4 rounded-xl border border-white/5">
            <p className="text-foreground-muted text-sm mb-1">Your Allocation</p>
            <p className="text-2xl font-bold text-white">50,000 IVO</p>
          </div>
        </div>
        
        <div className="flex flex-col justify-between">
          <p className="text-sm font-semibold text-foreground-muted mb-4">Presale Ends In</p>
          <CountdownTimer targetDate="2026-12-31T00:00:00" />
        </div>
      </div>

      <div className="space-y-6 mb-8">
        <ProgressBar current={1250000} total={5000000} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-2 btn-primary">
          <Wallet size={18} /> Connect Wallet
        </button>
        <button className="flex items-center justify-center gap-2 btn-secondary">
          <Zap size={18} /> Buy Now
        </button>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-foreground-muted text-sm border-t border-white/5 pt-6">
        <Info size={16} />
        <span>Audit by CertiK pending • 100% Secure</span>
      </div>
    </div>
  )
}

export default PresaleCard
