# Verum — A Inteligência da Coerência

Verum é uma plataforma de cibersegurança comportamental baseada em IA, focada em detectar incoerências e intenções suspeitas em redes de pequenas empresas antes que ocorram prejuízos.

## 🚀 Guia de Configuração

Siga estes passos para configurar o projeto no seu computador ou laptop.

### Pré-requisitos

- **Node.js**: v20 ou superior recomendada.
- **Gerenciador de pacotes**: npm, yarn ou [Bun](https://bun.sh/) (recomendado, pois o projeto contém um `bun.lockb`).

### Instalação

1.  **Clonar o repositório**:
    ```bash
    git clone <url-do-repositorio>
    cd Verum
    ```

2.  **Instalar dependências**:
    ```bash
    npm install
    # ou se estiver usando bun
    bun install
    ```

### Desenvolvimento

Para iniciar o servidor de desenvolvimento com Hot Module Replacement (HMR):

```bash
npm run dev
# ou
bun dev
```

O servidor estará disponível em `http://localhost:8080` (ou na próxima porta disponível).

### Comandos Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Cria a build de produção (TanStack Start / Cloudflare).
- `npm run lint`: Executa a verificação do ESLint.
- `npm run format`: Formata o código usando Prettier.

## 🛠️ Stack Tecnológica

- **Framework**: [TanStack Start](https://tanstack.com/router/latest/docs/framework/react/start/overview) (React + TanStack Router)
- **Vite**: v7.x com suporte a SSR.
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4-alpha)
- **Componentes UI**: Radix UI + Shadcn/ui
- **Ícones**: Lucide React v1.x
- **Deploy**: Otimizado para Cloudflare Pages/Workers (`wrangler.jsonc`).

## ⚠️ Notas de Implementação Importantes

Recentemente, o projeto passou por ajustes críticos para garantir a estabilidade do SSR (Server-Side Rendering):

1.  **SSR noExternal**: Devido ao uso do Vite 7 e TanStack Start, várias bibliotecas (incluindo Lucide e Radix UI) estão configuradas como `noExternal` no `vite.config.ts` para evitar erros de importação nomeada durante a renderização no servidor.
2.  **Lucide Icons v1.x**: Esta versão do Lucide removeu ícones de marcas (como `Linkedin`). O projeto utiliza ícones genéricos (como `Link2`) ou deve-se integrar uma biblioteca de ícones de marcas separada se necessário.
3.  **Roteamento**: O arquivo `src/routeTree.gen.ts` é gerado automaticamente. Nunca mova este arquivo manualmente para dentro da pasta `routes`, pois isso quebrará as referências de importação.

## 📄 Licença

Este projeto é privado e de uso exclusivo da Verum Security.
