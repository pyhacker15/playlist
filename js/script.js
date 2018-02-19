// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************


var myPlayList = [
	
	{
		"title":"24K Magic",
		"artist":"Bruno Mars",
		"mp3-url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		"image-url":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		"title":"Sir Duke",
		"artist":"Stevie Wonder",
		"mp3-url":"https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"image-url":"https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		"title":"Sorry",
		"artist":"Justin Bieber",
		"mp3-url":"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"image-url":"http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}

];




 $( document ).ready(function() {
     for(var i = 0; i < myPlayList.length; i++) { 
         $('#songs_div').append("<h5>" + myPlayList[i].title + "</h5>");
         $('#songs_div').append("<p>" + myPlayList[i].artist + "</p>");
         //$('body').append("<p>Mp3-Url: " + "</p>" + "<a href=" + myPlayList[i]["mp3-url"]  + "</a>"); // This options is present when you press the three dots
         //$('body').append("<img src = " + myPlayList[i]["image-url"] + ">"); // This option is present when you press the three dots
         $('#songs_div').append("<div class='dots_div2'>" +  "<span class='dot'></span>"  + "<span class='dot'></span>" + "<span class='dot'></span>"+ "</div>");
         $('#songs_div').append("<hr>");
  	} 
});







function displayList(){


  
}
function clearList(){
  
  
  
}
function addSong(){
 
  
  
}












// var mySong = {
// 	"title":"Runnin",
// 	"artist":"Pharrell Williams",
// 	"mp3-url":"https://open.spotify.com/album/5ZX4m5aVSmWQ5iHAPQpT71",
// 	"image-url":"js/runnin.jpg",
// }

// DOCUMENT READY FUNCTION

// var firstSongTitle = myPlayList[0].title;
// var firstSongArtist = myPlayList[0].artist;
// var firstSongUrl = myPlayList[0]["mp3-url"];
// var firstSongImage = myPlayList[0]["image-url"];

// $( document ).ready(function() {
//   $('body').append("<h3>" + firstSongTitle + "</h3>");
//   $('body').append("<p>Artist: " + firstSongArtist + "</p>");
//   $('body').append("<p>Mp3-Url: " + firstSongUrl + "</p>");
//   $('body').append("<img src =" + firstSongImage + ">");
// });