import axios from "axios";

// # API HANDLER
const getPDF = async () => {
  return await axios.get("/", {
    responseType: "arraybuffer",
    headers: { "Accept": "application/pdf" }
  });
};

// # COMPONENT
export function App() {
  // Handler para o clique
  const handleSavePDF = () => {
    return getPDF().then(res => {
      // Criar Binary Large Object a partir do buffer
      const blob = new Blob([res.data], { type: 'application/pdf' });
      // Criar link
      const link = document.createElement('a');
      // Ancorar link ao BLOB criado
      link.href = window.URL.createObjectURL(blob);
      // Nomear PDF
      link.download = 'document.pdf';
      // Clicar link
      link.click();
    }).catch(err => console.log(err));
  };
  
  return (
    <button onClick={handleSavePDF}>
      Salvar PDF
    <button/>
  );
};
