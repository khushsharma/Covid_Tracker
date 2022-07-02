function geoplugin_request() { return '49.36.186.90';} 
function geoplugin_status() { return '200';} 
function geoplugin_credit() { return 'Some of the returned data includes GeoLite data created by MaxMind, available from <a href=\'http://www.maxmind.com\'>http://www.maxmind.com</a>.';} 
function geoplugin_delay() { return '2ms';} 
function geoplugin_city() { return 'Lucknow';} 
function geoplugin_region() { return 'Uttar Pradesh';} 
function geoplugin_regionCode() { return 'UP';} 
function geoplugin_regionName() { return 'Uttar Pradesh';} 
function geoplugin_areaCode() { return '';} 
function geoplugin_dmaCode() { return '';} 
function geoplugin_countryCode() { return 'IN';} 
function geoplugin_countryName() { return 'India';} 
function geoplugin_inEU() { return 0;} 
function geoplugin_euVATrate() { return ;} 
function geoplugin_continentCode() { return 'AS';} 
function geoplugin_latitude() { return '26.8756';} 
function geoplugin_longitude() { return '80.9115';} 
function geoplugin_locationAccuracyRadius() { return '200';} 
function geoplugin_timezone() { return 'Asia/Kolkata';} 
function geoplugin_currencyCode() { return 'INR';} 
function geoplugin_currencySymbol() { return '&#8377;';} 
function geoplugin_currencySymbol_UTF8() { return '₹';} 
function geoplugin_currencyConverter(amt, symbol) { 
	if (!amt) { return false; } 
	var converted = amt * 78.9509; 
	if (converted <0) { return false; } 
	if (symbol === false) { return Math.round(converted * 100)/100; } 
	else { return '&#8377;'+(Math.round(converted * 100)/100);} 
	return false; 
} 