var express = require('express');
var router = express.Router();

function renderApp(req, res) {
  res.render(
    'index',
    {
      title: 'Voylinux'
    }
  );
}

router.get('/*', renderApp);

module.exports = router;
