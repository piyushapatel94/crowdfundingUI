import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bs-navigationbar', 'Integration | Component | bs navigationbar', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bs-navigationbar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bs-navigationbar}}
      template block text
    {{/bs-navigationbar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
