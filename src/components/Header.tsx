import { Link, useRouterState } from '@tanstack/react-router'
import { useState } from 'react'

const navLinks = [
  { to: '/', label: 'Ana Sayfa' },
  { to: '/hizmetler', label: 'Hizmetler' },
  { to: '/urunler', label: 'Ürünler' },
  { to: '/pratik-bilgiler', label: 'Pratik Bilgiler' },
  { to: '/hizmet-bolgeleri', label: 'Hizmet Bölgeleri' },
  { to: '/iletisim', label: 'İletişim' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const routerState = useRouterState()
  const currentPath = routerState.location.pathname

  return (
    <header className="sticky top-0 z-50 bg-[#1A2E4A] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-white no-underline">
          <span className="text-2xl">🪟</span>
          <div>
            <div className="font-bold text-lg leading-tight">PerdeUsta</div>
            <div className="text-xs text-blue-300 leading-tight">İstanbul Perde & Korniş</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Ana navigasyon">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors no-underline ${
                currentPath === link.to
                  ? 'bg-white/20 text-white'
                  : 'text-blue-100 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="tel:+905309264830"
            className="flex items-center gap-1 bg-white text-[#1A2E4A] px-3 py-2 rounded font-semibold text-sm hover:bg-blue-50 transition-colors no-underline"
            aria-label="Hemen ara"
          >
            📞 Ara
          </a>
          <a
            href="https://wa.me/905309264830"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-green-500 text-white px-3 py-2 rounded font-semibold text-sm hover:bg-green-600 transition-colors no-underline"
            aria-label="WhatsApp ile iletişim"
          >
            💬 WhatsApp
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menüyü aç/kapat"
          aria-expanded={menuOpen}
        >
          <span className="block w-6 h-0.5 bg-current mb-1" />
          <span className="block w-6 h-0.5 bg-current mb-1" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#162540] border-t border-blue-800">
          <nav className="px-4 py-2 flex flex-col gap-1" aria-label="Mobil navigasyon">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-blue-100 hover:text-white py-2 px-3 rounded hover:bg-white/10 no-underline"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-4 pb-4 flex gap-2">
            <a
              href="tel:+905309264830"
              className="flex-1 text-center bg-white text-[#1A2E4A] py-2 rounded font-semibold text-sm no-underline"
            >
              📞 Hemen Ara
            </a>
            <a
              href="https://wa.me/905309264830"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-green-500 text-white py-2 rounded font-semibold text-sm no-underline"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
