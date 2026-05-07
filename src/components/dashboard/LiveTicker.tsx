import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const TRANSACTIONS = [
  { id: '0x1...a2b', type: 'Stake', amount: '5,000 IVO', time: 'Just now' },
  { id: '0x4...c9e', type: 'Swap', amount: '120 IVO', time: '1m ago' },
  { id: '0x9...f1a', type: 'Stake', amount: '25,000 IVO', time: '3m ago' },
  { id: '0x2...b7d', type: 'Claim', amount: '450 IVO', time: '5m ago' },
];

export const LiveTicker = () => {
  const [items, setItems] = useState(TRANSACTIONS);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => [
        { id: `0x${Math.random().toString(16).slice(2, 7)}`, type: 'Stake', amount: `${Math.floor(Math.random() * 10000)} IVO`, time: 'Just now' },
        ...prev.slice(0, 3)
      ]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card p-6 border border-primary/20">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        Live Network Activity
      </h3>
      <div className="space-y-3">
        <AnimatePresence initial={false}>
          {items.map((tx) => (
            <motion.div 
              key={tx.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex justify-between items-center bg-background p-3 rounded-lg text-sm"
            >
              <span className="font-mono text-primary">{tx.id}</span>
              <span className="font-bold">{tx.type}</span>
              <span className="text-secondary">{tx.amount}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
