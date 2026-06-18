import { config } from '../../config';
import styles from './Products.module.css';

const laCeuticaProducts = [
  { name: 'Melanogen™ Loção Antigrisalhos 90ml', image: 'https://acdn-us.mitiendanube.com/stores/006/684/663/products/33b2c5eb80e1ca43fce1f91c966e62c1-b5ecd3cc772849bd6317581232527084-1024-1024.webp', link: 'https://laceutica.com.br/produtos/melanogen-locao-antigrisalhos-90ml/' },
  { name: 'Trichoderm Nutra DHT BLOCKER 30 cápsulas', image: 'https://acdn-us.mitiendanube.com/stores/006/684/663/products/11023-trichoderm-nutra-dht-blocker-30-c-psulas-2-waquwygywf-1cffb33d8ff3d0d6ca17591443822064-1024-1024.webp', link: 'https://laceutica.com.br/produtos/trichoderm-nutra-dht-blocker-30-capsulas/' },
  { name: 'CALM Loção Prebiótico & Niacinamida 50ml', image: 'https://acdn-us.mitiendanube.com/stores/006/684/663/products/11014-calm-locao-df9ea52a0ffb16732917793664721327-1024-1024.webp', link: 'https://laceutica.com.br/produtos/calm-locao-prebiotic-50ml/' },
  { name: 'Loção antiqueda ET', image: 'https://acdn-us.mitiendanube.com/stores/006/684/663/products/6896177c75-d931dacead94f022e017591419374524-1024-1024.webp', link: 'https://laceutica.com.br/produtos/locao-antiqueda-et/' },
  { name: 'Loção Antiqueda AAG 50ml', image: 'https://acdn-us.mitiendanube.com/stores/006/684/663/products/3cbffb27aa-ac908bde5c6e66f2b317591418191269-1024-1024.webp', link: 'https://laceutica.com.br/produtos/locao-antiqueda-aag-50ml/' },
  { name: 'Shampoo Fortalecedor', image: 'https://acdn-us.mitiendanube.com/stores/006/684/663/products/4c56f2a01cbb977c3beee1eac754af85-376a637fc5ba621d7a17581228077562-1024-1024.webp', link: 'https://laceutica.com.br/produtos/shampoo-fortalecedor/' },
  { name: 'CALM Shampoo Prebióticos & Niacinamida 270ML', image: 'https://acdn-us.mitiendanube.com/stores/006/684/663/products/11015-calm-shampoo-prebiotico-niacinamida-270m-f4b6ea94a63d9a83a017741933427177-1024-1024.webp', link: 'https://laceutica.com.br/produtos/calm-shampoo-prebioticos-niacinamida-270ml/' },
  { name: 'BALM - Condicionador Hidratante', image: 'https://acdn-us.mitiendanube.com/stores/006/684/663/products/a85a203cff-7b19812aa5299f7f0c17587047394363-1024-1024.webp', link: 'https://laceutica.com.br/produtos/balm-condicionador-hidratante/' },
  // { name: 'MAIS FIOS ALOPECIA - Tratamento para queda de cabelo', image: 'https://acdn-us.mitiendanube.com/stores/006/684/663/products/tmp_b64_92d9b09e-df9a-496f-9b6d-995a65e52078_6684663_6933862-688ee34c9e645fc3f917659844671728-1024-1024.webp', link: 'https://laceutica.com.br/produtos/mais-fios-alopecia-tratamento-para-queda-de-cabelo/' },
  // { name: 'Loção Antiqueda AAG - Combo com 2 Unidades', image: 'https://acdn-us.mitiendanube.com/stores/006/684/663/products/combo-90-dias-aag-86b990cc578a95620317599249099024-1024-1024.webp', link: 'https://laceutica.com.br/produtos/locao-antiqueda-aag-combo-com-2-unidades/' },
  // { name: 'Loção Antiqueda ET - Combo com 2 Unidades', image: 'https://acdn-us.mitiendanube.com/stores/006/684/663/products/locao-et-combo-057730063a965be15117599338892487-1024-1024.webp', link: 'https://laceutica.com.br/produtos/locao-antiqueda-et-combo-com-2-unidades/' },
  // { name: 'Combo Fortalecimento & Densidade AAG', image: 'https://acdn-us.mitiendanube.com/stores/006/684/663/products/141759bff952fbde96cfeb6efd29562d-05075808fff42bb6c417634786881419-1024-1024.webp', link: 'https://laceutica.com.br/produtos/combo-fortalecimento-densidade-aag/' },
];

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
            Produtos selecionados pela especialista para auxiliar no crescimento,
            fortalecimento e desenvolvimento saudável dos fios.
          </p>
        </div>

        {/* ── La Ceutica Promo Banner ── */}
        <div className={styles.promoBanner}>
          <div className={styles.promoGlow} aria-hidden="true" />
          <div className={styles.promoContent}>
            <div className={styles.promoBadge}>
              <span aria-hidden="true">🔬</span>
              <span>Parceria Exclusiva</span>
            </div>
            <h3 className={styles.promoTitle}>
              La Ceutica — as melhores formulações para otimizar seus resultados
            </h3>
            <p className={styles.promoDesc}>
              Como sua especialista, selecionei as melhores formulações para 
              potencializar o seu protocolo de cuidados.
            </p>
            <div className={styles.promoOffer}>
              <span className={styles.promoDiscount}>15% OFF</span>
              <span className={styles.promoLabel}>em toda a linha de produtos</span>
            </div>
            <div className={styles.promoCoupon}>
              <span className={styles.couponLabel}>Cupom</span>
              <code className={styles.couponCode}>GISA15OFF</code>
            </div>
            <a
              href="https://laceutica.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.promoBtn}
            >
              Acessar Loja La Ceutica
              <span aria-hidden="true" className={styles.promoArrow}>→</span>
            </a>
            <p className={styles.promoTagline}>
              Menos cosméticos, mais resultados! 👩‍🔬🥰
            </p>
          </div>
        </div>

        {/* ── La Ceutica Product Grid ── */}
        <div className={styles.grid}>
          {laCeuticaProducts.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.imgBox}>
                <img src={p.image} alt={p.name} className={styles.productImg} loading="lazy" />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.name}>{p.name}</h3>
                <span className={styles.btn}>Ver na La Ceutica</span>
              </div>
            </a>
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
