console.log("this file loaded");
$.ajax({
  type:"GET",
  url:"movies/all",
  dataType:"json",
  success:function(response){
    //console.log("data from success",response);
    var data=formObject(response.data);
    constructDOM(data);
  },
  error:function(err)
  {
    console.log("Error in GET method",err);
  }
});
function formObject(response)
{
   var flags=[],categoryObject=[];
  var length=response.length;
for(var i=0;i<length;i++){
  var movie=response[i];
  //console.log("movie",movie);
  //console.log("language",movie.language);
var index=flags.indexOf(movie.language);

  if(index>=0){
    categoryObject[index].movies.push(movie);
    continue;
  }
  else {
  flags.push(movie.language);

  }
  var objectSchema={
    "category":movie.language,
    "movies":[]
  }
  objectSchema.movies.push(movie);
categoryObject.push(objectSchema);
    console.log("categoryObject",categoryObject);
  }
      console.log(flags);
      return categoryObject;
}
  //console.log("formObject response",response);
//}
function constructDOM(data)
{ var categoryContent=[];
  for(var i=0;i<data.length;i++)
{
var objectSchema=data[i];
console.log("constructDOM data",objectSchema);
var categoryTitle=$('<h3 class="categoryName">'+objectSchema.category+'</h3>');
categoryContent.push(categoryTitle);
for(j=0;j<objectSchema.movies.length;j++)
  {
    console.log(objectSchema.movies[j].name);
    var categoryMovie=$('<div class="movie fleft"><a href="#"><div class="poster"><img src="'+objectSchema.movies[j].thumbnailUrl+'" alt=""></div></a><div class="details"><p class="yearOfRelease">'+objectSchema.movies[j].releaseYear+'</p><h4 class="name">'+objectSchema.movies[j].name+'</h4></div>');
    categoryContent.push(categoryMovie); categoryContent.push('</div>');
 }
//$('section.content').html(categoryTitle);

}
$('section.content').html(categoryContent);
}
