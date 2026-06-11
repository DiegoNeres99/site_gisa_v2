import { treatments } from '../../data/treatments';
import { config } from '../../config';
import styles from './Treatments.module.css';

export default function Treatments() {
  const regularTreatments = treatments.filter(t => t.icon !== 'piolho');

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
          {regularTreatments.map(t => (
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

        <div className={styles.liceFeature}>
          <div className={styles.liceGlow} aria-hidden="true" />

          <div className={styles.ebookMockup} aria-hidden="true">
            <div className={styles.ebookCover}>
              <span className={styles.ebookKicker}>Ebook exclusivo</span>
              <strong>Missão Couro Cabeludo Livre</strong>
              <span>Guia antipolho para famílias</span>
              <div className={styles.coverSeal}>Hotmart</div>
            </div>
            <div className={styles.ebookPages} />
          </div>

          <div className={styles.liceCopy}>
            <span className={styles.liceEyebrow}>Tratamento principal</span>
            <h3 className={styles.liceTitle}>
              Piolho não precisa virar desespero dentro de casa.
            </h3>
            <p className={styles.liceLead}>
              Um ebook direto, bonito e fácil de seguir para ajudar mães e famílias
              a entenderem o ciclo do piolho, organizarem a rotina de cuidados e
              reduzirem as chances de reinfestação com orientação profissional.
            </p>

            <div className={styles.licePoints}>
              <span>Roteiro passo a passo</span>
              <span>Checklist de pente fino</span>
              <span>Cuidados com roupas e ambientes</span>
              <span>Prevenção para escola e família</span>
            </div>

            <div className={styles.liceCtaRow}>
              <a
                href={config.hotmart.liceEbookLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.liceBtn}
              >
                Quero o ebook na Hotmart
              </a>
              <p className={styles.liceNote}>
                Link de compra editável em <strong>config.js</strong>.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
