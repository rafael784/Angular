## Visão Geral do Projeto
Sistema que permite a administraçao de computadores em estoque. O sistema deve permitir cadastrar, listar, filtrar, visualizar, alterar e excluir os computadores em estoque.

### Tecnologias
- HTML5

- CSS3
  
- JavaScript
  - TypeScript
  - Angular 4
  - Angular CLI

  ### Clonando o Repositório
Primeiro é preciso que efetue a clonagem do repositório para o seu computador para assim efetuar alterações de código. Mas antes de clonar o repositório é importante que realize um **fork**, ou seja, criar uma cópia do mesmo para o seu github. Para isso basta subir a página e clicar no botão de mesmo nome e aguardar alguns minutos. Depois basta clicar em **clone or download** e copiar a URL do respositório.

Já abrindo o bash do Git para efetuar a clonagem será necessário que digite a seguinte linha de código e informe a URL copiada anteriormente:
``` git
git clone <url-do-repositorio>
```

### Instalando as Dependências
Para instalar as dependências do projeto basta abrir o **Prompt de Comando do Node.js** (caso você esteja no linux, basta utilizar o terminal), acessar a pasta do repositório e inserir o seguinte comando:
``` node
npm install
```

## Servidor de Desenvolvimento
Basicamente você deverá escrever seu código e enquanto você efetua alterações no arquivo é necessário deixar o comando abaixo rodando:
``` node
ng serve
```
O código irá rodar o plugin **serve**, dessa forma gerando um servidor para o desenvolvimento (`http://localhost:4200`) sendo assim toda alteração de código nos arquivos de origem irá recarregar automaticamente a página.

## Outras Informações
- Usei, no lugar do BD, o próprio `localStorage` do navegador.
- Não consegui implementar a tempo a função `EDITAR` no card do produto.
- O filtro da página `catálogo` é feito pela marca do computador.
