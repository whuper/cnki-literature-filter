﻿(function() {
	console.log('这是 content-script！');
})();

document.addEventListener('DOMContentLoaded', function()
{
	console.log('DOMContentLoaded');
	/*$( document ).ajaxComplete(function() {
		console.log(666);
	});*/
	// 注入自定义JS
	injectCustomJs();


});


/* document.addEventListener('load', function()
{

});
 */

// 向页面注入JS
function injectCustomJs(jsPath)
{
	jsPath = jsPath || 'js/inject.js';
	var temp = document.createElement('script');
	temp.setAttribute('type', 'text/javascript');
	// 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
	temp.src = chrome.extension.getURL(jsPath);
	temp.onload = function()
	{
		// 放在页面不好看，执行完后移除掉
		this.parentNode.removeChild(this);
	};
	document.body.appendChild(temp);
}
