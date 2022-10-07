## Terminologias do Prismic CMS

- Repository: repositório de conteúdos
- Document: o conteúdo criado no CMS
- Custom types: os tipos de conteúdo

## Dependências

- `@prismicio/react` helps with displaying content from Prismic.
- `@prismicio/client` helps with fetching content from the Prismic API.
- `@prismicio/helpers` oferece utilitários para formatar o dado da API do Prismic em dado amigável ao JavaScript, por ex. data.

## Fluxo do Prismic App

- O arquivo `src/prismic.ts` configura o 'client' para as requisições
- No `src/index.tsx`, o provedor do Prismic serve o 'client' para a aplicação
- Basta executar uma query nos documentos do repositório e guardar em variável, como em `src/App.tsx`
