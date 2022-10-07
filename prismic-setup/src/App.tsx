import { useAllPrismicDocumentsByType } from "@prismicio/react";

function App() {
  // # Query
  const [documents] = useAllPrismicDocumentsByType("post");

  return (
    <main>
      <h1>Prismic App</h1>
      <p>Veja abaixo os documentos obtidos do seu repositório Prismic:</p>
      <div>
        {documents &&
          documents.map(document => (
            <article>
              <h2>{document.data.title[0].text}</h2>
              <p>{document.data.content[0].text}</p>
            </article>
          ))}
      </div>
    </main>
  );
}

export default App;
