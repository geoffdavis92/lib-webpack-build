"use strict"; // math module
module.exports={round:function round(){var n=arguments.length<=0||arguments[0]===undefined?0:arguments[0];var c=arguments.length<=1||arguments[1]===undefined?1:arguments[1];return Math.round(n/c)*c;},max:function max(){for(var _len=arguments.length,series=Array(_len),_key=0;_key<_len;_key++){series[_key]=arguments[_key];}var max=0;for(var i=0;i<series.length;i++){if(series[i]>max){max=series[i];}}return max;},min:function min(){for(var _len2=arguments.length,series=Array(_len2),_key2=0;_key2<_len2;_key2++){series[_key2]=arguments[_key2];}var min=undefined;for(var i=0;i<series.length;i++){if(!min||series[i]<min){min=series[i];}}return min;},diff:function diff(n1,n2,err){if(err)throw "diff() only takes two arguments; extra arg \""+err+"\"";if(!err&&n1<n2)return n2-n1;else return n1-n2;}};