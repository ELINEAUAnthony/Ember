'use strict';

define("apprentissage/tests/acceptance/super-test-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Acceptance | super test', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('visiting /', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.equal((0, _testHelpers.currentURL)(), '/');
      assert.dom('nav').exists();
      assert.dom('h1').hasText('SuperRentals');
      assert.dom('h2').hasText('Welcome to Super Rentals!');
      assert.dom('.jumbo a.button').hasText('About Us');
      await (0, _testHelpers.click)('.jumbo a.button');
      assert.equal((0, _testHelpers.currentURL)(), '/about');
    });
    (0, _qunit.test)('visiting /about', async function (assert) {
      await (0, _testHelpers.visit)('/about');
      assert.equal((0, _testHelpers.currentURL)(), '/about');
      assert.dom('nav').exists();
      assert.dom('h1').hasText('SuperRentals');
      assert.dom('h2').hasText('About Super Rentals');
      assert.dom('.jumbo a.button').hasText('Contact Us');
      await (0, _testHelpers.click)('.jumbo a.button');
      assert.equal((0, _testHelpers.currentURL)(), '/getting-in-touch');
    });
    (0, _qunit.test)('visiting /getting-in-touch', async function (assert) {
      await (0, _testHelpers.visit)('/getting-in-touch');
      assert.equal((0, _testHelpers.currentURL)(), '/getting-in-touch');
      assert.dom('nav').exists();
      assert.dom('h1').hasText('SuperRentals');
      assert.dom('h2').hasText('Contact Us');
      assert.dom('a.button').hasText('About');
      await (0, _testHelpers.click)('.jumbo a.button');
      assert.equal((0, _testHelpers.currentURL)(), '/about');
    });
    (0, _qunit.test)('navigating using the nav-bar', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.dom('nav').exists();
      assert.dom('nav a.menu-index').hasText('SuperRentals');
      assert.dom('nav a.menu-about').hasText('About');
      assert.dom('nav a.menu-contact').hasText('Contact');
      await (0, _testHelpers.click)('nav a.menu-about');
      assert.equal((0, _testHelpers.currentURL)(), '/about');
      await (0, _testHelpers.click)('nav a.menu-contact');
      assert.equal((0, _testHelpers.currentURL)(), '/getting-in-touch');
      await (0, _testHelpers.click)('nav a.menu-index');
      assert.equal((0, _testHelpers.currentURL)(), '/');
    });
  });
});
define("apprentissage/tests/integration/components/jumbo-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | jumbo', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders the content inside a jumbo header with a tomster', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Jumbo>Hello World</Jumbo>
      */
      {
        id: "10C8cDED",
        block: "{\"symbols\":[],\"statements\":[[5,\"jumbo\",[],[[],[]],{\"statements\":[[0,\"Hello World\"]],\"parameters\":[]}]],\"hasEval\":false}",
        meta: {}
      }));
      assert.dom('.jumbo').exists();
      assert.dom('.jumbo').hasText('Hello World');
      assert.dom('.jumbo .tomster').exists();
    });
  });
});
define("apprentissage/tests/integration/components/map-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | map', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Map />
      */
      {
        id: "n4hG2GE9",
        block: "{\"symbols\":[],\"statements\":[[5,\"map\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Map>
              template block text
            </Map>
          
      */
      {
        id: "dhQmuHqA",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"map\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("apprentissage/tests/integration/components/rental-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | rental', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders information about a rental property', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Rental />
      */
      {
        id: "LsA0MtHE",
        block: "{\"symbols\":[],\"statements\":[[5,\"rental\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.dom('article').hasClass('rental');
      assert.dom('article h3').hasText('Grand Old Mansion');
      assert.dom('article .detail.owner').includesText('Veruca Salt');
      assert.dom('article .detail.type').includesText('Standalone');
      assert.dom('article .detail.location').includesText('San Francisco');
      assert.dom('article .detail.bedrooms').includesText('15');
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
  QUnit.test('components/map.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/map.js should pass ESLint\n\n');
  });
  QUnit.test('components/rental/image.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/rental/image.js should pass ESLint\n\n11:5 - Unexpected console statement. (no-console)');
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
  QUnit.test('apprentissage/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'apprentissage/templates/application.hbs should pass TemplateLint.\n\n');
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
  QUnit.test('integration/components/map-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/map-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/rental-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/rental-test.js should pass ESLint\n\n');
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
