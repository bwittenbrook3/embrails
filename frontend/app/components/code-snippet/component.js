import Ember from 'ember';
/* globals hljs */
export default Ember.Component.extend({

  didInsertElement() {
    Ember.$('#' + this.elementId + ' pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }
});
