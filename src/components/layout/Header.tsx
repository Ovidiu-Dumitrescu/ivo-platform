import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Wallet } from 'lucide-react'
import { useAppKit } from '@reown/appkit/react'
import { useAccount } from 'wagmi'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { open } = useAppKit()
  const { isConnected, address } = useAccount()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Presale', path: '/presale' },
    { name: 'Staking', path: '/staking' },
    { name: 'Leaderboard', path: '/leaderboard' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'FAQ', path: '/faq' },
  ]

  const formatAddress = (addr: string) => `${addr.slice(0, 6)}...${addr.slice(-4)}`

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-ivo-gradient rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-primary/20">I</div>
          <span className="text-2xl font-extrabold tracking-tight font-sans">IVO</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-foreground/70'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => open()}
            className="hidden sm:flex items-center gap-2 btn-primary !py-2 !px-4 text-sm"
          >
            <Wallet size={18} />
            {isConnected ? formatAddress(address!) : 'Connect Wallet'}
          </button>

          <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background-lighter border-b border-white/10 py-6 px-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-semibold ${location.pathname === link.path ? 'text-primary' : 'text-foreground/70'}`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => { open(); setIsOpen(false); }}
            className="flex items-center justify-center gap-2 btn-primary w-full mt-4"
          >
            <Wallet size={18} />
            {isConnected ? formatAddress(address!) : 'Connect Wallet'}
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
