var movies=require('./moviedata');
var dbService=require('../services/dbServices');

 exports.getAllMovies=function(req,res,next){
   var db=dbService.database;
   var moviesController=db.collection("movie");
   moviesController.find().toArray().then(function(result){
    // console.log("RESULT:",result);
var outputJson={
  "isSuccess":true,
  "data":result
}
 return res.json(outputJson);
   });
  // console.log("dbService",dbService);
};

exports.addNewMovie=function(req,res,next){
  var db=dbService.database,
  movie=req.body;
  moviesCollection=db.collection("movie");
moviesCollection.insert(movie).then(function(save_data){
  return res.json({
    "isSuccess":true
  });
});

}
