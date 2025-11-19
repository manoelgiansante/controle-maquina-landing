# 🚀 Deploy da Landing Page - Controle de Máquina

## ✅ Configurações Aplicadas

- **Facebook Pixel**: ID `1314795250329336`
  - PageView tracking automático
  - Lead tracking em todos os CTAs
- **WhatsApp**: `5517997497208`
- **URLs**: Todos os CTAs apontam para `https://controledemaquina.com.br/login?mode=register`

## 📦 Como Fazer Deploy

### Opção 1: Vercel (Recomendado)

1. Instale as dependências:
```bash
npm install
# ou
pnpm install
```

2. Build do projeto:
```bash
npm run build
# ou
pnpm build
```

3. Deploy na Vercel:
```bash
npx vercel --prod
```

4. Configure o domínio customizado na Vercel:
   - Vá em Settings > Domains
   - Adicione: `controledemaquina.com.br`
   - Configure o DNS conforme instruções da Vercel

### Opção 2: Netlify

1. Instale as dependências:
```bash
npm install
```

2. Build:
```bash
npm run build
```

3. Deploy:
```bash
npx netlify deploy --prod --dir=dist
```

### Opção 3: Deploy Manual

1. Faça build do projeto:
```bash
npm run build
```

2. Os arquivos estarão em `dist/`

3. Faça upload da pasta `dist/` para seu servidor web

4. Configure o servidor para servir em `controledemaquina.com.br`

## 🔍 Verificar Facebook Pixel

Depois do deploy:

1. Instale a extensão [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
2. Acesse a landing page
3. Clique na extensão - deve mostrar:
   - ✅ PageView disparado
4. Clique em "Teste Grátis" - deve mostrar:
   - ✅ Lead disparado

## 📊 Monitorar Conversões

Acesse o [Facebook Events Manager](https://business.facebook.com/events_manager2/) para ver:
- PageViews (visualizações)
- Leads (cliques nos CTAs)
- Taxa de conversão

## 🎯 Domínio Final

A landing page ficará acessível em:
- `https://controledemaquina.com.br`

## 📱 App Links

Todos os CTAs redirecionam para:
- `https://controledemaquina.com.br/login?mode=register` (criar conta)
- `https://controledemaquina.com.br/login` (login)
