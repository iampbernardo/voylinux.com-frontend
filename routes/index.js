var express = require('express');
var router = express.Router();

function renderApp(req, res) {
  res.render(
    'app',
    {
      app: 'This will be content from my WordPress installation',
      metaContent : '¿Quién ha dicho que quiero ser normal'
    }
  );
}

router.get('/*', renderApp);

module.exports = router;
