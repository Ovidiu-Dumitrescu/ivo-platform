import { useState } from 'react';

export const YieldCalculator = () => {
  const [amount, setAmount] = useState(1000);
  const apy = 110.5;

  return (
    <div className="glass-card p-8 border border-white/10">
      <h3 className="text-2xl font-bold mb-6">Yield Calculator</h3>
      <div className="space-y-6">
        <div>
          <label className="text-sm text-foreground-muted mb-2 block">Stake Amount (IVO)</label>
          <input 
            type="range" min="100" max="100000" step="100" value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-2 bg-background-lighter rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="text-2xl font-bold mt-2">{amount.toLocaleString()} IVO</div>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
          <div>
            <p className="text-xs text-foreground-muted uppercase">Estimated APY</p>
            <p className="text-xl font-bold text-secondary">{apy}%</p>
          </div>
          <div>
            <p className="text-xs text-foreground-muted uppercase">Earnings (Year)</p>
            <p className="text-xl font-bold text-white">{(amount * (apy / 100)).toFixed(2)} IVO</p>
          </div>
        </div>
      </div>
    </div>
  );
};
