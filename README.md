# Gisa Saúde Capilar — Landing Page

Landing page profissional para **Gisa Saúde Capilar**, tricologista certificada.

## Stack

- **React + Vite** — build rápido e moderno
- **Tailwind CSS v3** — estilização utilitária
- **Framer Motion** — animações fluidas
- **Lucide React** — ícones elegantes
- **React Scroll** — navegação suave entre seções

---

## Como rodar localmente

### Pré-requisitos

- Node.js **18+**
- npm **9+**

### Instalação

```bash
# 1. Entre na pasta do projeto
cd site_gisa_v2

# 2. Instale as dependências (já instaladas)
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse: http://localhost:5173

### Build para produção

```bash
npm run build
```

Os arquivos gerados ficam em `dist/`.

---

## Estrutura do projeto

```
src/
├── components/
│   ├── Navbar.jsx          # Navbar fixa com scroll transparente
│   ├── Hero.jsx            # Seção Hero (tela cheia)
│   ├── Sobre.jsx           # Sobre + credenciais
│   ├── Servicos.jsx        # Cards de serviços
│   ├── Produtos.jsx        # E-commerce simples
│   ├── Depoimentos.jsx     # Depoimentos de clientes
│   ├── CTA.jsx             # Call-to-action final
│   ├── Footer.jsx          # Rodapé
│   └── WhatsAppButton.jsx  # Botão flutuante WhatsApp
├── theme.js                # Cores, links e configurações globais
├── App.jsx                 # Componente raiz
├── main.jsx                # Entry point
└── index.css               # Estilos globais + Tailwind
```

---

## Personalização

### Número do WhatsApp

Edite `src/theme.js`:

```js
export const whatsappNumber = '5511999999999'; // apenas dígitos
```

### Links dos produtos

Em `src/components/Produtos.jsx`, troque `href="#"` pelo link real.

### Foto da Gisa

Em `src/components/Sobre.jsx`, substitua o placeholder por:

```jsx
<img src="/foto-gisa.jpg" alt="Gisa" className="w-full h-full object-cover" />
```

---

## SEO

Atualize em `index.html`:
- `og:url`, `twitter:url` e `canonical` com o domínio real
- `og:image` e `twitter:image` com imagem 1200×630px

---

## Deploy (recomendado: Vercel)

```bash
npm run build
npx vercel --prod
```
