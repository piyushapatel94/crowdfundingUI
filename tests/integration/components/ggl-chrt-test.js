import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ggl-chrt', 'Integration | Component | ggl chrt', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ggl-chrt}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ggl-chrt}}
      template block text
    {{/ggl-chrt}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
