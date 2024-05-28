# Google Apps Script: Manipulação de Dados e Redirecionamento

Este script do Google Apps Script foi desenvolvido para lidar com solicitações HTTP POST, adicionar dados a uma planilha do Google Sheets específica e redirecionar o usuário para uma URL especificada após uma breve pausa.

## Funcionalidade

1. **Acesso à Planilha:**
   O script acessa um documento do Google Sheets usando a URL fornecida e obtém uma planilha específica dentro desse documento.

2. **Manipulação de Solicitações POST:**
   O script manipula solicitações HTTP POST, extrai parâmetros da solicitação e adiciona uma nova linha à planilha com os dados recebidos.

3. **Atraso e Redirecionamento:**
   Após adicionar os dados à planilha, o script aguarda por 3 segundos e, em seguida, redireciona o usuário para uma URL especificada.
