var ebml = require('./index.js');
var fs = require('fs');

var decoder = new ebml.Decoder();

decoder.on('Cluster', function(data) {
    console.log(data.name, data);
});
decoder.on('Cluster:end', function(data) {
    console.log(data.name + ':end', data);
});

fs.readFile('media/test.webm', function(err, data) {
    if (err)
        throw err;
    decoder.write(data);
});