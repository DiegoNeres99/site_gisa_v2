import { treatments } from '../../data/treatments';
import { config } from '../../config';
import styles from './Treatments.module.css';

const resultPhotos = [
  { id: 'photo-1', src: '/Foto_hero2.jpg', label: 'Foto 1' },
  { id: 'photo-2', src: '/Foto_sobre_mim.jpg', label: 'Foto 2' },
  { id: 'photo-3', src: '/Foto_hero2.jpg', label: 'Foto 3' },
  { id: 'photo-4', src: '/Foto_sobre_mim.jpg', label: 'Foto 4' },
  { id: 'photo-5', src: '/Foto_hero2.jpg', label: 'Foto 5' },
  { id: 'photo-6', src: '/Foto_sobre_mim.jpg', label: 'Foto 6' },
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
            {resultPhotos.map(item => (
              <figure key={item.id} className={styles.resultPhoto}>
                <img src={item.src} alt={`${item.label} de resultado capilar`} />
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>

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
