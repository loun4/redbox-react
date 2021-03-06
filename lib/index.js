'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styleJs = require('./style.js');

var _styleJs2 = _interopRequireDefault(_styleJs);

var _errorStackParser = require('error-stack-parser');

var _errorStackParser2 = _interopRequireDefault(_errorStackParser);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _lib = require('./lib');

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
var React = _react2['default'];
var Component = _react.Component;
var PropTypes = _react.PropTypes;

__$Getters__['React'] = function () {
  return React;
};

__$Setters__['React'] = function (value) {
  React = value;
};

__$Resetters__['React'] = function () {
  React = _react2['default'];
};

__$Getters__['Component'] = function () {
  return Component;
};

__$Setters__['Component'] = function (value) {
  Component = value;
};

__$Resetters__['Component'] = function () {
  Component = _react.Component;
};

__$Getters__['PropTypes'] = function () {
  return PropTypes;
};

__$Setters__['PropTypes'] = function (value) {
  PropTypes = value;
};

__$Resetters__['PropTypes'] = function () {
  PropTypes = _react.PropTypes;
};

var style = _styleJs2['default'];

__$Getters__['style'] = function () {
  return style;
};

__$Setters__['style'] = function (value) {
  style = value;
};

__$Resetters__['style'] = function () {
  style = _styleJs2['default'];
};

var ErrorStackParser = _errorStackParser2['default'];

__$Getters__['ErrorStackParser'] = function () {
  return ErrorStackParser;
};

__$Setters__['ErrorStackParser'] = function (value) {
  ErrorStackParser = value;
};

__$Resetters__['ErrorStackParser'] = function () {
  ErrorStackParser = _errorStackParser2['default'];
};

var assign = _objectAssign2['default'];

__$Getters__['assign'] = function () {
  return assign;
};

__$Setters__['assign'] = function (value) {
  assign = value;
};

__$Resetters__['assign'] = function () {
  assign = _objectAssign2['default'];
};

var isFilenameAbsolute = _lib.isFilenameAbsolute;
var makeUrl = _lib.makeUrl;
var makeLinkText = _lib.makeLinkText;

__$Getters__['isFilenameAbsolute'] = function () {
  return isFilenameAbsolute;
};

__$Setters__['isFilenameAbsolute'] = function (value) {
  isFilenameAbsolute = value;
};

__$Resetters__['isFilenameAbsolute'] = function () {
  isFilenameAbsolute = _lib.isFilenameAbsolute;
};

__$Getters__['makeUrl'] = function () {
  return makeUrl;
};

__$Setters__['makeUrl'] = function (value) {
  makeUrl = value;
};

__$Resetters__['makeUrl'] = function () {
  makeUrl = _lib.makeUrl;
};

__$Getters__['makeLinkText'] = function () {
  return makeLinkText;
};

__$Setters__['makeLinkText'] = function (value) {
  makeLinkText = value;
};

__$Resetters__['makeLinkText'] = function () {
  makeLinkText = _lib.makeLinkText;
};

var RedBox = (function (_Component) {
  _inherits(RedBox, _Component);

  function RedBox() {
    _classCallCheck(this, RedBox);

    _Component.apply(this, arguments);
  }

  RedBox.prototype.render = function render() {
    var _props = this.props;
    var error = _props.error;
    var filename = _props.filename;
    var editorScheme = _props.editorScheme;
    var useLines = _props.useLines;
    var useColumns = _props.useColumns;

    var _assign = assign({}, style, this.props.style);

    var redbox = _assign.redbox;
    var message = _assign.message;
    var stack = _assign.stack;
    var frame = _assign.frame;
    var file = _assign.file;
    var linkToFile = _assign.linkToFile;

    var frames = ErrorStackParser.parse(error).map(function (f, index) {
      var text = undefined;
      var url = undefined;

      if (index === 0 && filename && !isFilenameAbsolute(f.fileName)) {
        url = makeUrl(filename, editorScheme);
        text = makeLinkText(filename);
      } else {
        var lines = useLines ? f.lineNumber : null;
        var columns = useColumns ? f.columnNumber : null;
        url = makeUrl(f.fileName, editorScheme, lines, columns);
        text = makeLinkText(f.fileName, lines, columns);
      }

      return React.createElement(
        'div',
        { style: frame, key: index },
        React.createElement(
          'div',
          null,
          f.functionName
        ),
        React.createElement(
          'div',
          { style: file },
          React.createElement(
            'a',
            { href: url, style: linkToFile },
            text
          )
        )
      );
    });
    return React.createElement(
      'div',
      { style: redbox },
      React.createElement(
        'div',
        { style: message },
        error.name,
        ': ',
        error.message
      ),
      React.createElement(
        'div',
        { style: stack },
        frames
      )
    );
  };

  _createClass(RedBox, null, [{
    key: 'propTypes',
    value: {
      error: PropTypes.instanceOf(Error).isRequired,
      filename: PropTypes.string,
      editorScheme: PropTypes.string,
      useLines: PropTypes.bool,
      useColumns: PropTypes.bool
    },
    enumerable: true
  }, {
    key: 'displayName',
    value: 'RedBox',
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      useLines: true,
      useColumns: true
    },
    enumerable: true
  }]);

  return RedBox;
})(Component);

var _defaultExport = RedBox;

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