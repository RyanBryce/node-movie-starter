var movies = require('../movies.json');

module.exports = {
    get: function(req, res, next){
      var page =  req.query.page || 1;
      var pageSize = req.query.pageSize || 20;
      var startIndex = (page - 1) * pageSize;

      var first20Movies = movies. slice(startIndex, startIndex + pageSize);
      res.send(first20Movies);
    },

    getById: function(req, res, next) {
      var movieId = req.params.movieId;
      var movie = movies[movieId];

      var responseObj = {
        message: "you asked for movie ID " + movieId,
        movie: movie
      }
      res.send(responseObj)
    },
    modify: function(req, res, next){

    },
    add: function(req, res, next){

    },
    delete: function(req, res, next){

    }
}
