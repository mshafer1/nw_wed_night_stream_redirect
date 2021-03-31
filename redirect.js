var expiration_date = new Date(2021, 4, 1)  // the date that the urls here end
var version = "1.0.6"
var d = new Date(); // get the current date

page_data = {
}

// js uses 0 indexed months, 5 = June, 6 = July, 7 = August, 8 = September

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

// 2020 Q4
page_data[new Date(2020, 11, 9)] = 'https://youtu.be/afRfnEHnBIY';
page_data[new Date(2020, 11, 16)] = 'https://youtu.be/B6g1eCD8HXs';
page_data[new Date(2020, 11, 23)] = 'https://youtu.be/u038j_IwXbc';
page_data[new Date(2020, 11, 30)] = 'https://youtu.be/yBWuWWxa4GI';
page_data[new Date(2021, 0, 6)] = 'https://youtu.be/QGwmtikxRhI';
page_data[new Date(2021, 0, 13)] = 'https://youtu.be/N4r9VeSoUiU';
page_data[new Date(2021, 0, 20)] = 'https://youtu.be/RdZl9FTV0po';
page_data[new Date(2021, 0, 27)] = 'https://youtu.be/CGj-Gw_hbi8';
page_data[new Date(2021, 1, 3)] = 'https://youtu.be/rv7O5iHZ_n4';
page_data[new Date(2021, 1, 10)] = 'https://youtu.be/8nnM5oCw0Jk';
page_data[new Date(2021, 1, 17)] = 'https://youtu.be/vctKAAJOGhA';
page_data[new Date(2021, 1, 24)] = 'https://youtu.be/yN6OOEXr5Ug';
page_data[new Date(2021, 2, 3)] = 'https://youtu.be/iBtTiUE9HX0';

// 2021 Q1
page_data[new Date(2021, 2, 10)] = 'https://youtu.be/ZmKth32nDt0';
page_data[new Date(2021, 2, 17)] = 'https://youtu.be/LK8hnVGddKY';
page_data[new Date(2021, 2, 24)] = 'https://youtu.be/TYuDBublCgw';
page_data[new Date(2021, 2, 31)] = "https://youtu.be/zFq0z1k5a18";
page_data[new Date(2021, 3, 7)] = "https://youtu.be/Z2Y5zEN-kFw";
page_data[new Date(2021, 3, 14)] = "https://youtu.be/B7U293FyIO0";
page_data[new Date(2021, 3, 21)] = "https://youtu.be/NfaISb55iFs";
page_data[new Date(2021, 3, 28)] = "https://youtu.be/2GGznnoDIjc";


function get_stream_link(d) {
	var result = '#';

	for (key in page_data) {
		var d2 = new Date(key)
		if (+d >= +d2) {
			result = page_data[key];
		}
	}

	if (+d >= +(expiration_date)) {
		throw Error("This page is out of date, do not redirect")
	}

	return result;
}

try {
	var table = document.getElementById('link_table');

	for (key in page_data) {
		var then = new Date(key).getTime();
		var now = new Date().getTime();
		var thirtyDaysInMilliseconds = 2592000000;
		if (now - then > thirtyDaysInMilliseconds) { continue; }

		var row = table.insertRow();

		var cell = row.insertCell();
		var text = document.createTextNode(new Date(key).toLocaleDateString())
		cell.appendChild(text)

		var cell = row.insertCell();
		var link = document.createElement("a")
		link.href = page_data[key]
		link.text = page_data[key]
		cell.appendChild(link)
	}
} catch (error) {
	// table doesn't exist??
	console.error(error)
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
