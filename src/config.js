// ─── Contact & Business Info ────────────────────────────────────────────────
// Edit these values to customize the landing page

const WHATSAPP_NUMBER = '55XXXXXXXXXX'; // Only digits, e.g. 5511999999999
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Gostaria de agendar uma avaliação capilar.'
);

export const config = {
  professional: {
    name: 'Gisa',
    fullName: 'Gisa Saúde Capilar',
    title: 'Tricologista & Cosmetóloga',
    bio: `Sou Tricologista e Cosmetóloga com formação especializada em saúde capilar. 
Ao longo da minha trajetória, desenvolvi protocolos exclusivos baseados em diagnóstico 
individual, porque cada paciente possui uma necessidade diferente e merece um cuidado único.

Meu trabalho é focado em identificar as causas reais da queda capilar, promover o 
fortalecimento dos fios e devolver a saúde do couro cabeludo — sempre com ciência, 
atenção e cuidado humanizado.`,
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
