import { useEffect } from 'react';
import styles from './EquipmentSection.module.css';

// Equipment list — add future devices here
const equipment = [
  {
    id: 1,
    icon: '🔬',
    name: 'Videodermoscópio Capilar',
    description:
      'Equipamento de imagem de alta resolução que permite a análise detalhada do couro cabeludo e dos folículos pilosos, possibilitando um diagnóstico preciso e individualizado.',
    benefits: [
      'Ampliação de alta resolução',
      'Visualização dos folículos pilosos',
      'Análise da estrutura capilar',
      'Diagnóstico preciso e documentado',
    ],
    available: true,
    instaPosts: [
      'https://www.instagram.com/p/DXh4uLUDhSh/',
      'https://www.instagram.com/reel/DXK2xGwDsJl/',
    ],
    instaCaption: [
      'Você realmente sabe como está o seu couro cabeludo… ou só imagina? 👀',
      'Com o T3 Analyzer, a análise vai muito além do visual: são mais de 13 indicadores avaliados com precisão, trazendo um diagnóstico completo do couro cabeludo e dos fios.',
      'Nada de achismo. Aqui, o tratamento é direcionado exatamente para o que o seu cabelo precisa.',
      'Agende sua avaliação e entenda de verdade o seu cabelo ✨',
    ],
  },
  // {
  //   id: 2,
  //   icon: '⚡',
  //   name: 'Aparelho de Eletroestimulação Capilar',
  //   description:
  //     'Tecnologia avançada para estimulação elétrica dos folículos, potencializando a absorção de ativos e o crescimento capilar.',
  //   benefits: [
  //     'Estimulação dos folículos',
  //     'Potencializa absorção de ativos',
  //     'Sem contraindicações',
  //     'Resultados acelerados',
  //   ],
  //   available: false,
  //   badge: 'Em breve',
  // },
];

export default function EquipmentSection() {
  useEffect(() => {
    const existing = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
    if (existing) {
      if (window.instgrm) window.instgrm.Embeds.process();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.onload = () => {
      if (window.instgrm) window.instgrm.Embeds.process();
    };
    document.body.appendChild(script);
  }, []);

  return (
    <section id="tecnologia" className={styles.section}>
      <div className="container">

        {/* ── Header ── */}
        <div className={styles.header}>
          <span className="section-eyebrow"><span aria-hidden="true">✦</span> Tecnologia</span>
          <h2 className={styles.title}>Avaliação Capilar com Tecnologia</h2>
          <div className={styles.divider} />
          <p className={styles.sub}>
            Utilizamos equipamentos especializados para um diagnóstico capilar
            preciso — porque um bom tratamento começa com uma boa avaliação.
          </p>
        </div>

        {/* ── Equipment cards ── */}
        <div className={styles.equipList}>
          {equipment.map(eq => (
            <div key={eq.id} className={styles.equipBlock}>

              {/* Videos: full-width 2-col grid */}
              {eq.instaPosts && (
                <div className={styles.videoGrid}>
                  {eq.instaPosts.map(url => (
                    <div key={url} className={styles.videoItem}>
                      <blockquote
                        className="instagram-media"
                        data-instgrm-permalink={url}
                        data-instgrm-version="14"
                        style={{ margin: 0, width: '100%', maxWidth: '100%' }}
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Info panel */}
              <div className={`${styles.card} ${eq.instaPosts ? styles.cardFlat : ''}`}>
                {!eq.available && eq.badge && (
                  <span className={styles.comingSoon}>{eq.badge}</span>
                )}

                {/* Fallback image for non-video items */}
                {!eq.instaPosts && (
                  <div className={styles.imgBox}>
                    <span className={styles.imgIcon} aria-hidden="true">{eq.icon}</span>
                    <p className={styles.imgHint}>
                      {eq.available ? 'Equipamento disponível' : 'Foto em breve'}
                    </p>
                  </div>
                )}

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{eq.name}</h3>
                  <p className={styles.cardDesc}>{eq.description}</p>

                  {eq.instaCaption && (
                    <div className={styles.instaCaptionBlock}>
                      {eq.instaCaption.map((para, i) => (
                        <p key={i} className={styles.instaCaptionPara}>{para}</p>
                      ))}
                    </div>
                  )}

                  <ul className={styles.benefitsList}>
                    {eq.benefits.map(b => (
                      <li key={b} className={styles.benefit}>
                        <span className={styles.benefitCheck} aria-hidden="true">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* ── Future note ── */}
        <p className={styles.note}>
          ✦ &nbsp;Novos equipamentos e tecnologias serão incluídos conforme disponíveis.
        </p>

      </div>
    </section>
  );
}
