/**
 * A função do `@prismicio/client` é conectar o app com a API do Prismic.
 */
import * as prismic from '@prismicio/client';

// # REPOSITÓRIO

/**
 * É necessário criar um repositório na plataforma do 
 * Prismic, onde serão salvos os modelos de documentos 
 * (custom types).
 */
// Fill in your repository name
export const repositoryName = 'ribas-prismic-app';

// # CLIENTE API PRISMIC

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken: process.env.REACT_APP_PRISMIC_ACCESS_TOKEN,

  // This defines how you will structure URL paths in your project.
  // Update the types to match the Custom Types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  //
  // Exemplo: { type: 'homepage', path: '/' }
  routes: [
    {
      type: 'post', // refere ao Custom Type
      path: "/", // refere ao caminho no app
    },
  ],
});