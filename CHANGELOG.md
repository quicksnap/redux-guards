# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="0.0.1"></a>
## 0.0.1 (2018-01-15)


### Bug Fixes

* **build:** allow first-release command ([10294c5](https://www.github.com/quicksnap/redux-guards/commit/10294c5))
* **build:** correctly setup uglify options ([6c0f4b2](https://www.github.com/quicksnap/redux-guards/commit/6c0f4b2))
* always set strict versions via npm or yarn ([eee2150](https://www.github.com/quicksnap/redux-guards/commit/eee2150))
* **build:** fix release script task ([49ca3ba](https://www.github.com/quicksnap/redux-guards/commit/49ca3ba))
* remove dot files from gitignore ([e292c53](https://www.github.com/quicksnap/redux-guards/commit/e292c53))
* **lint:** remove rules clashing with prettier ([40e1116](https://www.github.com/quicksnap/redux-guards/commit/40e1116))
* add *.log to gitignore/npmignore ([502ab00](https://www.github.com/quicksnap/redux-guards/commit/502ab00))
* add back npm publish to release script ([378d582](https://www.github.com/quicksnap/redux-guards/commit/378d582))
* make tests work on windows ([5650754](https://www.github.com/quicksnap/redux-guards/commit/5650754))
* normalize umd bundle name after scope addition ([73ab65f](https://www.github.com/quicksnap/redux-guards/commit/73ab65f))
* **npm-scripts:** rename commit to cz so husky wont run precommit twice ([248a570](https://www.github.com/quicksnap/redux-guards/commit/248a570))
* **npm-scripts:** typo in pre release script name ([8f5fae4](https://www.github.com/quicksnap/redux-guards/commit/8f5fae4))
* **npm-scripts:** use proper npm variable for targeting main path in 'size' command ([7fc44b1](https://www.github.com/quicksnap/redux-guards/commit/7fc44b1))
* **precommit:** properly call prettier ([9d14f0f](https://www.github.com/quicksnap/redux-guards/commit/9d14f0f))
* **ts-lint:** add tslint-config-prettier so tslint doesn't clash with prettier ([10a8524](https://www.github.com/quicksnap/redux-guards/commit/10a8524))


### Features

* **build:** add environment aware builds with env helpers ([cd87599](https://www.github.com/quicksnap/redux-guards/commit/cd87599))
* **build:** update to webpack 3 with scope hoisting + enable experimental flat esm bundle ([#3](https://www.github.com/quicksnap/redux-guards/issues/3)) ([baa63ba](https://www.github.com/quicksnap/redux-guards/commit/baa63ba)), closes [#2](https://www.github.com/quicksnap/redux-guards/issues/2)
* **build:** use 3 new standard formats for shipping libraries ([fdd413e](https://www.github.com/quicksnap/redux-guards/commit/fdd413e))
* add docs generation via typedoc ([b59f2b6](https://www.github.com/quicksnap/redux-guards/commit/b59f2b6))
* **lint:** add ordered-imports rule ([d6d0eff](https://www.github.com/quicksnap/redux-guards/commit/d6d0eff))
* add unit testing and coverage support via jest ([0551a52](https://www.github.com/quicksnap/redux-guards/commit/0551a52))
* **npm-scripts:** run only tests for affected files in prepush and exit immediately if some tests f ([d4316b4](https://www.github.com/quicksnap/redux-guards/commit/d4316b4))
* **scripts:** add ability to use --first-release on release script ([c94694a](https://www.github.com/quicksnap/redux-guards/commit/c94694a))
* **scripts:** add preflight check what files will be published ([71a615b](https://www.github.com/quicksnap/redux-guards/commit/71a615b))
* **scripts:** add size script to get gzipped build size for umd bundle ([d25138a](https://www.github.com/quicksnap/redux-guards/commit/d25138a))
* **ts-lint:** provide nice error output ([c66b4f7](https://www.github.com/quicksnap/redux-guards/commit/c66b4f7))
* add strong type checking ([860e500](https://www.github.com/quicksnap/redux-guards/commit/860e500))
* **tsc:** enable esnext modules for import() support ([d0261c4](https://www.github.com/quicksnap/redux-guards/commit/d0261c4))
* **vscode:** add vscode settings nad recommendet plugins ([0f5fc80](https://www.github.com/quicksnap/redux-guards/commit/0f5fc80))
* **webpack:** determine the name library name for umd build from package json ([8d970bd](https://www.github.com/quicksnap/redux-guards/commit/8d970bd))
* migrate to prettier and bump deps ([999043e](https://www.github.com/quicksnap/redux-guards/commit/999043e))



<a name="0.0.1"></a>

## [0.0.1](https://www.github.com/quicksnap/redux-guards/compare/v1.7.0...v0.0.1) (2018-01-15)
