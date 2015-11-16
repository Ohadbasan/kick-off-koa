var koa = require('koa');
var body = require('co-body');
var fs = require('fs');

var app = koa();

app.use(function* () {
  if (this.request.type == 'application/json') {
    this.body = {message: 'hi!'}
  }
  else {
    this.body = 'ok';
  }
})


app.listen(process.argv[2]);
