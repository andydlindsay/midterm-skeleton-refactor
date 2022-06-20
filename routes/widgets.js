/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const widgetQueries = require('../db/queries/widget-queries');

router.get('/', (req, res) => {
  widgetQueries.getWidgets()
    .then(widgets => {
      res.json({ widgets });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get('/:id', (req, res) => {
  const widgetId = req.params.id;
  widgetQueries.getWidgetById(widgetId)
    .then(widget => {
      res.json({ widget });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
