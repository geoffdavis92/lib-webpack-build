/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// index.js

	// Modules
	    var math = __webpack_require__(1)
	    var url = __webpack_require__(2)
	    var router = __webpack_require__(3)
	    var rConfig = __webpack_require__(3).config

	// Logic
	    console.log(url.path(), ' ', url.domain(), ' ', url.pageType())
	    console.log(math.max(1,2,3,4))
	    console.log(math.min(4,3,2,1))
	    console.log(math.diff(50,202))
	    
	    router.applyRoutes([
	        {
	            route: '/',
	            filename: 'index.html',
	            query: '?token=0ao3jr8923hf'
	        }
	    ])

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict"; // math module
	module.exports={round:function round(){var n=arguments.length<=0||arguments[0]===undefined?0:arguments[0];var c=arguments.length<=1||arguments[1]===undefined?1:arguments[1];return Math.round(n/c)*c;},max:function max(){for(var _len=arguments.length,series=Array(_len),_key=0;_key<_len;_key++){series[_key]=arguments[_key];}var max=0;for(var i=0;i<series.length;i++){if(series[i]>max){max=series[i];}}return max;},min:function min(){for(var _len2=arguments.length,series=Array(_len2),_key2=0;_key2<_len2;_key2++){series[_key2]=arguments[_key2];}var min=undefined;for(var i=0;i<series.length;i++){if(!min||series[i]<min){min=series[i];}}return min;},diff:function diff(n1,n2,err){if(err)throw "diff() only takes two arguments; extra arg \""+err+"\"";if(!err&&n1<n2)return n2-n1;else return n1-n2;}};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict'; // url module
	module.exports={path:function path(){return window.location.href.toString();},domain:function domain(){if(window.location.href.indexOf('https')>=0){return window.location.href.split(/https:\/\//)[1].split('/')[1];}else {return window.location.href.split(/http:\/\//)[1].split('/')[1];}},pageType:function pageType(){return window.location.href.split(/:\/\//)[1].split('/')[1].split('.')[1];},get:function get(url){var ctx=arguments.length<=1||arguments[1]===undefined?true:arguments[1];if(ctx){window.open(''+url,'_self');}else {window.open('http://'+url,'_self');}}};

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict'; // router module
	module.exports={config:[{route:'/',filename:'index.html'}],acceptedFileExt:['html'],applyRoutes:function applyRoutes(appRoutes,queries){var pageHTML=document.body.innerHTML;var queryStr="";if(queries){queryStr="?";for(var i in queries){queryStr+=i+'='+queries[i]+'&';}queryStr=queryStr.substr(0,queryStr.length-1);}for(var n in appRoutes){pageHTML=pageHTML.replace('href="'+appRoutes[n].route+'"','href="'+(appRoutes[n].filename+appRoutes[n].query)+queryStr+'"'); //             console.log(pageHTML,` href="${appRoutes[n].route}"`,`href="${appRoutes[n].filename}${queryStr}"`)   
	}return document.body.innerHTML=pageHTML;}};

/***/ }
/******/ ]);