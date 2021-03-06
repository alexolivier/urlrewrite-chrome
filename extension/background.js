(function() {
	'use strict';
	chrome.webRequest.onBeforeRequest.addListener(function(details) {
		if (details.url.indexOf('debug') > -1) {
			return;
		}
		return {
			redirectUrl: details.url.replace("//d3c3cq33003psk.cloudfront.net/", "//opentag.s3.amazonaws.com/").replace("//dd6zx4ibq538k.cloudfront.net/", "//smartserve.s3.amazonaws.com/")
		};
	}, {
		urls: ['*://d3c3cq33003psk.cloudfront.net/*','*://dd6zx4ibq538k.cloudfront.net/*'],
		types: ['script']
	}, ["blocking"]);
})();