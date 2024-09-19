# ReproDevServerError

Reproing the 'Maximum call stack size exceeded' when using the Nx webpack plugins with `buildLibsFromSource` option.

Clone repo and run `npm i`.
Run `npx nx serve repro-dev-server-error-app --verbose`.
Observe the following error:
```
RangeError: Maximum call stack size exceeded
    at new FastBuffer (node:internal/buffer:960:14)
    at allocate (node:buffer:457:15)
    at Function.allocUnsafe (node:buffer:427:10)
    at tryCreateBuffer (node:fs:439:21)
    at Object.readFileSync (node:fs:482:14)
    at readFileSync (/Users/zgonzales/repro-dev-server-error/node_modules/tsconfig-paths/lib/tsconfig-loader.js:85:19)
    at loadTsconfig (/Users/zgonzales/repro-dev-server-error/node_modules/tsconfig-paths/lib/tsconfig-loader.js:90:24)
    at loadTsconfigFromExtends (/Users/zgonzales/repro-dev-server-error/node_modules/tsconfig-paths/lib/tsconfig-loader.js:134:18)
    at loadTsconfig (/Users/zgonzales/repro-dev-server-error/node_modules/tsconfig-paths/lib/tsconfig-loader.js:108:20)
    at loadTsconfigFromExtends (/Users/zgonzales/repro-dev-server-error/node_modules/tsconfig-paths/lib/tsconfig-loader.js:134:18)
```