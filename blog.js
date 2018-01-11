//TODO: Refaktorisati da se iscitavanja bloga rade iz fajl sistema -> blogs.json
var jsonfile = require('jsonfile');

exports.getBlogEntries = function () {
	return jsonfile.readFileSync('entries.json');
}

exports.getBlogEntry = function (id) {
	var entries = jsonfile.readFileSync('entries.json');
	for (var i = 0; i < entries.length; i++) {
		if (entries[i].id == id) return entries[i];
	}
}

exports.saveEntries = function (newEntries) {
		jsonfile.writeFileSync('entries.json', newEntries);
}
