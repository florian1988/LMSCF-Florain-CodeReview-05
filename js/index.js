

$(document).ready(function(){
	for ( let i in movieData.movies) {
		$('#movie-box').append(`

<div class=" col-sm-12"
	<div class= "row">
		<div  class="col-sm-5 border" id="items${movieData.movies[i].id}">
			<div class= "row">
				<div class=" col-sm-6 border">
				<img src="${movieData.movies[i].image}" class= " w-100 rounded float-left" alt=".">
				</div> 
				<div class=" col-sm-6 border text-light">
					<h3 >${movieData.movies[i].name}</h3>
					
					<div class="container">
					<img src="${movieData.movies[i].artist_img}" class= "w-50" alt=".">
					<h4 >${movieData.movies[i].artist_name}</h4>
							<div class="col-sm-10 border">
							<div class="row">
							<button id="likeButton" type="button" class="btn btn-dark">Like</button>
							<p id="output">0</p>
							</div>
							</div>

				</div>
			</div>	
		</div>
	
	</div>

</div>
  



		`)

	}

$(function() {
  $('#likeButton').click(function() {
    $('#output').html(function(i, val) {
      return val * 1 + 1;
    });
  });
});




});









// file system checking part
	if(typeof jQuery == "undefined"){
	console.log("nicht installiert");
}else{
	console.log("installiert");
}

console.log(movieData.movies);

