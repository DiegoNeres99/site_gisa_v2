import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { config } from '../../config';
import styles from './Header.module.css';

const navLinks = [
  { label: 'Início',       href: '#hero' },
  { label: 'Sobre',        href: '#sobre' },
  { label: 'Tratamentos',  href: '#tratamentos' },
  { label: 'Produtos',     href: '#produtos' },
  { label: 'Contato',      href: '#footer' },
];

function scrollTo(href) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollTo(href);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>

        {/* ── Logo ── */}
        <a href="#hero" className={styles.logo} onClick={e => handleNav(e, '#hero')}>
          <span className={styles.logoMark}>✦</span>
          <div>
            <p className={styles.logoName}>{config.professional.name}</p>
            <p className={styles.logoSub}>{config.professional.title}</p>
          </div>
        </a>

        {/* ── Desktop nav ── */}
        <nav className={styles.nav} aria-label="Navegação principal">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className={styles.navLink}
               onClick={e => handleNav(e, l.href)}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* ── Desktop CTA ── */}
        <a href={config.whatsapp.link} target="_blank" rel="noopener noreferrer"
           className={styles.cta}>
          Agendar Avaliação
        </a>

        {/* ── Mobile toggle ── */}
        <button className={styles.toggle} onClick={() => setMenuOpen(v => !v)}
                aria-label="Abrir menu" aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <div className={`${styles.mobile} ${menuOpen ? styles.mobileOpen : ''}`}>
        {navLinks.map(l => (
          <a key={l.href} href={l.href} className={styles.mobileLink}
             onClick={e => handleNav(e, l.href)}>
            {l.label}
          </a>
        ))}
        <a href={config.whatsapp.link} target="_blank" rel="noopener noreferrer"
           className={styles.mobileCta}>
          Agendar Avaliação pelo WhatsApp
        </a>
      </div>
    </header>
  );
}
