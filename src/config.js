// ─── Contact & Business Info ────────────────────────────────────────────────
// Edit these values to customize the landing page

const WHATSAPP_NUMBER = '5543999182766'; // Only digits, e.g. 5511999999999
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Gostaria de agendar uma avaliação capilar.'
);

export const config = {
  professional: {
    name: 'Gisa',
    fullName: 'Gisa Saúde Capilar',
    title: 'Tricologista & Cosmetóloga',
    bio: `Prazer, eu sou Gislaine de Fátima (Gisa).
    Sou terapeuta capilar, tricologista, cosmetóloga e cabeleireira com mais de 18 anos de experiência no mercado da beleza. Ao longo da minha trajetória, me especializei em saúde capilar, recuperação dos fios naturais, transição capilar e cuidados com cabelos cacheados e crespos.

    Possuo formação em Terapia Capilar, Tricologia e Cosmetologia, além de diversos cursos e congressos na área da saúde capilar, incluindo especializações realizadas pela ABT.

    Meu propósito é ajudar mulheres a recuperarem a saúde, a beleza e a confiança nos seus cabelos através de orientações práticas, tratamentos personalizados e acompanhamento profissional.

    Atuo com cortes terapêuticos, Big Chop, protocolos capilares individualizados e consultorias para ajuste de produtos, auxiliando cada cliente a encontrar a melhor rotina para seu cabelo — esteja ela perto ou em qualquer lugar do Brasil.

    Acredito que todo cabelo pode alcançar seu melhor potencial quando recebe os cuidados corretos, e estou aqui para tornar esse processo mais simples, seguro e eficiente para você.`,
  },

  whatsapp: {
    number: WHATSAPP_NUMBER,
    link: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
  },

  instagram: {
    handle: '@gisasaudecapilar',
    link: 'https://instagram.com/gisasaudecapilar',
  },

  hotmart: {
    liceEbookLink: '#hotmart-link-piolho',
  },

  address: {
    street: 'Endereço pelo Google Maps',
    city: 'Localização a confirmar',
    full: 'Endereço pelo Google Maps — localização a confirmar',
  },

  maps: {
    label: 'Gisa Cabeleireiros',
    shareLink: 'https://share.google/NW3Ae9LDJeyOJqrXK',
    embedUrl: 'https://www.google.com/maps?q=Gisa%20Cabeleireiros&output=embed',
  },

  businessHours: 'Seg–Sex: 9h às 18h  |  Sáb: 9h às 13h',
};
