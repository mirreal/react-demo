'use strict'

const koa = require('koa');
const app = koa();
const HTML = require('./index')

app.use(function*() {
    this.body = HTML
});

app.listen(3000);
