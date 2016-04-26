# gulp-clean-compiled-typescript
Gulp plugin that cleans compiled output from typescript files (.js + js.map files)

## Install

## What it deletes

The plugin only supports deleting compiled files with the same name as the TypeScript file that are adjacent to said file.

That means that if you send in a file with the following filename:
"/some/path/some-file.ts"

The following files will be deleted:
"/some/path/some-file.js"
"/some/path/some-file.js.map"

## Example

You send in the typescript files which have compiled files.

```js
var cleanCompiledTypeScript = require('gulp-clean-compiled-typescript');

gulp.task('default', function () {
	return gulp.src('./app/**/*.ts')
        .pipe(cleanCompiledTypeScript());
});
```