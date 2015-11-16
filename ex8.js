const app = require('koa')()


app.keys = ['secret', 'keys'];

app.use(function* () {
  if (this.path == '/') {
    if (this.cookies.get('view', {'signed':true}) == undefined) {
      this.cookies.set('view', 1 ,{'signed':true})
      this.body = '1 views'
    }
    else {
      var cookies = this.cookies.get('view', {'signed':true})
      cookies++;
      this.cookies.set('view', cookies, {'signed':true})
      this.body = `${cookies} views`
    }
  }
})

app.listen(process.argv[2])
