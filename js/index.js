
// *******************************json convert part************************
$(document).ready(function(){
	for ( let i in movieData.movies) {
		$('#movie-box').append(`


		<div class ="col-sm-5 col-md-5 bg-dark my-1 back" id="items${movieData.movies[i].id}">
			<div class= "row">
				<div class=" col-sm-6 col">
				<img src="${movieData.movies[i].image}" class= " w-100 rounded float-left m-1" alt=".">
				</div> 
				<div class=" col-sm-6  text-light text-center">
					<h3 >${movieData.movies[i].name}</h3>
					
					<div class="container">
					<img id="artist_img" src="${movieData.movies[i].artist_img}" class= "w-50" alt=".">
					<h4>${movieData.movies[i].artist_name}</h4>
							<div class="col-sm-10  my-2 ml-auto">
							<div class="row justify-content-around">
							<button id="likeButton" type="button" class="btn button " name="blabutton" >Like</button>
							<div class="likecounter">
							<p id="bo" class="  m-2  bo"></p>
							</div>
							</div>
							</div>

				</div>
			</div>	
		</div>
	
		`);




}

// *********************************** like button counter****************

var button = document.getElementsByName("blabutton");

for (var y = 0; y < button.length; y ++){

	button[y].addEventListener("click", likeIt);
}


var count = 0;
	
function likeIt(){

  var $count = $(this).parent().find('.bo');
  $count.html($count.html() * 1 + 1);
}

});

// ***************************sort function*******************************

document.getElementById("sortButton").addEventListener("click",port);
var output = document.getElementsByName("bo");

function port() {

// for (var i = 0; i < movieData.movies.length; i ++){

var putout = movieData.movies.sort(function(a, b){return a.output - b.output});
// }
console.log(output);

}








// ********************file system checking part******************************
	if(typeof jQuery == "undefined"){
	console.log("nicht installiert");
}else{
	console.log("installiert");
}

console.log(movieData.movies);

