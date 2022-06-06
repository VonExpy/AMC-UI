const express = require('express');
const path = require('path');
const app = require('./app')
const port = process.env.PORT || 3000

// Serve static files....
app.use(express.static(__dirname + '/client/dist/amc'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/client/dist/amc/index.html'));
});

app.listen(port,()=>{
  console.log(`Server running on Port ${port}`)
});