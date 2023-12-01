"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var loadScript = function loadScript(url, id) {
  return new Promise(function (resolve, reject) {
	var ready = false;
	if (!document) {
	  reject(new Error('Document was not defined'));
	}
	var tag = document.getElementsByTagName('script')[0];
	var script = document.createElement('script');
	script.crossOrigin = '';
	script.id = "".concat(id, "-script");
	script.type = 'text/javascript';
	script.src = url;
	script.onreadystatechange = function () {
	  if (!ready) {
		ready = true;
		resolve(script);
	  }
	};
	script.onload = script.onreadystatechange;
	script.onerror = function (msg) {
	  reject(new Error('Error loading script.'));
	};
	script.onabort = function (msg) {
	  reject(new Error('Script loading aborted.'));
	};
	if (tag.parentNode != null) {
	  //tag.parentNode.insertBefore(script, tag);
	  tag.parentNode.insertBefore(script, tag);
	}
  });
};
var removeScript = function removeScript(id) {
  new Promise(function (resolve, reject) {
	var script = document.getElementById("".concat(id, "-script"));
	if (script) {
	  script.remove();
	  resolve();
	} else {
	  reject(new Error('Error removing script.'));
	}
  });
};
var Geogebra = function Geogebra(props) {
  var refProps = (0, _react.useRef)(props);
  var _refProps$current = refProps.current,
	id = _refProps$current.id,
	LoadComponent = _refProps$current.LoadComponent,
	onReady = _refProps$current.onReady,
	appletOnLoad = _refProps$current.appletOnLoad,
	debug = _refProps$current.debug,
	reloadOnPropChange = _refProps$current.reloadOnPropChange;
  if (!id) {
	id = 'ggb-applet';
  }
  if (!debug) {
	debug = false;
  }
  //If a JSX Component is not given as a prop, use h3 with children
  if (!LoadComponent) {
	LoadComponent = function LoadComponent(_ref) {
	  var children = _ref.children;
	  return /*#__PURE__*/_react["default"].createElement("h3", null, children);
	};
  }
  var url = 'https://geogebra.org/apps/deployggb.js';
  var _useState = (0, _react.useState)(false),
	_useState2 = _slicedToArray(_useState, 2),
	deployggbLoaded = _useState2[0],
	setDeployggbLoaded = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
	_useState4 = _slicedToArray(_useState3, 2),
	loading = _useState4[0],
	setLoading = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
	_useState6 = _slicedToArray(_useState5, 2),
	watchPropsChange = _useState6[0],
	setWatchPropsChange = _useState6[1];
  //gets called by GeoGebra after the Applet is ready
  var onAppletReady = function onAppletReady() {
	if (appletOnLoad) appletOnLoad();
	if (onReady) onReady();
	debug && console.log("Applet with id \"".concat(id, "\" is ready"));
  };
  (0, _react.useEffect)(function () {
	!deployggbLoaded && loadScript(url, id).then(function (script) {
	  debug && console.log("script from \"".concat(url, "\" succesfull loaded into the DOM"));
	  setDeployggbLoaded(true);
	})["catch"](function (err) {
	  return console.error(err);
	});
	return function () {
	  setDeployggbLoaded(false);
	  //removeScript(id);
	  var tag = document.getElementById("".concat(id, "-holder"));
	  if (tag) {
		tag.lastChild.textContent = '';
	  }
	};
  }, []);
  if (reloadOnPropChange) {
	(0, _react.useEffect)(function () {
	  var propsChanged = Object.keys(props).map(function (key) {
		if (typeof refProps.current[key] === 'function' && typeof props[key] === 'function') return false;
		if (_typeof(refProps.current[key]) === 'object' && _typeof(props[key]) === 'object') return false;
		return refProps.current[key] !== props[key];
	  });
	  if (propsChanged.some(function (element) {
		return element === true;
	  })) {
		refProps.current = props;
		setWatchPropsChange(true);
	  }
	}, [props]);
  }
  (0, _react.useEffect)(function () {
	if (window.GGBApplet) {
	  var parameter = JSON.parse(JSON.stringify(refProps.current));
	  parameter.appletOnLoad = onAppletReady;
	  var ggbApp = new window.GGBApplet(parameter, true);
	  ggbApp.inject(id);
	  setLoading(false);
	  setWatchPropsChange(false);
	  debug && console.log("applet with id \"".concat(id, "\" succesfull injected into the DOM"));
	}
	return function () {
	  var tag = document.getElementById("".concat(id, "-holder"));
	  if (tag) {
		tag.lastChild.textContent = '';
	  }
	};
  }, [deployggbLoaded, watchPropsChange]);
  return /*#__PURE__*/_react["default"].createElement("div", {
	id: "".concat(id, "-holder"),
	class: "geogebra-holder",
  }, loading && /*#__PURE__*/_react["default"].createElement(LoadComponent, null, "Loading"), /*#__PURE__*/_react["default"].createElement("div", {
	id: id
	}));
};
Geogebra.defaultProps = {
	autoHeight: true,
	height: 520,
	width: 802,
	scaleContainerClass: 'geogebra-holder',
	appName: 'classic',
	customToolBar: '0 || 1 || 4',
	capturingThreshold: 4,
	showToolBar: false,
	showToolBarHelp: false,
	showAlgebraInput: false,
	showFullscreenButton: true,
	showMenuBar: false,
	showResetIcon: true,
	reloadOnPropChange: false
};
var _default = Geogebra;
exports["default"] = _default;
