const ejs = require('ejs');
const renderType = require('../templates/utils/renderType');

module.exports = function render(template, {
  props, data, computed, event, method, slot
}, cb) {
  ejs.renderFile(
    template,
    {
      renderType,
      props,
      data,
      computed,
      event,
      method,
      slot
    },
    cb,
  );
};
