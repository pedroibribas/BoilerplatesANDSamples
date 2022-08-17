const express = require('express');

// Importar pacote docx
const docx = require('docx');

// Desestruturar métodos
const { Document, Packer, Paragraph, TextRun } = docx;

app.get('/api/docx', async (req, res) => {
  // Adicionar conteúdo ao documento
  const doc = new docx.Document({
    sections: [{
      properties: {},
      children: [
        new Paragraph({
          children: [
            new TextRun("Hello World"),
            new TextRun({
              text: "Foo Bar",
              bold: true,
            }),
            new TextRun({
              text: "\tGithub is the best",
              bold: true,
            }),
          ],
        }),
      ],
    }],
  });

  // Formatar arquivo e enviar para o frontend
  await Packer.toBuffer(doc).then(file => {
    res.set({
      'Content-Disposition': 'attachment; filename="document.docx"',
      'Content-Length': file.length
    });

    res.status(201).send(file);
  });
});
