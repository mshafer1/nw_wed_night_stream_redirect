var expiration_date = new Date(2021, 4, 31)  // the date that the urls here end
var version = "1.0.7"
var d = new Date(); // get the current date

page_data = {
}

// js uses 0 indexed months, 5 = June, 6 = July, 7 = August, 8 = September



// 2021 Q1
// page_data[new Date(2021, 2, 10)] = 'https://youtu.be/ZmKth32nDt0';
// page_data[new Date(2021, 2, 17)] = 'https://youtu.be/LK8hnVGddKY';
// page_data[new Date(2021, 2, 24)] = 'https://youtu.be/TYuDBublCgw';
// page_data[new Date(2021, 2, 31)] = "https://youtu.be/zFq0z1k5a18";
// page_data[new Date(2021, 3, 7)] = "https://youtu.be/Z2Y5zEN-kFw";
// page_data[new Date(2021, 3, 14)] = "https://youtu.be/B7U293FyIO0";
// page_data[new Date(2021, 3, 21)] = "https://youtu.be/NfaISb55iFs";
// page_data[new Date(2021, 3, 28)] = "https://youtu.be/2GGznnoDIjc";
// page_data[new Date(2021, 4, 05)] = "https://youtu.be/K5yGy4BOxDw"
// page_data[new Date(2021, 4, 12)] = "https://youtu.be/6eTeYKuYtQo"
// page_data[new Date(2021, 4, 19)] = "https://youtu.be/GTPdKHE_nQU"
// page_data[new Date(2021, 4, 26)] = "https://youtu.be/H9wLdbGVvm4"


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


function redirection() {
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


try {
	// from https://stackoverflow.com/a/11279639
	// if module is availble, we must be getting included via a 'require', export methods
	var exports = module.exports = {};

	exports.get_stream_link = get_stream_link;
	exports.expiration_date = expiration_date;
} catch (error) {
	// pass
}
