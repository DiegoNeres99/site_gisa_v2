import { config } from '../../config';
import styles from './About.module.css';

const qualifications = [
  { icon: '🎓', label: 'Tricologista Certificada' },
  { icon: '🔬', label: 'Cosmetóloga' },
  { icon: '💡', label: 'Protocolos Exclusivos' },
  { icon: '🤝', label: 'Atendimento Humanizado' },
];

export default function About() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={`container ${styles.grid}`}>

        {/* ── Photo column ── */}
        <div className={styles.photoCol}>
          <div className={styles.photoOuter}>
            <div className={styles.photoInner}>
              <img
                className={styles.photo}
                src="/Foto_sobre_mim.jpg"
                alt="Retrato da especialista Gisa"
              />
            </div>
          </div>
          {/* decorative dots */}
          <div className={styles.decor1} aria-hidden="true" />
          <div className={styles.decor2} aria-hidden="true" />
        </div>

        {/* ── Text column ── */}
        <div className={styles.textCol}>
          <span className="section-eyebrow">
            <span aria-hidden="true">✦</span> Sobre Mim
          </span>

          <h2 className={styles.title}>
            Cuidado especializado,<br />
            <em className={styles.em}>protocolo individualizado.</em>
          </h2>

          <div className={styles.divider} />

          {config.professional.bio.trim().split('\n\n').map((p, i) => (
            <p key={i} className={styles.bio}>{p.trim()}</p>
          ))}

          {/* Qualifications */}
          <div className={styles.quals}>
            {qualifications.map(q => (
              <div key={q.label} className={styles.qual}>
                <span className={styles.qualIcon} aria-hidden="true">{q.icon}</span>
                <span className={styles.qualLabel}>{q.label}</span>
              </div>
            ))}
          </div>

          <a href={config.whatsapp.link} target="_blank" rel="noopener noreferrer"
             className={styles.cta}>
            Agendar minha avaliação
          </a>
        </div>

      </div>
    </section>
  );
}
