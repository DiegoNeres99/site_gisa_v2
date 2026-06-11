import styles from './Benefits.module.css';

const benefits = [
  { icon: '🔍', text: 'Identificação da causa real da queda' },
  { icon: '👁️', text: 'Acompanhamento especializado e contínuo' },
  { icon: '📋', text: 'Protocolos 100% individualizados' },
  { icon: '🌿', text: 'Saúde do couro cabeludo restaurada' },
  { icon: '💪', text: 'Fortalecimento e resistência dos fios' },
  { icon: '🌱', text: 'Crescimento saudável e acelerado' },
  { icon: '✨', text: 'Brilho, vitalidade e leveza natural' },
  { icon: '🤝', text: 'Suporte humanizado em cada etapa' },
];

export default function Benefits() {
  return (
    <section id="beneficios" className={styles.section}>
      {/* Decorative top border */}
      <div className={styles.topBorder} aria-hidden="true" />

      <div className="container">
        <div className={styles.inner}>

          {/* ── Left text ── */}
          <div className={styles.left}>
            <span className={`section-eyebrow ${styles.eyebrow}`}>
              <span aria-hidden="true">✦</span> Resultados
            </span>
            <h2 className={styles.title}>
              O que você conquista com o tratamento{' '}
              <em className={styles.em}>especializado</em>
            </h2>
            <div className={styles.divider} />
            <p className={styles.sub}>
              Um protocolo personalizado vai além do sintoma — trata a causa,
              acompanha a evolução e transforma a saúde do seu cabelo de dentro para fora.
            </p>
          </div>

          {/* ── Right list ── */}
          <div className={styles.right}>
            <div className={styles.grid}>
              {benefits.map(b => (
                <div key={b.text} className={styles.item}>
                  <span className={styles.itemIcon} aria-hidden="true">{b.icon}</span>
                  <span className={styles.itemText}>{b.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
