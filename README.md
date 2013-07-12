
# weekNo
[![Build Status](https://travis-ci.org/sideshowcoder/week_no.png?branch=master)](https://travis-ci.org/sideshowcoder/week_no)

Calculate the week number for a given date

This module extends the Date.prototype, I know don't do this, whatever. If you
need week numbers I think it's clean this way.

By default weeks are numberd based on 1970-1-5 (the first monday of 1970, as
this presents the first week.

# example

``` js
require('week_no');
new Date(1971, 0, 5).weekNo() # => 52
new Date(1972, 0, 5).weekNo() # => 104
```


# methods

``` js
var subdir = require('subdir')
```

## new Date(1970, 0, 5).weekNo()

Return a the number of weeks since `1970-1-5`.

# install

With [npm](https://npmjs.org) do:

```
npm install week_no
```

# license

BSD

