# Configurar Stripe Payment Links

## Passo 1: Criar Payment Links no Stripe

Acesse o painel do Stripe: https://dashboard.stripe.com/payment-links

Para cada plano, crie um Payment Link:

### Plano Básico (Basic)
- **Mensal**: R$ 79/mês
  - Price ID: `price_1SXMbuEa6xGSraYx5Obo48a1`
- **Anual**: R$ 787/ano
  - Price ID: `price_1SXMcpEa6xGSraYxancVFGQI`

### Plano Pro
- **Mensal**: R$ 249/mês
  - Price ID: `price_1SXMfYEa6xGSraYxrFkmQL1Z`
- **Anual**: R$ 2.480/ano
  - Price ID: `price_1SXMgAEa6xGSraYxDjmTDYxN`

### Plano Enterprise
- **Mensal**: R$ 599/mês
  - Price ID: `price_1SXMh7Ea6xGSraYx78UdwkF7`
- **Anual**: R$ 5.966/ano
  - Price ID: `price_1SXMocEa6xGSraYxC2II2blE`

### Plano Prestador Pro (Service Provider)
- **Mensal**: R$ 399/mês
  - Price ID: `price_1SXMmhEa6xGSraYxBo7a0pEu`
- **Anual**: R$ 3.974/ano
  - Price ID: `price_1SXMnKEa6xGSraYxcVEVfTxh`

## Passo 2: Criar cada Payment Link

1. Acesse https://dashboard.stripe.com/payment-links/create
2. Selecione o produto/preço correspondente
3. Configure:
   - ✅ Coletar email do cliente
   - ✅ Permitir códigos promocionais (opcional)
   - ✅ Após pagamento: Redirecionar para `https://app.controledemaquina.com.br/login?payment=success`
4. Copie o link gerado

## Passo 3: Atualizar o código

Abra o arquivo `client/src/components/PricingSectionNew.tsx` e substitua os links de exemplo:

```typescript
const STRIPE_PAYMENT_LINKS = {
  basic: {
    monthly: "COLE_AQUI_O_LINK_BASICO_MENSAL",
    yearly: "COLE_AQUI_O_LINK_BASICO_ANUAL"
  },
  pro: {
    monthly: "COLE_AQUI_O_LINK_PRO_MENSAL",
    yearly: "COLE_AQUI_O_LINK_PRO_ANUAL"
  },
  enterprise: {
    monthly: "COLE_AQUI_O_LINK_ENTERPRISE_MENSAL",
    yearly: "COLE_AQUI_O_LINK_ENTERPRISE_ANUAL"
  },
  service_provider: {
    monthly: "COLE_AQUI_O_LINK_PRESTADOR_MENSAL",
    yearly: "COLE_AQUI_O_LINK_PRESTADOR_ANUAL"
  }
};
```

## Passo 4: Deploy

Após atualizar os links, faça o deploy:

```bash
cd /Users/manoelnascimento/Projects/controle-maquina-landing
git add .
git commit -m "fix: configurar Stripe Payment Links"
git push
```

A Vercel irá fazer o deploy automaticamente.

## Links Atuais (ATUALIZAR COM OS REAIS)

| Plano | Período | Link |
|-------|---------|------|
| Básico | Mensal | https://buy.stripe.com/cN2cPDdR76JO1uU001 |
| Básico | Anual | https://buy.stripe.com/7sY8zn3cta0028YdQS |
| Pro | Mensal | https://buy.stripe.com/bIY7vjdR70ls5L6dQT |
| Pro | Anual | https://buy.stripe.com/aEU9Dr3ct4BG6PaeUY |
| Enterprise | Mensal | https://buy.stripe.com/28o5nbcN30ls4H2289 |
| Enterprise | Anual | https://buy.stripe.com/eVa02NcN35FKdds5ko |
| Prestador Pro | Mensal | https://buy.stripe.com/00gdTH6oF0ls8Xm6os |
| Prestador Pro | Anual | https://buy.stripe.com/8wMbLz6oFe8caZA8wB |

**IMPORTANTE**: Os links acima são de exemplo. Você DEVE criar os Payment Links reais no painel do Stripe e substituir!
