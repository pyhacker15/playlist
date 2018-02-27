// quick fix for Cloud9 warning:
/* global $ */

var myPlayList = [
	{
		"title":"24K Magic",
		"artist":"Bruno Mars",
		"mp3-url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		"image-url":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
		"songLyrics":"Tonight I just want to take you higher Throw your hands up in the sky Let's set this party off right Players, put yo' pinky rings up to the moon Girls, what y'all trying to do? Twenty four karat magic in the air Head to toe so player Look out uh Pop pop, it's show time (show time) Show time (show time) Guess who's back again? Oh they don't know? (Go on tell 'em) Oh they don't know? (Go on tell 'em) I bet they know soon as we walk in (showin' up) Wearing Cuban links (ya) Designer minks (ya) Inglewood's finest shoes (whoop, whoop) Don't look too hard might hurt ya'self Known to give the color red the blues Oh shit, I'm a dangerous man with some money in my pocket (keep up) So many pretty girls around me and they waking up the rocket (keep up) Why you mad, fix ya face, ain't my fault y'all be jocking (keep up) Players only, come on Put your pinky rings up to the moon Girls, what y'all trying to do? Twenty four karat magic in the air Head to toe so player Uh, look out! Second verse for the hustlas (hustlas) gangstas (gangstas) Bad bitches and ya ugly ass friends (haha) Can I preach? (uh oh) can I preach? (uh oh) I gotta show 'em how a pimp get it in First, take your sip (sip), do your dip (dip) Spend your money like money ain't shit (whoop, whoop) We too fresh Got to blame in on Jesus Hashtag blessed, they ain't ready for me I'm a dangerous man with some money in my pocket (keep up) So many pretty girls around me and they waking up the rocket (keep up) Why you mad, fix ya face, ain't my fault y'all be jocking (keep up) Players only, come on Put your pinky rings up to the moon Hey girls What y'all trying to do? (What y'all trying to do?) Twenty four karat magic in the air Head to toe so player Uh, look out! everywhere I go they be like Ooh, so player Everywhere I go they be like (ooh, so player ooh) Oh everywhere I go they be like (ooh, so player ooh) Now, now, now watch me break it down like (uh) Twenty four karat, twenty four karat magic What's that sound (twenty four karat, twenty four karat magic) Come on now Twenty four karat, twenty four karat magic Don't fight the feeling, invite the feeling Just put your pinky rings up to the moon Girls, what y'all trying to do? (Tell me what y'all trying to do) Twenty four karat magic in the air Head to toe so player (hands up!) Put your pinky rings up to the moon Girls, what y'all trying to do? (Do) Twenty four karat magic in the air Head to toe so player (twenty four karat) uh, look out Songwriters: Philip Martin Lawrence / Christopher Brody Brown / Peter Gene Hernandez Released: 2016 24K Magic lyrics © Warner/Chappell Music, Inc, Universal Music Publishing Group, BMG Rights Management US, LLC"
	},
	{
		"title":"Sir Duke",
		"artist":"Stevie Wonder",
		"mp3-url":"https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"image-url":"https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
		"songLyrics":"Music is a world within itself With a language we all understand With an equal opportunity For all to sing, dance and clap their hands But just because a record has a groove Don't make it in the groove But you can tell right away at letter A When the people start to move They can feel it all over They can feel it all over people They can feel it all over They can feel it all over people Music knows it is and always will Be one of the things that life just won't quit But here are some of music's pioneers That time will not allow us to forget For there's Basie, Miller, Sachmo And the king of all Sir Duke And with a voice like Ella's ringing out There's no way the band can lose You can feel it all over You can feel it all over people You can feel it all over You can feel it all over people You can feel it all over You can feel it all over people You can feel it all over You can feel it all over people You can feel it all over You can feel it all over people You can feel it all over You can feel it all over people You can feel it all over You can feel it all over people You can feel it all over I can feel it all over-all over now people Can't you feel it all over Come on let's feel it all over people You can feel it all over Everybody-all over people Songwriters: Stevie Wonder Released: 1976 Sir Duke lyrics © Sony/ATV Music Publishing LLC"
	},
	{
		"title":"Sorry",
		"artist":"Justin Bieber",
		"mp3-url":"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"image-url":"http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
		"songLyrics":"Ooh, ooh Ooh, ooh You gotta go and get angry at all of my honesty You know I try but I don't do too well with apologies I hope I don't run out of time, could someone call a referee? 'Cause I just need one more shot at forgiveness I know you know that I made those mistakes maybe once or twice By once or twice I mean maybe a couple of hundred times So let me, oh let me redeem, oh redeem, oh myself tonight 'Cause I just need one more shot at second chances Yeah, is it too late now to say sorry? 'Cause I'm missing more than just your body Oh, is it too late now to say sorry? Yeah, I know that I let you down Is it too late to say I'm sorry now? Ooh, ooh I'm sorry, yeah Ooh, ooh Sorry, yeah Ooh, ooh Sorry Yeah, I know that I let you down Is it too late to say I'm sorry now? Ooh, ooh I'll take every single piece of the blame if you want me to But you know that there is no innocent one in this game for two I'll go, I'll go and then you go, you go out and spill the truth Can we both say the words and forget this? Yeah, is it too late now to say sorry? 'Cause I'm missing more than just your body Oh, is it too late now to say sorry? Yeah, I know that I let you down Is it too late to say I'm sorry now? I'm not just trying to get you back on me 'Cause I'm missing more than just your body Is it too late now to say sorry? Yeah, I know that I let you down Is it too late to say I'm sorry now? Ooh, ooh I'm sorry, yeah Ooh, ooh Sorry, yeah Ooh, ooh Sorry Yeah, I know that I let you down Is it too late to say I'm sorry now? Ooh, ooh I'm sorry, yeah Ooh, ooh Sorry, yeah Ooh, ooh Sorry Yeah, I know that I let you down Is it too late to say I'm sorry now? Songwriters: Julia Michaels / Justin Bieber / Justin Tranter / Michael Tucker / Sonny Moore Sorry lyrics Released:2015 © Warner/Chappell Music, Inc, Kobalt Music Publishing Ltd., Universal Music Publishing Group, Cypmp"
	}
];

$(document).ready(function() {
     function displayList() { 
     for(var i = 0; i < myPlayList.length; i++) { 
         $('#songs_div').append("<h5 class='change_image'>" + myPlayList[i].title + "</h5>");   
         $('#songs_div').append("<p>" + myPlayList[i].artist + "</p>");
         $('#songs_div').append("<div class='modal fade' id='exampleModalLongTitle' tabindex='-1' role='dialog' aria-labelledby='exampleModalLongTitle' aria-hidden='true'>" + "<div class='modal-dialog' role='document'>" + "<div class='modal-content'>" + "<div class='modal-header'>" + "<h5 class='modal-title'>" + "Song Lyrics" + "</h5>" + "<button style='color:white' aria-label='Close' class='close' data-dismiss='modal' type='button'>" + "<span aria-hidden='true'>&times;</span>" + "</button>"  + "</div>" + "<div class='modal-body'>" + "<p style='color:white' >" + myPlayList[i]['songLyrics'] + "</p>" + "</div>" + "<div class='modal-footer'>" + "<button type='button' class='btn btn-primary' data-dismiss='modal'>Close</button>" + "</div>" + "</div>" + "</div>" + "</div>"); 
         $('#songs_div').append("<div class='dropdown' style='margin-top: -35px; padding-bottom: 5px; position: static'>" + "<i class='fas fa-ellipsis-v dropdown-toggle' style='color:white; margin-left: 750px; height: 20px' id='dropdownMenuButton' data-toggle='dropdown'></i>" + "<div class='dropdown-menu dropdown-menu-right' aria-labelledby='dropdownMenuButton'>" + "<a class='dropdown-item' data-toggle='modal' data-target='#exampleModalLongTitle' href='#'> Song's Lyrics </a>" + "<a class='dropdown-item' id='delete_song' href='#'>Delete Song</a>" + "<a class='dropdown-item' target='_tab' href=" + myPlayList[i]['mp3-url']  + ">" + "Play Song" + "</a>" + "</div>" + "</div>");
         $('#songs_div').append("<hr>");
     }    
} displayList();
     function clearList() { 
         $('#songs_div > hr:gt(0)').remove();
         $('#songs_div > p:gt(0)').remove();
         $("#songs_div > div").remove();
         $("#songs_div > h5").remove();
     } 
     $("#deletePlayList").click(function() { 
         clearList();
         myPlayList = [];
     });
     function addSong() { 
     $("#submit").click(function() {
         var title = $("#title").val();
         var artist = $("#artist").val();
         var playLink = $("#play-link").val();
         var albumImage = $("#album-image").val();
         var lyrics = $("#lyrics").val();
         var newSong = {
             title: title, 
             artist: artist,
             playLink: playLink,
             albumImage: albumImage,
             lyrics: lyrics
         }; 
         
         if ($("#deletePlayList").onclick == true)  { 
             myPlayList.push(newSong);
             displayList();
         } else {  
             clearList(); 
             myPlayList.push(newSong);
             displayList();
         } 
    });
} addSong();
 
// this code is taking the amount of songs in the playlist, let's say 3, and then it's making the code in the for loop run three times
 $(".change_image").on("click", function(){    
     for (var i = 0; i < myPlayList.length; i++) {
                 $(".song_pic").attr("src", myPlayList[i]["image-url"]); 
      }
      $(".song_pic").attr("src", myPlayList[i]["image-url"]);
});
});























// var mySong = {
// 	"title":"Runnin",
// 	"artist":"Pharrell Williams",
// 	"mp3-url":"https://open.spotify.com/album/5ZX4m5aVSmWQ5iHAPQpT71",
// 	"image-url":"js/runnin.jpg",
// }


// This is the code to display just one song from the playlist 

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



// IMPORTANT STUFF 

   //  for(var i = 0; i < myPlayList.length; i++) { 
   //      ("#songs_div > h5" + [i]).remove();
   //      $('#songs_div > p:gt(0)' + [i]).remove();
   //      //$('#songs_div').append("<h5 onclick ='myFunction()'>" + myPlayList[i].title + "</h5>");   
   //      //$('#songs_div').append("<p>" + myPlayList[i].artist + "</p>");
   //      //$('#songs_div').append("<div class='modal fade' id='exampleModalLongTitle' tabindex='-1' role='dialog' aria-labelledby='exampleModalLongTitle' aria-hidden='true'>" + "<div class='modal-dialog' role='document'>" + "<div class='modal-content'>" + "<div class='modal-header'>" + "<h5 class='modal-title'>" + "Song Lyrics" + "</h5>" + "<button style='color:white' aria-label='Close' class='close' data-dismiss='modal' type='button'>" + "<span aria-hidden='true'>&times;</span>" + "</button>"  + "</div>" + "<div class='modal-body'>" + "<p style='color:white' >" + myPlayList[i]['songLyrics'] + "</p>" + "</div>" + "<div class='modal-footer'>" + "<button type='button' class='btn btn-primary' data-dismiss='modal'>Close</button>" + "</div>" + "</div>" + "</div>" + "</div>"); 
   //      //$('#songs_div').append("<div class='dropdown' style='margin-top: -35px; padding-bottom: 5px; position: static'>" + "<i class='fas fa-ellipsis-v dropdown-toggle' style='color:white; margin-left: 750px; height: 20px' id='dropdownMenuButton' data-toggle='dropdown'></i>" + "<div class='dropdown-menu dropdown-menu-right' aria-labelledby='dropdownMenuButton'>" + "<a class='dropdown-item' data-toggle='modal' data-target='#exampleModalLongTitle' href='#'> Song's Lyrics </a>" + "<a class='dropdown-item' href='#'>Delete Song</a>" + "<a class='dropdown-item' target='_tab' href=" + myPlayList[i]['mp3-url']  + ">" + "Play Song" + "</a>" + "</div>" + "</div>");
   //      //$('#songs_div').append("<hr>");
  	// }