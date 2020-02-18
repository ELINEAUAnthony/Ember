'use strict';

define("apprentissage/tests/acceptance/super-test-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Acceptance | super test', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('visiting /', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.equal((0, _testHelpers.currentURL)(), '/');
      assert.dom('h2').hasText('Welcome to Super Rentals!');
      assert.dom('.jumbo a.button').hasText('About Us');
      await (0, _testHelpers.click)('.jumbo a.button');
      assert.equal((0, _testHelpers.currentURL)(), '/about');
    });
  });
});
define("apprentissage/tests/integration/components/jumbo-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | jumbo', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Jumbo />
      */
      {
        id: "CdoKM4LF",
        block: "{\"symbols\":[],\"statements\":[[5,\"jumbo\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Jumbo>
              template block text
            </Jumbo>
          
      */
      {
        id: "+2VZDJGX",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"jumbo\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("apprentissage/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
});
define("apprentissage/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('apprentissage/templates/about.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'apprentissage/templates/about.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('apprentissage/templates/contact.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'apprentissage/templates/contact.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('apprentissage/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'apprentissage/templates/index.hbs should pass TemplateLint.\n\n');
  });
});
define("apprentissage/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('acceptance/super-test-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/super-test-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/jumbo-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/jumbo-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
define("apprentissage/tests/test-helper", ["apprentissage/app", "apprentissage/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define('apprentissage/config/environment', [], function() {
  var prefix = 'apprentissage';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('apprentissage/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
