var expiration_date = new Date(2020, 11, 9)  // the date that the urls here end
var version = "1.0.2"
var d = new Date(); // get the current date

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

	// 2020 Q3
	if (+d >= +(new Date(2020, 8, 9))) { result = 'https://youtu.be/GFT_HaI9aKw'; }
	if (+d >= +(new Date(2020, 8, 16))) { result = 'https://youtu.be/KULZo9cCv8o'; }
	if (+d >= +(new Date(2020, 8, 23))) { result = 'https://youtu.be/pNojl09vj-I'; }
	if (+d >= +(new Date(2020, 8, 30))) { result = 'https://youtu.be/DL4o2DSMoxY'; }
	if (+d >= +(new Date(2020, 9, 7))) { result = 'https://youtu.be/drug2qQUIg4'; }
	if (+d >= +(new Date(2020, 9, 14))) { result = 'https://youtu.be/qZ2tgJdcCBI'; }
	if (+d >= +(new Date(2020, 9, 21))) { result = 'https://youtu.be/MsHvSYWRsfA'; }
	if (+d >= +(new Date(2020, 9, 28))) { result = 'https://youtu.be/ttwyaoJDI-0'; }
	if (+d >= +(new Date(2020, 10, 4))) { result = 'https://youtu.be/2t4XiDteBVo'; }
	if (+d >= +(new Date(2020, 10, 11))) { result = 'https://youtu.be/t0cxl38SAqQ'; }
	if (+d >= +(new Date(2020, 10, 18))) { result = 'https://youtu.be/hPnxXC_Atw4'; }
	if (+d >= +(new Date(2020, 10, 25))) { result = 'https://youtu.be/pbsmn4mcOPk'; }
	if (+d >= +(new Date(2020, 11, 2))) { result = 'https://youtu.be/pdyJAHMpsiE'; }


	if (+d >= +(expiration_date)) {
		throw Error("This page is out of date, do not redirect")
	}

	return result;
}


try {
	var stream_link = get_stream_link(d);
} catch (error) {
	// out of date, prompt? reload?
	var reload = confirm(`This page is out of date (expired on ${expiration_date.toLocaleDateString()}). Would you like to refresh to get the latest version?`);
	console.log("Reload: ", reload)
	if (reload) {
		window.location.reload(true); // perform a hard reload to empty cache
	}
}


console.log(`Redirect link version: ${version}`)

try {
	window.setTimeout(function () { window.location.href = stream_link; }, 4000);
} catch (error) {
	// window must not be defined, just pass
}


try {
	// from https://stackoverflow.com/a/11279639
	// if module is availble, we must be getting included via a 'require', export methods
	var exports = module.exports = {};

	exports.get_stream_link = get_stream_link;
	exports.expiration_date = expiration_date;
} catch (error) {
	// pass
}