

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