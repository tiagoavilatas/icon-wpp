const sheets = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1_e0pK9oa87WuisLtMZxU7LRLD3ISOK8cGXgDNB9272I/edit?pli=1#gid=0");
const sheet = sheets.getSheetByName("bd");

function doPost(e){
  let data = e && e.parameter ? e.parameter : {};
  sheet.appendRow([data.nome,data.telefone]) 

  // no final da função doPost, adicione o seguinte código:
var result = {success: true, message: "Obrigado pelo envio!"};

// Atrasa a execução do redirecionamento em 3 segundos (3000 milissegundos)
  Utilities.sleep(3000);

  // Redireciona para a página desejada
  return HtmlService.createHtmlOutput('<script>window.location.href = "https://www.butia.rs.gov.br";</script>');
}