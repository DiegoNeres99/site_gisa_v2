import { useEffect, useState } from 'react';
import { treatments } from '../../data/treatments';
import { config } from '../../config';
import styles from './Treatments.module.css';

const resultCases = [
  {
    id: 'case-1',
    before: { src: '/antes1.jpg', label: 'Antes' },
    after: { src: '/depois1.jpg', label: 'Depois' },
  },
  {
    id: 'case-2',
    before: { src: '/antes2.jpg', label: 'Antes' },
    after: { src: '/depois2.jpg', label: 'Depois' },
  },
  {
    id: 'case-3',
    before: { src: '/antes3.jpg', label: 'Antes' },
    after: { src: '/depois3.jpg', label: 'Depois' },
  }
];

const faqs = [
  {
    question: 'Em quanto tempo começo a ver resultado?',
    answer:
      'Depende do diagnóstico, da rotina de cuidados e da resposta do couro cabeludo. Na avaliação eu explico o plano indicado e o tempo esperado para acompanhar a evolução.',
  },
  {
    question: 'Preciso fazer avaliação antes do tratamento?',
    answer:
      'Sim. A avaliação é importante para entender a causa da queixa, evitar protocolos genéricos e escolher os cuidados mais adequados para o seu caso.',
  },
  {
    question: 'Os tratamentos servem para queda de cabelo?',
    answer:
      'Existem protocolos para diferentes tipos de queda, mas cada caso precisa ser analisado individualmente para identificar possíveis causas e definir a melhor conduta.',
  },
  {
    question: 'Posso continuar cuidando do cabelo em casa?',
    answer:
      'Pode e deve. O acompanhamento profissional orienta os produtos, hábitos e frequência de cuidados para manter o tratamento mais consistente no dia a dia.',
  },
];

export default function Treatments() {
  const regularTreatments = treatments.filter(t => t.icon !== 'piolho');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const closeOnEscape = event => {
      if (event.key === 'Escape') setSelectedPhoto(null);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

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

          <div className={styles.ebookMockup}>
            <img src="/ebook.jpg" alt="Ebook Piolho Nunca Mais – Guia antipolho para famílias" className={styles.ebookImg} />
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
              <span>Passo a passo completo</span>
              <span>Vídeo demonstrativo do processo</span>
              <span>Cuidados com roupas e ambientes</span>
              <span>Links de produtos recomendados</span>
              <span>Prevenção para escola e família</span>
            </div>

            <div className={styles.liceCtaRow}>
              <a
                href={config.hotmart.liceEbookLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.liceBtn}
              >
                Quero garantir meu Ebook
              </a>
              <p className={styles.liceNote}>
                Link de compra editável em <strong>config.js</strong>.
              </p>
            </div>
          </div>
        </div>

        <div id="fotos" className={styles.resultsSection}>
          <div className={styles.resultsHeader}>
            <span className="section-eyebrow"><span aria-hidden="true">✦</span> Antes e depois</span>
            <h3 className={styles.resultsTitle}>Evoluções acompanhadas de perto</h3>
            <p className={styles.resultsSub}>
              Este espaço foi criado para mostrar resultados reais dos tratamentos.
              As fotos abaixo são provisórias e serão substituídas pelos seus casos.
            </p>
          </div>

          <div className={styles.resultsGrid}>
            {resultCases.map((resultCase, caseIndex) => (
              <article key={resultCase.id} className={styles.resultCase}>
                <div className={styles.casePhotos}>
                  {[resultCase.before, resultCase.after].map(photo => (
                    <button
                      key={photo.label}
                      type="button"
                      className={styles.resultPhoto}
                      onClick={() => setSelectedPhoto({ ...photo, caseIndex })}
                      aria-label={`Ampliar foto ${photo.label.toLowerCase()} do caso ${caseIndex + 1}`}
                    >
                      <img src={photo.src} alt={`${photo.label} do resultado capilar`} />
                      <span>{photo.label}</span>
                    </button>
                  ))}
                </div>
                <p className={styles.expandHint}>Toque para ampliar</p>
              </article>
            ))}
          </div>
        </div>

        {selectedPhoto && (
          <div className={styles.photoModal} role="dialog" aria-modal="true" aria-label="Foto ampliada" onClick={() => setSelectedPhoto(null)}>
            <div className={styles.modalContent} onClick={event => event.stopPropagation()}>
              <img src={selectedPhoto.src} alt={`${selectedPhoto.label} do resultado capilar ampliado`} />
              <span className={styles.modalLabel}>{selectedPhoto.label}</span>
              <button type="button" className={styles.closeModal} onClick={() => setSelectedPhoto(null)} aria-label="Fechar foto ampliada">×</button>
            </div>
          </div>
        )}

        <div className={styles.faqSection}>
          <div className={styles.faqIntro}>
            <span className="section-eyebrow"><span aria-hidden="true">✦</span> FAQ</span>
            <h3 className={styles.faqTitle}>Dúvidas frequentes</h3>
            <p>
              Respostas rápidas para quem está pensando em começar um tratamento
              capilar e quer entender melhor como funciona o acompanhamento.
            </p>
          </div>

          <div className={styles.faqList}>
            {faqs.map(item => (
              <details key={item.question} className={styles.faqItem}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
