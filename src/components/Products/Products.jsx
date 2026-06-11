import { products } from '../../data/products';
import { config } from '../../config';
import styles from './Products.module.css';

export default function Products() {
  return (
    <section id="produtos" className={styles.section}>
      <div className="container">

        {/* ── Header ── */}
        <div className={styles.header}>
          <span className="section-eyebrow"><span aria-hidden="true">✦</span> Loja</span>
          <h2 className={styles.title}>Produtos Recomendados</h2>
          <div className={styles.divider} />
          <p className={styles.sub}>
            Em breve, você também poderá adquirir produtos selecionados para auxiliar
            no crescimento, fortalecimento e desenvolvimento saudável dos fios.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className={styles.grid}>
          {products.map(p => (
            <div key={p.id} className={styles.card}>
              {/* Badge */}
              {p.badge && <span className={styles.badge}>{p.badge}</span>}

              {/* Product image placeholder */}
              <div className={styles.imgBox}>
                <span className={styles.emoji} aria-hidden="true">{p.emoji}</span>
                <span className={styles.imgSub}>{p.subtitle}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.name}>{p.name}</h3>
                <p className={styles.desc}>{p.description}</p>

                <a
                  href={p.available ? p.buyLink : config.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.btn} ${!p.available ? styles.btnAlt : ''}`}
                >
                  {p.available ? 'Comprar produto' : 'Consultar disponibilidade'}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── Curatorship note ── */}
        <div className={styles.note}>
          <span aria-hidden="true">🌿</span>
          Todos os produtos são selecionados e aprovados pela especialista para garantir
          segurança, eficácia e resultados reais.
        </div>

      </div>
    </section>
  );
}
