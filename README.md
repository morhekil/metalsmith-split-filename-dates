metalsmith-split-filename-date
====

Enrich file metadata with date info present in source filenames,
and the rest of the filename.

When paired with permalinks plugin, it allows to convert filename
`2020-01-01-some-file` into a Jekyll-like "pretty" final path
`2020/01/02/some-file`.

Installation
----

`npm install --save-dev metalsmith-split-filename-date`

Usage
----

Set the date in the filename:

    2014-11-04-file.md

Then in your code:

    var Metalsmith = require('Metalsmith');
    var splitFilenameDate = require('metalsmith-split-filename-date');
    Metalsmith(__dirname)
        .use(splitFilenameDate())
        .build();

CLI Usage
----

    {
        "plugins": {
            "metalsmith-split-filename-date": {}
        }
    }


License
----

MIT
