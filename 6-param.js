var express = require('express')
var app = express()

app.put('/messages/:id', function(req, res) {
  var id = req.params.id
  var str = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
  res.send(str)
})

app.listen(process.argv[2] || 3000)
