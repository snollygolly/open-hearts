# :heart: OpenHearts [![Build Status](https://travis-ci.org/snollygolly/open-hearts.svg?branch=master)](https://travis-ci.org/snollygolly/open-hearts)
An open source version of the card game Hearts.

## Prerequisites
* [Node.js](https://nodejs.org/en/) (Version 5 and up recommended)

### Installation

* Clone down the repository.
```
git clone https://github.com/snollygolly/open-hearts.git
```

* Install packages (from inside the open-hearts folder).
```
npm install
```

* Create your config.  There's a `config.json.example` file in the root.  Edit it to include all your values for the site.  Save it as `config.json` and leave it in the root.

* If you want to use Google Analytics, set `config.site.analytics` to your Tracking ID and make sure the analytics partial (analytics.hbs) contains the correct Universal Analytics tracking code.  If you don't want to use Google Analytics, remove that property or set it to false.

* Start it up.
```
npm start
```

* Enjoy!

### Setting up front-end development environment

* Build javascript into bundle
```
npm run build
```

* Build javascript into bundle & watch for changes (build on change)
```
npm run watch
```

### Setting up Database

* Download and Install CouchDB
```
http://couchdb.apache.org/
```

* Download & Install Make
```
https://sourceforge.net/projects/gnuwin32/files/make/3.81/make-3.81.exe/
```

* Download & Install curl
```
http://curl.haxx.se/gknw.net/7.40.0/dist-w64/curl-7.40.0-rtmp-ssh2-ssl-sspi-zlib-winidn-static-bin-w64.7z
```

1. Run 'Start CouchDB' (see windows start search)
2. Open node cmd and navigate (cd) into your open-hearts folder
3. Type 'Make install' and hit enter
4. This should create the database
5. If you would like to clear the database type 'Make clear-db'