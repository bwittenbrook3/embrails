import { moduleFor, test } from 'ember-qunit';

moduleFor('route:posts/hello-world', 'Unit | Route | posts/hello world', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
