function get_stream_link(d) {
	// js uses 0 indexed months, 5 = June, 6 = July, 7 = August, 8 = September
	var result = 'https://youtu.be/pIFV0Bhxd_Q';

	if (+d >= +(new Date(2020, 5, 17))) {
		result = 'https://youtu.be/gm-r5A1_nQo';
	}
	if (+d >= +(new Date(2020, 5, 24))) {
		result = 'https://youtu.be/MRL1zs1HxjM';
	}
	if (+d >= +(new Date(2020, 6, 1))) {
		result = 'https://youtu.be/hN8TsLQW89Y';
	}
	if (+d >= +(new Date(2020, 6, 8))) {
		result = 'https://youtu.be/hT2z389scq0';
	}
	if (+d >= +(new Date(2020, 6, 15))) {
		result = 'https://youtu.be/z-IJ2Zx6qek';
	}
	if (+d >= +(new Date(2020, 6, 22))) {
		result = 'https://youtu.be/dnoSOv5mRJs';
	}
	if (+d >= +(new Date(2020, 6, 29))) {
		result = 'https://youtu.be/m2lvNLwrdsc';
	}
	if (+d >= +(new Date(2020, 7, 5))) {
		result = 'https://youtu.be/nGMLSECeynY';
	}
	if (+d >= +(new Date(2020, 7, 12))) {
		result = 'https://youtu.be/-TNoKXCkfbQ';
	}
	if (+d >= +(new Date(2020, 7, 19))) {
		result = 'https://youtu.be/I6Lu0NLteW0';
	}
	if (+d >= +(new Date(2020, 7, 26))) {
		result = 'https://youtu.be/AyI5y0kFiKQ';
	}
	if (+d >= +(new Date(2020, 8, 2))) {
		result = 'https://youtu.be/Kbs9_TZH5DE';
	}

	return result;
}


var d = new Date(); // get the current date
var stream_link = get_stream_link(d);

try {
	window.setTimeout(function () { window.location.href = stream_link; }, 4000);
} catch (error) {
	// window must be undefined, just pass
}


try {
	// from https://stackoverflow.com/a/11279639
	// if module is availble, we must be getting included via a 'require', export methods
	var exports = module.exports = {};

	exports.get_stream_link = get_stream_link;
} catch (error) {
	// pass
}