const koa = require('koa');
const parse = require('co-body');

app = koa();

app.use(function* () {
  if (this.path == '/' && this.method == 'POST') {
    var body = yield parse(this);
    resp = body.name.toUpperCase();
    this.body = resp;
  }
})

app.listen(process.argv[2]);
