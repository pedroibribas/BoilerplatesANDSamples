import axios from "axios";

// # API HANDLER
const getDOCX = async () => {
  return await axios.get("/", {
    responseType: "arraybuffer",
    headers: {
      "Accept": "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    }
  });
};

// # COMPONENT
export function App() {
  const handleSaveDocx = async () => {
    return await getDOCXAPIHandler().then(res => {
      const blob = new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'document.docx';
      link.click();
    }).catch(err => {
      console.log(err);
    });
  };
  
  return (
    <button onClick={handleSaveDOCX}>Salvar Documento<button/>
  );
};
