# Easy PouchDB Server

> DISCLAIMER: this is a fork of https://glitch.com/edit/#!/pouchdb-server?path=README.md%3A1%3A0

**_Zero to PouchDB Express Server in less than a minute._**

PouchDB is a NoSQL Database written in JavaScript. With glitch, _you can run pouchdb as an HTTP server_ by simply remixing this project. While not meant for production, running pouchdb server is perfect for small hobby projects or proof of concepts. For more info on technical restrictions - [https://glitch.com/faq#restrictions](https://glitch.com/faq#restrictions)

## Getting Started

First, create a Glitch project from this repository.

You can click on [![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/acailly/easy-pouchdb-server),  
or you can go on your Glitch account (https://glitch.com/), click on **New Project**, then on **Import from Github** and finally past this repo url

Once the project created,

1. Click **Show** to display your new API url
2. Append `/_utils` to your API url to display your database server
3. Click on **Admin Party**
4. Add an administrator to secure your database

![screenshot](https://cdn.glitch.com/373e5a0b-7ef8-4b1d-a69e-2c7f5e12533d%2FScreen%20Shot%202017-08-08%20at%206.57.14%20AM.png?1502189884525)

## Learn More

- **server.js** defines an ExpressJS web server and a PoucbDB database server.
- The database is stored in the **.data** folder.
- Read the docs at [PouchDB.com](https://pouchdb.com/)

## Thanks

- PouchDB Team and Community [https://github.com/pouchdb](https://github.com/pouchdb)
- CouchDB Team and Community [http://couchdb.apache.org/](http://couchdb.apache.org/)
- [NodeJS](https://nodejs.org/en/)/[Express](https://expressjs.com/) community
- [Glitch](https://glitch.com/) Team for this platform to share and learn

**This is a fork of a project created with <3 from [JRS Coding School](http://jrscode.com)**
