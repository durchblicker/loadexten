# Load-Exten

The problem set solved by loadexten is that often time you want you application to load modules from a directory at execution time. This module does this simply and easily.

I personally use it to load individual API components of our API. I simply drop the components into the api folder and point loadexten at it.

## Install

    npm install loadexten

  or

    pushd node_modules/
    git clone https://github.com/phidelta/loadexten.git
    popd

## Usage

    require('load-exten')(folder, extension[, arguments]);
Assume a folder structure such as:

    ./modules/
              javascript.mod
              package.mod/
                          package.json
                          main.js
              folder.mod/
                         index.js
    ./application.js

The code in *application.js* would be:

    var load=require('load-exten');

    load(__dirname+'/modules', '.mod'[, arguments]);

Load-Exten will require everything in the *folder* with the *extension*. The *module.exports* of whatever is loaded needs to be a function, which is called with the *arguments* passed in.

Example for Express:

    var express=require('express');
    var load=require('load-exten');
    var app=express();
    app.get('/', functio(req, res, next) { … }); // Setup stuff directly

    load(__dirname+'/modules', '.mod', app); // Use Load-Exten to add additional routes)

    app.listen(1234);

Example Module:

    module.exports = setup;

    function setup(app) {
      app.get('/', …);
    }

## License

MIT License
-----------

Copyright (C) 2012 Philipp Dunkel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
