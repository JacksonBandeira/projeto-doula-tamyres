# Site Tamyres Lima - Doula

Este é o repositório do site profissional da doula Tamyres Lima, desenvolvido para apresentar seus serviços, informações e contato.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
tamyres-lima-site/
├── assets/
│   ├── imagens/          # Imagens do site (logo, hero, perfil, etc.)
│   └── icones/           # Ícones utilizados
├── css/
│   └── style.css         # Folha de estilos principal do site
├── js/
│   └── script.js         # Arquivo JavaScript para interatividade
├── index.html            # Página inicial
├── doula.html            # Página "O que é Doula"
├── servicos.html         # Página de Serviços
├── beneficios.html        # Página de Benefícios
├── depoimentos.html      # Página de Depoimentos
├── dicas.html            # Página de Dicas
├── contato.html          # Página de Contato
└── readme.md             # Este arquivo de documentação
```

## Como Editar o Projeto no VS Code

Para editar este projeto no VS Code, siga os passos abaixo:

1.  **Baixe o Projeto:** Faça o download de todos os arquivos deste repositório para o seu computador.
2.  **Abra no VS Code:** Abra o VS Code e vá em `File > Open Folder...` (ou `Arquivo > Abrir Pasta...`) e selecione a pasta `tamyres-lima-site` que você baixou.
3.  **Instale a Extensão Live Server (Opcional, mas Recomendado):** Para visualizar suas alterações em tempo real no navegador, instale a extensão "Live Server" no VS Code. Após a instalação, clique com o botão direito no arquivo `index.html` e selecione `Open with Live Server`.

## Documentação e Edição

### HTML (`.html`)

As páginas HTML (`index.html`, `doula.html`, etc.) contêm a estrutura e o conteúdo do site. Você pode editar o texto, adicionar novas seções ou modificar a ordem dos elementos.

-   **Conteúdo:** Procure por tags como `<h1>`, `<h2>`, `<p>`, `<a>`, `<li>` para editar os textos e links.
-   **Estrutura:** As seções são geralmente delimitadas por tags `<section>` com classes específicas (ex: `<section class="hero">`).

### CSS (`css/style.css`)

O arquivo `css/style.css` controla a aparência visual de todo o site. Aqui você pode alterar cores, fontes, tamanhos, espaçamentos e layouts.

-   **Variáveis CSS:** No início do arquivo, você encontrará a seção `:root` com variáveis para cores, fontes e espaçamentos. Alterar essas variáveis afetará o site globalmente.
    ```css
    :root {
      --azul-medio: #4BAABF;
      --fonte-titulo: 'Inclusive Sans', sans-serif;
      /* ... outras variáveis ... */
    }
    ```
-   **Estilos de Componentes:** Cada seção e componente (ex: `.header`, `.hero`, `.cards-grid`, `.card`) possui seus próprios estilos definidos. Você pode ajustar propriedades como `background-color`, `color`, `font-size`, `padding`, `margin`, `display`, `grid-template-columns`, etc.
-   **Responsividade:** As seções `@media` no final do arquivo `style.css` contêm estilos específicos para diferentes tamanhos de tela (mobile, tablet). Certifique-se de verificar e ajustar esses estilos se necessário.

### JavaScript (`js/script.js`)

O arquivo `js/script.js` contém a lógica para funcionalidades interativas, como o menu mobile e o carrossel de depoimentos.

-   **Menu Mobile:** A lógica para abrir e fechar o menu de navegação em dispositivos móveis está aqui.
-   **Carrossel de Depoimentos:** Se houver um carrossel de depoimentos, a funcionalidade de navegação entre eles será controlada por este arquivo.

## Imagens (`assets/imagens/`)

Todas as imagens do site estão localizadas na pasta `assets/imagens/`. Para substituir uma imagem, basta colocar a nova imagem nesta pasta com o mesmo nome do arquivo original, ou atualizar o caminho da imagem no HTML ou CSS se o nome for diferente.

## Deploy do Site

Após realizar as edições, você precisará fazer o deploy do site para que as alterações fiquem visíveis online. Se você estiver usando uma plataforma de hospedagem, siga as instruções específicas dela para fazer o upload dos arquivos atualizados. Geralmente, isso envolve:

1.  Conectar-se ao servidor via FTP ou usar a interface da plataforma.
2.  Fazer o upload de todos os arquivos e pastas do projeto para o diretório raiz do seu domínio (ex: `public_html`, `www`).
3.  Substituir os arquivos existentes pelos novos arquivos editados.

Se precisar de ajuda com o deploy, por favor, me informe a plataforma de hospedagem que você está utilizando. 

---

Qualquer dúvida ou necessidade de suporte, estou à disposição!

