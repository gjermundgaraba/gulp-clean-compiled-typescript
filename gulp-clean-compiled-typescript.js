var through = require('through2');
var del = require('del');

function gulpCleanCompiledTypescript() {
    return through.obj(function(file, encoding, callback) {
        var regex = /.(ts|tsx)$/;

        if (regex.test(file.path)) {
            var compiledFile = file.path.replace(regex, '.js');
            var mapFile = file.path.replace(regex, '.js.map');
            var typeInformation = file.path.replace(regex, '.d.ts');

            del.sync([compiledFile, mapFile, typeInformation]);
        }

        callback();
    });
}

module.exports = gulpCleanCompiledTypescript;
