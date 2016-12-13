# gulp-clean-compiled-typescript
Gulp plugin that cleans compiled output from typescript files (generated .js, js.map and .d.ts files)

It also supports .tsx files.

## Install

```
$ npm install --save-dev gulp-clean-compiled-typescript
```

## What it deletes

The plugin only supports deleting compiled files with the same name as the TypeScript file that are adjacent to said file.

That means that if you send in a file with the following filename:
```
/some/path/some-file.ts
```

The following files will be deleted (if they exist):
```
/some/path/some-file.js
/some/path/some-file.js.map
/some/path/some-file.d.ts
```

If you by accident send in non-TypeScript files, they will completely ignored.

## Example

You send in the typescript files which have compiled files.

```js
var cleanCompiledTypeScript = require('gulp-clean-compiled-typescript');

gulp.task('default', function () {
	return gulp.src('./app/**/*.ts')
        .pipe(cleanCompiledTypeScript());
});
```
