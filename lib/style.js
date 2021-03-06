'use strict';

exports.__esModule = true;
var __$Getters__ = [];
var __$Setters__ = [];
var __$Resetters__ = [];

function __GetDependency__(name) {
  return __$Getters__[name]();
}

function __Rewire__(name, value) {
  __$Setters__[name](value);
}

function __ResetDependency__(name) {
  __$Resetters__[name]();
}

var __RewireAPI__ = {
  '__GetDependency__': __GetDependency__,
  '__get__': __GetDependency__,
  '__Rewire__': __Rewire__,
  '__set__': __Rewire__,
  '__ResetDependency__': __ResetDependency__
};
var _defaultExport = {
  redbox: {
    boxSizing: 'border-box',
    fontFamily: 'sans-serif',
    position: 'fixed',
    padding: 10,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    background: 'rgb(204, 0, 0)',
    color: 'white',
    zIndex: 9999,
    textAlign: 'left',
    fontSize: '16px',
    lineHeight: 1.2
  },
  message: {
    fontWeight: 'bold'
  },
  stack: {
    fontFamily: 'monospace',
    marginTop: '2em'
  },
  frame: {
    marginTop: '1em'
  },
  file: {
    fontSize: '0.8em',
    color: 'rgba(255, 255, 255, 0.7)'
  },
  linkToFile: {
    textDecoration: 'none',
    color: 'rgba(255, 255, 255, 0.7)'
  }
};

if (typeof _defaultExport === 'object' || typeof _defaultExport === 'function') {
  Object.defineProperty(_defaultExport, '__Rewire__', {
    'value': __Rewire__,
    'enumberable': false
  });
  Object.defineProperty(_defaultExport, '__set__', {
    'value': __Rewire__,
    'enumberable': false
  });
  Object.defineProperty(_defaultExport, '__ResetDependency__', {
    'value': __ResetDependency__,
    'enumberable': false
  });
  Object.defineProperty(_defaultExport, '__GetDependency__', {
    'value': __GetDependency__,
    'enumberable': false
  });
  Object.defineProperty(_defaultExport, '__get__', {
    'value': __GetDependency__,
    'enumberable': false
  });
  Object.defineProperty(_defaultExport, '__RewireAPI__', {
    'value': __RewireAPI__,
    'enumberable': false
  });
}

exports['default'] = _defaultExport;
exports.__GetDependency__ = __GetDependency__;
exports.__get__ = __GetDependency__;
exports.__Rewire__ = __Rewire__;
exports.__set__ = __Rewire__;
exports.__ResetDependency__ = __ResetDependency__;
exports.__RewireAPI__ = __RewireAPI__;
module.exports = exports['default'];