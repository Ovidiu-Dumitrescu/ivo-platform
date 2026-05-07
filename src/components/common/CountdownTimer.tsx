import { useState, useEffect } from 'react'

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      const difference = +new Date(targetDate) - +new Date()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="flex gap-4 justify-center">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Mins', value: timeLeft.minutes },
        { label: 'Secs', value: timeLeft.seconds }
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="bg-background-card border border-white/10 rounded-xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center font-bold text-xl sm:text-2xl shadow-lg">
            {item.value.toString().padStart(2, '0')}
          </div>
          <span className="text-[10px] uppercase font-bold text-foreground-muted mt-2">{item.label}</span>
        </div>
      ))}
    </div>
  )
}

export default CountdownTimer
