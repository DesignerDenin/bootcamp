var express = require('express');
var router = express.Router();
var data = require('../public/data.json')
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

function generateIndex() {
  max = 0;
  for (var book of data) {
    if (book.id > max)
      max = book.id;
  }
  return max + 1
}

/* GET books listing with SEARCH*/
router.get('/', function (req, res, next) {
  res.send(data);
});

/* GET book by ID. AND SEARCH*/
router.get('/:id', function (req, res, next) {
  if (!isNaN(req.params.id)) {
    const foundBook = data.find(book => book.id == req.params.id)
    if (foundBook)
      res.json(foundBook)
    else
      res.status(404).send("Not Found")
  }
  
  else if (req.params.id == "search") {
    output = []
    for (var book of data) {
      if (book.name == req.query.name) {
        output.push(book)
      }
    }
    res.end(JSON.stringify(output))
  } 
  
  else {
    res.status(404)
  }
});


/* ADD new book. */
router.post('/', urlencodedParser, function (req, res) {
  const response = {
    id: generateIndex(),
    name: req.body.name,
    author: req.body.author,
    genre: req.body.genre,
  };

  data.push(response)
  res.status(201).end(JSON.stringify(response));
})

/* EDIT BOOK by ID */
router.put('/:id', function (req, res, next) {
  var flag = false;
  for (var i = 0; i < data.length; i++) {
    if (data[i].id == req.params.id) {
      data[i].name = req.body.name ? req.body.name : data[i].name
      data[i].author = req.body.author ? req.body.author : data[i].author
      data[i].genre = req.body.genre ? req.body.genre : data[i].genre
      flag = true;
    }
  }

  if (flag)
    res.end("Successfully changed")
  else
    res.end("Not Found")
})

/* DELETE Book by ID */
router.delete('/:id', function (req, res, next) {
  const newData = data.filter((book) => book.id != req.params.id);
  const msg = newData != data ? "Successfully deleted" : "Not found"
  data = newData
  res.end(msg)
})

module.exports = router;