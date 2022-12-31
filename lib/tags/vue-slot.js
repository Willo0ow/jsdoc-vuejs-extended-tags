exports.name = 'vue-slot';

exports.options = {
  canHaveName: true,
  onTagged(doclet, tag) {
    doclet._isVueDoc = true;
    doclet._vueSlot = doclet._vueSlot || [];
    doclet._vueSlot.push(tag.value || {});
  },
};
