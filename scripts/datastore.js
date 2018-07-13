(function (window) {
  'use strict';
  var App = window.App || {};

  function DataStore(){
    console.log('running the Datastore function');
    this.data = {};
  }

  App.Datastore = DataStore;
  window.App = App;
}) (window);
