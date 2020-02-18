

$(document).ready(function(){
	for ( let i in movieData.movies) {
		$('#movie-box').append(`


		<div class="col-sm-6 col-md-5 col-12 bg-dark my-1 marign" id="items${movieData.movies[i].id}">
			<div class= "row">
				<div class=" col-sm-6 col">
				<img src="${movieData.movies[i].image}" class= " w-100 rounded float-left m-1" alt=".">
				</div> 
				<div class=" col-sm-6  text-light text-center ">
					<h3 >${movieData.movies[i].name}</h3>
					
					<div class="container">
					<img id="artist_img" src="${movieData.movies[i].artist_img}" class= "w-50" alt=".">
					<h4>${movieData.movies[i].artist_name}</h4>
							<div class="col-sm-10  my-2 ml-auto">
							<div class="row ">
							<button id="likeButton" type="button" class="btn btn-light " name="blabutton" >Like</button>
							<p id="bo" class="bo"></p>
							</div>
							</div>

				</div>
			</div>	
		</div>
	
		`);



}



var button = document.getElementsByName("blabutton");

for (var y = 0; y < button.length; y ++){

	button[y].addEventListener("click", likeIt);
}


var count = 0;
	
function likeIt(){
 t = count += 1;
	console.log(t)

document.getElementsByName("bo").innerHTML = t;

}




});









// file system checking part
	if(typeof jQuery == "undefined"){
	console.log("nicht installiert");
}else{
	console.log("installiert");
}

console.log(movieData.movies);

