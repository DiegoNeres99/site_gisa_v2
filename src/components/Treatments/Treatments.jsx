import { treatments } from '../../data/treatments';
import { config } from '../../config';
import styles from './Treatments.module.css';

export default function Treatments() {
  return (
    <section id="tratamentos" className={styles.section}>
      <div className="container">

        {/* ── Header ── */}
        <div className={styles.header}>
          <span className="section-eyebrow"><span aria-hidden="true">✦</span> Especialidades</span>
          <h2 className={styles.title}>Principais Tratamentos</h2>
          <div className={styles.divider} />
          <p className={styles.sub}>
            Cada tratamento é desenvolvido com base no diagnóstico individual,
            respeitando as necessidades únicas do seu couro cabeludo e dos seus fios.
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div className={styles.grid}>
          {treatments.map(t => (
            <div key={t.id} className={`${styles.card} ${t.highlight ? styles.highlight : ''}`}>
              <div className={styles.cardTop}>
                <span className={styles.emoji} aria-hidden="true">{t.emoji}</span>
                {t.highlight && <span className={styles.badge}>Destaque</span>}
              </div>
              <h3 className={styles.cardTitle}>{t.title}</h3>
              <p className={styles.cardDesc}>{t.description}</p>
              <a href={config.whatsapp.link} target="_blank" rel="noopener noreferrer"
                 className={styles.cardBtn}>
                Saiba mais →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
