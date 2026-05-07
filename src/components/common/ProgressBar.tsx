import { useState, useEffect } from 'react'

const ProgressBar = ({ current, total }: { current: number; total: number }) => {
  const progress = Math.min((current / total) * 100, 100)

  return (
    <div className="w-full">
      <div className="flex justify-between text-sm font-semibold mb-2">
        <span className="text-foreground-muted">Raised: <span className="text-white">${current.toLocaleString()}</span></span>
        <span className="text-foreground-muted">Target: <span className="text-white">${total.toLocaleString()}</span></span>
      </div>
      <div className="h-4 bg-background-lighter rounded-full overflow-hidden border border-white/10">
        <div 
          className="h-full bg-ivo-gradient transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-right text-xs text-foreground-muted mt-2">{progress.toFixed(1)}% Completed</p>
    </div>
  )
}

export default ProgressBar
