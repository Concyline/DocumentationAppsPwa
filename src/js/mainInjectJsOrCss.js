
(function () {
  // Cria e injeta um <script> no final do <body>


  function carregarScript(src, isModule = false) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false; // evitar execução imediata desordenada
    if (isModule) script.type = "module";

    // Espera o DOM estar pronto
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        document.body.appendChild(script);
      });
    } else {
      document.body.appendChild(script);
    }
  }



  // Cria e injeta um <link rel="stylesheet"> no <head>
  function carregarCSS(href) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  }

  // 👉 CSS externos
  //carregarCSS('./src/css/main.css');
  carregarCSS('./css/main.css');

  //carregarCSS('./src/css/loader.css');
  carregarCSS('./css/loader.css');

  //arregarCSS('./src/css/bootstrap.css');
  carregarCSS('./css/bootstrap.css');

  // 👉 JS externos (injetados no final do body)
  carregarScript('https://code.jquery.com/jquery-3.6.0.min.js');
  //carregarScript('./src/js/fetchApi.js');
  carregarScript('./js/fetchApi.js');
})();




/*
(function () {
  // Cria e injeta um <script> no <head>
  function carregarScript(src, isModule = false) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    if (isModule) script.type = "module";
    document.head.appendChild(script);
  }

  // Cria e injeta um <link rel="stylesheet"> no <head>
  function carregarCSS(href) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  }

  // 👉 Dependências JS
  carregarScript('https://code.jquery.com/jquery-3.6.0.min.js');
  //carregarScript('/js/seu-script.js');

  // 👉 CSS externos
  carregarCSS('./css/main.css');
  carregarCSS('./css/loader.css');
})();
*/