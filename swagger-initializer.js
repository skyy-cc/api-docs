window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // http://127.0.0.1:5500/json.json
  // https://api.skyy.cc/json.json
  window.ui = SwaggerUIBundle({
    url: "https://api.skyy.cc/json.json",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
