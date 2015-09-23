ape-installing
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/ape-repo/ape-installing
[bd_travis_url]: http://travis-ci.org/ape-repo/ape-installing
[bd_travis_shield_url]: http://img.shields.io/travis/ape-repo/ape-installing.svg?style=flat
[bd_license_url]: https://github.com/ape-repo/ape-installing/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/ape-repo/ape-installing
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/ape-repo/ape-installing.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/ape-repo/ape-installing.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/ape-repo/ape-installing
[bd_gemnasium_shield_url]: https://gemnasium.com/ape-repo/ape-installing.svg
[bd_npm_url]: http://www.npmjs.org/package/ape-installing
[bd_npm_shield_url]: http://img.shields.io/npm/v/ape-installing.svg?style=flat
[bd_bower_badge_url]: https://img.shields.io/bower/v/ape-installing.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

ape framework module for installing modules.

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>


<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/readme/01.Installation.md.hbs" Start -->

<a name="section-doc-readme-01-installation-md"></a>
Installation
-----

```bash
$ npm install ape-installing --save-dev
```

<!-- Section from "doc/readme/01.Installation.md.hbs" End -->

<!-- Section from "doc/readme/02.Usage.md.hbs" Start -->

<a name="section-doc-readme-02-usage-md"></a>
Usage
---------

### Install a Module Unless Installed globally.

```javascript
var apeInstalling = require('ape-installing');

apeInstalling.unlessGlobal('mocha', function (err) {
    /*..*/
});
```
#### Options for unlessGlobal

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| cwd | string | process.cwd() | Working directory path. |
| bin | string | name | Name of bin. |
| save | boolean | false | Save to package.json |
| saveDev | boolean | false | Save as dev to package.json |
| global | boolean | false | Save as global module. |
<!-- Section from "doc/readme/02.Usage.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/ape-repo/ape-installing/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------


<!-- Links End -->
