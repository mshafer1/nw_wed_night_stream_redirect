var expiration_date = new Date(2020, 11, 9)  // the date that the urls here end
var version = "1.0.3"
var d = new Date(); // get the current date

page_data = {
}

// 2020 Q2
page_data[new Date(2020, 5, 8)] = 'https://youtu.be/pIFV0Bhxd_Q';
page_data[new Date(2020, 5, 17)] = 'https://youtu.be/gm-r5A1_nQo';
page_data[new Date(2020, 5, 24)] = 'https://youtu.be/MRL1zs1HxjM';
page_data[new Date(2020, 6, 1)] = 'https://youtu.be/hN8TsLQW89Y';
page_data[new Date(2020, 6, 8)] = 'https://youtu.be/hT2z389scq0';
page_data[new Date(2020, 6, 15)] = 'https://youtu.be/z-IJ2Zx6qek';
page_data[new Date(2020, 6, 22)] = 'https://youtu.be/dnoSOv5mRJs';
page_data[new Date(2020, 6, 29)] = 'https://youtu.be/m2lvNLwrdsc';
page_data[new Date(2020, 7, 5)] = 'https://youtu.be/nGMLSECeynY';
page_data[new Date(2020, 7, 12)] = 'https://youtu.be/-TNoKXCkfbQ';
page_data[new Date(2020, 7, 19)] = 'https://youtu.be/I6Lu0NLteW0';
page_data[new Date(2020, 7, 26)] = 'https://youtu.be/AyI5y0kFiKQ';
page_data[new Date(2020, 8, 2)] = 'https://youtu.be/Kbs9_TZH5DE';

// 2020 Q3
page_data[new Date(2020, 8, 9)] = 'https://youtu.be/GFT_HaI9aKw';
page_data[new Date(2020, 8, 16)] = 'https://youtu.be/KULZo9cCv8o';
page_data[new Date(2020, 8, 23)] = 'https://youtu.be/pNojl09vj-I';
page_data[new Date(2020, 8, 30)] = 'https://youtu.be/DL4o2DSMoxY';
page_data[new Date(2020, 9, 7)] = 'https://youtu.be/drug2qQUIg4';
page_data[new Date(2020, 9, 14)] = 'https://youtu.be/qZ2tgJdcCBI';
page_data[new Date(2020, 9, 21)] = 'https://youtu.be/MsHvSYWRsfA';
page_data[new Date(2020, 9, 28)] = 'https://youtu.be/ttwyaoJDI-0';
page_data[new Date(2020, 10, 4)] = 'https://youtu.be/2t4XiDteBVo';
page_data[new Date(2020, 10, 11)] = 'https://youtu.be/t0cxl38SAqQ';
page_data[new Date(2020, 10, 18)] = 'https://youtu.be/hPnxXC_Atw4';
page_data[new Date(2020, 10, 25)] = 'https://youtu.be/pbsmn4mcOPk';
page_data[new Date(2020, 11, 2)] = 'https://youtu.be/pdyJAHMpsiE';

function get_stream_link(d) {
	// js uses 0 indexed months, 5 = June, 6 = July, 7 = August, 8 = September
	var result = '#';

	for (key in page_data) {
		var d2 = new Date(key)
		console.log(d, d2, +d, +d2, "comparison", +d >= +d2, page_data[key])
		// console.log(d)
		if (+d >= +d2) {
			result = page_data[key];
		}
	}

	if (+d >= +(expiration_date)) {
		throw Error("This page is out of date, do not redirect")
	}

	return result;
}

var table = document.getElementById('link_table');

for (key in page_data) {
	var row = table.insertRow();

	var cell = row.insertCell();
	var text = document.createTextNode(new Date(key).toLocaleDateString())
	cell.appendChild(text)

	var cell = row.insertCell();
	var text = document.createTextNode(page_data[key])
	cell.appendChild(text)
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