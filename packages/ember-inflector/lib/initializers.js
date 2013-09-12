Ember.onLoad('Ember.Application', function(Application) {
  Application.initializer({
    name: "inflector",

    initialize: function(container, application) {
      application.register('service:inflector', Ember.Inflector.inflector, {instantiate: false});
      application.inject('store', 'inflector', 'service:inflector');
      application.inject('serializer', 'inflector', 'service:inflector');
      application.inject('adapter', 'inflector', 'service:inflector');
    }
  });
});