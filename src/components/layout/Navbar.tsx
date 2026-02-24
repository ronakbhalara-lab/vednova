import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/TransBGLogo.png';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/portfolio', label: 'Our Work' },
  { href: '/teams', label: 'Teams' },
  { href: '/hiring', label: 'Carrers' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      if (scrollY) window.scrollTo(0, parseInt(scrollY) * -1);
    }
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-[#FFFBF0]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
        }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.img
              src={logo}
              alt="Vednova IT Solution"
              className="h-[2rem] md:h-[3rem] w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href} className="relative group">
                <span
                  className={`text-sm font-medium transition-colors duration-200 ${location.pathname === link.href
                      ? 'text-[#654321]'
                      : 'text-[#0A2342] hover:text-[#654321]'
                    }`}
                >
                  {link.label}
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-[#654321]"
                  initial={{ width: 0 }}
                  animate={{ width: location.pathname === link.href ? '100%' : 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-[#654321] text-[#FFFBF0] hover:bg-[#0A2342] transition-colors"
            >
              <Link to="/contact">Let's Talk</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#0A2342] relative z-50"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? 'open' : 'closed'}
              className="w-6 h-5 relative flex flex-col justify-between"
            >
              <motion.span
                variants={{
                  open: { rotate: 45, y: 8, backgroundColor: '#654321' },
                  closed: { rotate: 0, y: 0 },
                }}
                className="w-full h-0.5 bg-current block"
              />
              <motion.span
                variants={{
                  open: { opacity: 0 },
                  closed: { opacity: 1 },
                }}
                className="w-full h-0.5 bg-current block"
              />
              <motion.span
                variants={{
                  open: { rotate: -45, y: -8, backgroundColor: '#654321' },
                  closed: { rotate: 0, y: 0 },
                }}
                className="w-full h-0.5 bg-current block"
              />
            </motion.div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-[#FFFBF0] shadow-2xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-lg font-semibold text-[#0A2342]">Menu</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-[#654321]/10"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 p-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${location.pathname === link.href
                        ? 'bg-[#654321] text-[#FFFBF0]'
                        : 'text-[#0A2342] hover:bg-[#654321]/10 hover:text-[#654321]'
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="p-6 border-t">
                <Button
                  asChild
                  className="w-full bg-[#654321] text-[#FFFBF0] hover:bg-[#0A2342]"
                >
                  <Link to="/contact">Let's Talk</Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
