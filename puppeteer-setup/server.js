const express = require('express');
const puppeteer = require('puppeteer');

const app = express();

// # CONTROLLER

// Função para gerar PDF
const printPDF = async (url) => {
  // Inicializar navegador em modo headless (suporta geração de PDF)
  const browser = await puppeteer.launch({ headless: true });
  
  // Abrir nova página no navegador
  const page = await browser.newPage();
  
  // Navegar para a URL dinâmica fornecida pelo controller 
  await page.goto(url, {
    // Configurar tempo para encerrar navegação caso inexistam conexões
    waitUntil: "networkidle2"
  });
  
  // Gerar e salvar PDF
  const pdf = await page.pdf({
    format: "A4"
    // Nota: se um path não for fornecido, em vez de salvar o PDF no disco,
    // um buffer será gerado
  });
  
  // Fechar navegador
  await browser.close();
  
  // Retornar buffer
  return pdf;
};

// Controller para servir o frontend com o buffer
const getPDF = async (req, res) => {
  // Obter URL do navegador que enviou a request
  const url = req.get('Referrer');

  // Chamar função geradora
  printPDF(url).then(pdf => {
    // Enviar buffer com o tipo de conteúdo adequado para o frontend
    res.set({ "Content-Type": "application/pdf", "Content-Length": pdf.length });
    res.send(pdf);
  }).catch(err => console.log(err));
};

// # ROUTING
app.get("/", getPDF);

app.listen(PORT, () => { console.log(`Servidor inicializado na porta ${PORT}`) });

// Sources
// https://blog.risingstack.com/pdf-from-html-node-js-puppeteer/
// https://codeburst.io/high-quality-pdf-generation-using-puppeteer-5b51e2ab231a
// https://en.wikipedia.org/wiki/Data_buffer
