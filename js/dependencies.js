'use strict';
var CACHE_ARGUMENT = document.location.hostname !== '127.0.0.1' ? '' : 'no-cache=' + (new Date()).getTime();
var flavor = function (file) {
  return 'vendor/' + file;
}

require.config({
  urlArgs: CACHE_ARGUMENT,

  paths: {
    jquery: flavor('jquery-1.9.1'),
    'jquery-ui': flavor('jquery-ui-1.10.2'),
    modernizr: flavor('modernizr-2.6.2'),
    moment: flavor('moment-2.0.0'),
    underscore: flavor('underscore-1.4.4'),
    'underscore-string': flavor('underscore.string-2.3.0')
  },

  shim: {
    app: {
      deps: [
        'jquery',
        'jquery-ui',
        'modernizr',
        'moment',
        'underscore',
        'underscore-string']
    },
    'jquery-ui': {
      deps: ['jquery']
    },
    'underscore-string': {
      deps: ['underscore']
    }
  }
});