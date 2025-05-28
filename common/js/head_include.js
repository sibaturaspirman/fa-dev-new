/* --------------------------------
	GTM
-------------------------------- */

(function() {

	if (window.dataLayer) {
		if (ga && typeof ga === 'function') {
			ga('send', 'event', 'gtm', 'multi-req', window.location.href, { nonInteraction: true });
		}
		return false;
	}

	var url = location.href;
	var isIndexPage = url.slice(url.length - 1) === '/';
	var indexPageFileNames = ['index.html', 'index.htm', 'index.php'];

	// URL excluded
	var EXCLUDE_URL_LIST = [
		//'http://www.mitsubishielectric.com/aaa/',
		//'http://www.mitsubishielectric.com/bbb/'
	];

	// URL applied
	var TARGET_URL_LIST = [
		'http' 
	];

	for (var i = 0, len = EXCLUDE_URL_LIST.length; i < len; i++) {
		var excludeURL = EXCLUDE_URL_LIST[i];
		var excludeURL_omitted;

		if (!isIndexPage) {
			if (url.indexOf(excludeURL) === 0) {
				return;
			}
		} else {
			for (var ni = 0, nlen = indexPageFileNames.length; ni < nlen; ni++) {
				if (excludeURL.indexOf(indexPageFileNames[ni]) !== -1) {
					excludeURL_omitted = excludeURL.replace(indexPageFileNames[ni], '');
					if (url === excludeURL || url === excludeURL_omitted) {
						return;
					}
				} else {
					if (url.indexOf(excludeURL) === 0) {
						return;
					}
				}
			}
		}
	}

	for (var i = 0, len = TARGET_URL_LIST.length; i < len; i++) {
		var targetURL = TARGET_URL_LIST[i];
		var targetURL_omitted;

		if (!isIndexPage) {
			if (url.indexOf(targetURL) === 0) {
				callGTM();
				return;
			}
		} else {
			for (var ni = 0, nlen = indexPageFileNames.length; ni < nlen; ni++) {
				if (targetURL.indexOf(indexPageFileNames[ni]) !== -1) {
					targetURL_omitted = targetURL.replace(indexPageFileNames[ni], '');
					if (url === targetURL || url === targetURL_omitted) {
						callGTM();
						return;
					}
				} else {
					if (url.indexOf(targetURL) === 0) {
						callGTM();
						return;
					}
				}
			}
		}
	}

	// Exec GTM
	function callGTM() {
		// Google Tag Manager
		(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-T8W5H4');
		// End Google Tag Manager
	}
})();
