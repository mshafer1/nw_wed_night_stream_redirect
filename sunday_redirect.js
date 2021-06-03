var expiration_date = new Date(2021, 8, 4)  // the date that the urls here end
var version = "1.0.9"
var d = new Date(); // get the current date

page_data = {
}

// js uses 0 indexed months, 5 = June, 6 = July, 7 = August, 8 = September



page_data[new Date(2021, 4, 30)] = 'https://youtu.be/gELP5CflPHE'

// 2021 Q2
page_data[new Date(2021, 5, 6)] = 'https://youtu.be/ZTAKNPZOiIA'
page_data[new Date(2021, 5, 13)] = 'https://youtu.be/2mN9XhulpQg'
page_data[new Date(2021, 5, 20)] = 'https://youtu.be/UwI3vj7fnNQ'
page_data[new Date(2021, 5, 27)] = 'https://youtu.be/TDZ99JO6pik'
page_data[new Date(2021, 6, 4)] = 'https://youtu.be/loS9wsS_BWM'
page_data[new Date(2021, 6, 11)] = 'https://youtu.be/j0fU_26iCzQ'
page_data[new Date(2021, 6, 18)] = 'https://youtu.be/_dWhDtgd4vU'
page_data[new Date(2021, 6, 25)] = 'https://youtu.be/W5VgsL2JJZk'
page_data[new Date(2021, 7, 1)] = 'https://youtu.be/jUOzFU-godc'
page_data[new Date(2021, 7, 8)] = 'https://youtu.be/w7TZIG14Cas'
page_data[new Date(2021, 7, 15)] = 'https://youtu.be/bBChlFpciCw'
page_data[new Date(2021, 7, 22)] = 'https://youtu.be/2ncUMo3f1fs'
page_data[new Date(2021, 7, 29)] = 'https://youtu.be/u5d3hEwL3ms'


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


function redirection(d) {
  try {
    var stream_link = get_stream_link(d);
  } catch (error) {
    // out of date, prompt? reload?
    var reload = confirm(`This page is out of date (expired on ${expiration_date.toLocaleDateString()}). Would you like to refresh to get the latest version?`);
    console.log("Reload: ", reload)
    if (reload) {
      window.location.reload(true); // perform a hard reload to empty cache
    } else {
      return;
    }
  }

  try {
	  window.setTimeout(function () { window.location.href = stream_link; }, 4000);
  } catch (error) {
    // window must not be defined, just pass
  }
}

console.log(`Redirect link version: ${version}`)
redirection(d)

try {
	// from https://stackoverflow.com/a/11279639
	// if module is availble, we must be getting included via a 'require', export methods
	var exports = module.exports = {};

	exports.get_stream_link = get_stream_link;
	exports.expiration_date = expiration_date;
} catch (error) {
	// pass
}
