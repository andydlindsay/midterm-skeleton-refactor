const db = require('../connect');

const getWidgets = () => {
  return db.query('SELECT * FROM widgets')
    .then(data => {
      const widgets = data.rows;
      return widgets;
    });
};

const getWidgetById = (id) => {
  return db.query('SELECT * FROM widgets WHERE id = $1', [id])
    .then(data => {
      const widget = data.rows[0];
      return widget;
    });
};

module.exports = {
  getWidgets,
  getWidgetById
};
