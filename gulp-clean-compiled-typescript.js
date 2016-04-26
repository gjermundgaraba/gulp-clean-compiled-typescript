var through = require('through2');
var del = require('del');

function gulpCleanCompiledTypescript() {
    return through.obj(function(file, encoding, callback) {
        if (/.ts$/.test(file.path)) {
            var compiledFile = file.path.replace(/.ts$/, '.js');
            var mapFile = file.path.replace(/.ts$/, '.js.map');

            del.sync([compiledFile, mapFile]);
        }

        callback();
    });
}

module.exports = gulpCleanCompiledTypescript;