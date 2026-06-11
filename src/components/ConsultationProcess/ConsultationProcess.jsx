import styles from './ConsultationProcess.module.css';

const steps = [
  {
    num: '01',
    title: 'Avaliação Inicial',
    desc: 'Escuta ativa e anamnese detalhada para entender seu histórico, queixas, rotina e estilo de vida.',
    icon: '📋',
  },
  {
    num: '02',
    title: 'Análise Capilar',
    desc: 'Exame do couro cabeludo e dos fios com equipamento especializado para mapeamento preciso.',
    icon: '🔬',
  },
  {
    num: '03',
    title: 'Diagnóstico Individual',
    desc: 'Interpretação dos resultados e identificação das causas reais por trás da queda ou fraqueza capilar.',
    icon: '🎯',
  },
  {
    num: '04',
    title: 'Protocolo Personalizado',
    desc: 'Criação de um protocolo exclusivo com técnicas e produtos selecionados para o seu caso específico.',
    icon: '📝',
  },
  {
    num: '05',
    title: 'Acompanhamento dos Resultados',
    desc: 'Monitoramento contínuo da evolução, ajustes no protocolo e suporte durante toda a jornada.',
    icon: '📈',
  },
];

export default function ConsultationProcess() {
  return (
    <section id="como-funciona" className={styles.section}>
      <div className="container">

        {/* ── Header ── */}
        <div className={styles.header}>
          <span className="section-eyebrow"><span aria-hidden="true">✦</span> Processo</span>
          <h2 className={styles.title}>Como Funciona a Consulta</h2>
          <div className={styles.divider} />
          <p className={styles.sub}>
            Um acompanhamento estruturado do início ao resultado — porque cuidar do seu
            cabelo começa com um diagnóstico preciso e individualizado.
          </p>
        </div>

        {/* ── Timeline ── */}
        <div className={styles.timeline}>
          {steps.map((step, i) => (
            <div key={step.num} className={styles.step}>
              {/* Connector line */}
              {i < steps.length - 1 && <div className={styles.line} aria-hidden="true" />}

              <div className={styles.stepTop}>
                <div className={styles.numCircle}>
                  <span className={styles.num}>{step.num}</span>
                </div>
                <span className={styles.stepIcon} aria-hidden="true">{step.icon}</span>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
