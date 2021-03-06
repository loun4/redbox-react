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
var filenameWithoutLoaders = function filenameWithoutLoaders(filename) {
  var index = filename.lastIndexOf('!');

  return index < 0 ? filename : filename.substr(index + 1);
};

var _filenameWithoutLoaders = filenameWithoutLoaders;

__$Getters__['filenameWithoutLoaders'] = function () {
  return filenameWithoutLoaders;
};

__$Setters__['filenameWithoutLoaders'] = function (value) {
  exports.filenameWithoutLoaders = filenameWithoutLoaders = value;
};

__$Resetters__['filenameWithoutLoaders'] = function () {
  exports.filenameWithoutLoaders = filenameWithoutLoaders = _filenameWithoutLoaders;
};

exports.filenameWithoutLoaders = _filenameWithoutLoaders;
var filenameHasLoaders = function filenameHasLoaders(filename) {
  var actualFilename = filenameWithoutLoaders(filename);

  return actualFilename !== filename;
};

var _filenameHasLoaders = filenameHasLoaders;

__$Getters__['filenameHasLoaders'] = function () {
  return filenameHasLoaders;
};

__$Setters__['filenameHasLoaders'] = function (value) {
  exports.filenameHasLoaders = filenameHasLoaders = value;
};

__$Resetters__['filenameHasLoaders'] = function () {
  exports.filenameHasLoaders = filenameHasLoaders = _filenameHasLoaders;
};

exports.filenameHasLoaders = _filenameHasLoaders;
var filenameHasSchema = function filenameHasSchema(filename) {
  return (/^[\w]+\:/.test(filename)
  );
};

var _filenameHasSchema = filenameHasSchema;

__$Getters__['filenameHasSchema'] = function () {
  return filenameHasSchema;
};

__$Setters__['filenameHasSchema'] = function (value) {
  exports.filenameHasSchema = filenameHasSchema = value;
};

__$Resetters__['filenameHasSchema'] = function () {
  exports.filenameHasSchema = filenameHasSchema = _filenameHasSchema;
};

exports.filenameHasSchema = _filenameHasSchema;
var isFilenameAbsolute = function isFilenameAbsolute(filename) {
  var actualFilename = filenameWithoutLoaders(filename);

  if (actualFilename.indexOf('/') === 0) {
    return true;
  }

  return false;
};

var _isFilenameAbsolute = isFilenameAbsolute;

__$Getters__['isFilenameAbsolute'] = function () {
  return isFilenameAbsolute;
};

__$Setters__['isFilenameAbsolute'] = function (value) {
  exports.isFilenameAbsolute = isFilenameAbsolute = value;
};

__$Resetters__['isFilenameAbsolute'] = function () {
  exports.isFilenameAbsolute = isFilenameAbsolute = _isFilenameAbsolute;
};

exports.isFilenameAbsolute = _isFilenameAbsolute;
var makeUrl = function makeUrl(filename, scheme, line, column) {
  var actualFilename = filenameWithoutLoaders(filename);

  if (filenameHasSchema(filename)) {
    return actualFilename;
  }

  var url = 'file://' + actualFilename;

  if (scheme) {
    url = scheme + '://open?url=' + url;

    if (line && actualFilename === filename) {
      url = url + '&line=' + line;

      if (column) {
        url = url + '&column=' + column;
      }
    }
  }

  return url;
};

var _makeUrl = makeUrl;

__$Getters__['makeUrl'] = function () {
  return makeUrl;
};

__$Setters__['makeUrl'] = function (value) {
  exports.makeUrl = makeUrl = value;
};

__$Resetters__['makeUrl'] = function () {
  exports.makeUrl = makeUrl = _makeUrl;
};

exports.makeUrl = _makeUrl;
var makeLinkText = function makeLinkText(filename, line, column) {
  var text = filenameWithoutLoaders(filename);

  if (line && text === filename) {
    text = text + ':' + line;

    if (column) {
      text = text + ':' + column;
    }
  }

  return text;
};
var _makeLinkText = makeLinkText;

__$Getters__['makeLinkText'] = function () {
  return makeLinkText;
};

__$Setters__['makeLinkText'] = function (value) {
  exports.makeLinkText = makeLinkText = value;
};

__$Resetters__['makeLinkText'] = function () {
  exports.makeLinkText = makeLinkText = _makeLinkText;
};

exports.makeLinkText = _makeLinkText;
exports.__GetDependency__ = __GetDependency__;
exports.__get__ = __GetDependency__;
exports.__Rewire__ = __Rewire__;
exports.__set__ = __Rewire__;
exports.__ResetDependency__ = __ResetDependency__;
exports.__RewireAPI__ = __RewireAPI__;
exports['default'] = __RewireAPI__;