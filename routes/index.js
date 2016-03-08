var express = require('express');
var ReactDOMServer = require('react-dom/server');
var router = express.Router();
import React from 'react';
import App from '../components/app';
var app = React.createFactory(App);

const AppString =  ReactDOMServer.renderToString(app({}));
function renderApp(req, res) {
  res.render(
    'app',
    {
      app: AppString,
      metaContent : '¿Quién ha dicho que quiero ser normal'
    }
  );
}

router.get('/*', renderApp);

module.exports = router;
