var movies = require('../movies.json');

module.exports = {
    get: function(req, res, next){
        //http://localhost:3000/api/movies?page=18&pageSize=24
        var page = (req.query.page || 1) / 1;
        var pageSize = (req.query.pageSize || 20) / 1;
        var startIndex = (page - 1) * pageSize;
        var amtToGet = startIndex + pageSize;

        console.log("page: " + page, "pageSize: " + pageSize, "start: " + startIndex, "endIdx : " + amtToGet);

        

        var first20Movies = movies.slice(startIndex,amtToGet );
        console.log("mlen: " + first20Movies.length);
        res.send(first20Movies);
    },
    getById: function(req, res, next){
        //http://localhost:3000/api/movies/2
        var movieId = req.params.movieId;
        var movie = movies[movieId];

        var responseObj = {
            message: "You asked for movie ID " + movieId,
            movie: movie
        }

        res.send(responseObj);
    },
    modify: function(req, res, next){
        //which item to Modify
        var movieId = req.params.movieId;
        //what data to change it to
        //http://localhost:3000/api/movies/272?Worldwide_Gross=20000
        
        //Get movie to modify
        //for every property in req.query
            //if property is legit(hasOwnProperty) on query and on movieToModify
                //update movie to modify

        res.end();
    },
    add: function(req, res, next){
        movies.push(req.body);
        res.status(200).end();
    },
    delete: function(req, res, next){
        console.log("You want to delete : " + req.params.movieId);
        movies.splice(req.params.movieId, 1);
        res.status(200).end();
    }
}