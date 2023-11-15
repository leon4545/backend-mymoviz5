var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');



router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b2bbd498072dd1f1a459e3d16de8f52e`)
      .then(response => response.json())
      .then(data => {
        res.json({ movies: data.results });
      });
   });

module.exports = router;
