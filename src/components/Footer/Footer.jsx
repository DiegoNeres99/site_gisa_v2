import { config } from '../../config';
import styles from './Footer.module.css';

function scrollTo(href) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

const navLinks = [
  { label: 'Início',          href: '#hero' },
  { label: 'Sobre',           href: '#sobre' },
  { label: 'Tratamentos',     href: '#tratamentos' },
  { label: 'Como Funciona',   href: '#como-funciona' },
  { label: 'Tecnologia',      href: '#tecnologia' },
  { label: 'Benefícios',      href: '#beneficios' },
  { label: 'Produtos',        href: '#produtos' },
];

const InstaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
       strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/>
  </svg>
);

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const MapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
       strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
       strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.topLine} aria-hidden="true" />

      <div className={`container ${styles.grid}`}>

        {/* ── Brand ── */}
        <div className={styles.brand}>
          <p className={styles.logoMark}>✦</p>
          <p className={styles.logoName}>{config.professional.fullName}</p>
          <p className={styles.logoTitle}>{config.professional.title}</p>
          <p className={styles.brandDesc}>
            Atendimento especializado em terapia capilar com protocolos
            personalizados para saúde e beleza dos seus fios.
          </p>

          {/* Social icons */}
          <div className={styles.socials}>
            <a href={config.instagram.link} target="_blank" rel="noopener noreferrer"
               className={styles.social} aria-label="Instagram">
              <InstaIcon />
            </a>
            <a href={config.whatsapp.link} target="_blank" rel="noopener noreferrer"
               className={styles.social} aria-label="WhatsApp">
              <WaIcon />
            </a>
          </div>
        </div>

        {/* ── Quick links ── */}
        <div>
          <h4 className={styles.colTitle}>Links Rápidos</h4>
          <ul className={styles.links}>
            {navLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} className={styles.link}
                   onClick={e => { e.preventDefault(); scrollTo(l.href); }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Contact info ── */}
        <div>
          <h4 className={styles.colTitle}>Contato</h4>
          <ul className={styles.contacts}>
            <li className={styles.contact}>
              <InstaIcon />
              <a href={config.instagram.link} target="_blank" rel="noopener noreferrer"
                 className={styles.link}>
                {config.instagram.handle}
              </a>
            </li>
            <li className={styles.contact}>
              <WaIcon />
              <a href={config.whatsapp.link} target="_blank" rel="noopener noreferrer"
                 className={styles.link}>
                WhatsApp
              </a>
            </li>
            <li className={styles.contact}>
              <MapIcon />
              <span className={styles.contactText}>{config.address.full}</span>
            </li>
            <li className={styles.contact}>
              <ClockIcon />
              <span className={styles.contactText}>{config.businessHours}</span>
            </li>
          </ul>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className={styles.bottom}>
        <div className="container">
          <p className={styles.copy}>
            © 2025 {config.professional.fullName}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
