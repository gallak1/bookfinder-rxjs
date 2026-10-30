# Bookfinder RxJS

Aplicação de busca de livros desenvolvida para praticar o uso avançado de **RxJS com Signals no Angular**. Ela consulta a API do Google Books e apresenta capas, detalhes e sinopses dos livros encontrados.

> Este projeto usa **Angular 22**, TypeScript e Angular CLI. Não usa React 19 nem Vite.

## Aprendizados aplicados

- **Estado assíncrono com RxJS e Signals:** a busca é um fluxo reativo, e `toSignal` integra os resultados do Observable ao template Angular.
- **Consumo de API com HttpClient:** um serviço Angular faz as requisições HTTP à API do Google Books e trabalha com os dados retornados.
- **Pesquisa reativa com RxJS:** `startWith` inicia o fluxo com o valor atual do campo; `debounceTime` aguarda a digitação; `distinctUntilChanged` evita pesquisas repetidas; `switchMap` troca a requisição anterior pela mais recente; `map` transforma os dados para a interface; `catchError` trata falhas. `tap` pode ser usado para efeitos colaterais, como inspecionar respostas sem alterá-las, e há um exemplo comentado no serviço.
- **Tipagem com TypeScript:** modelos e tipos são usados para representar os dados da API, os livros e os resultados, tornando o código mais claro e ajudando a detectar erros durante o desenvolvimento.

## Tecnologias

- Angular 22
- TypeScript
- RxJS
- Angular Signals
- Angular HttpClient
- API do Google Books
- Vitest para testes unitários

## Requisitos

- Node.js compatível com a versão do Angular CLI do projeto
- npm

## Executar localmente

Instale as dependências e inicie o servidor de desenvolvimento:

```bash
npm install
npm run start
```

Abra [http://localhost:4200](http://localhost:4200). A aplicação recarrega automaticamente quando os arquivos são alterados.

## Testes

Execute os testes unitários com:

```bash
npm test
```

## Build e publicação

Gere a versão de produção:

```bash
npm run build
```

O build é gerado em `dist/bookfinder-rxjs`. Como o projeto está configurado com renderização no servidor (SSR), publique em um ambiente com suporte a Node.js. Após instalar as dependências de produção e gerar o build, inicie o servidor SSR com:

```bash
npm run serve:ssr:bookfinder-rxjs
```

Configure a plataforma de hospedagem para executar esse comando e direcionar o tráfego para a porta disponibilizada pelo ambiente. Também é possível publicar somente os arquivos estáticos em uma hospedagem estática, mas isso requer ajustar a configuração do build para desativar SSR.
