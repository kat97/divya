var MongoClient=require('mongodb').MongoClient;

exports.createConnection=function()
{
  MongoClient.connect("mongodb://divi:divi@ds111138.mlab.com:11138/projector27").then(function(client){
  console.log("Connected to mongodb") ;
  exports.database=client.db("projector27");
  //console.log("Connected to mongodb");

});
}
