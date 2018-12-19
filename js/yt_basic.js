
var b_pause = document.getElementById('buttonPause');
var b_play = document.getElementById('buttonPlay');   
var b_reload = document.getElementById('buttonReload');
var b_previous = document.getElementById('buttonPrevious');
var b_next = document.getElementById('buttonNext');
var b_showoptions = document.getElementById('showOptions');
var b_hideoptions = document.getElementById('hideOptions');
var b_updatesearch = document.getElementById('updateSearch');
var b_updatevideo = document.getElementById("updateVideo");
b_play.addEventListener('click', function (){ ytPlayer.playVideo();});
b_pause.addEventListener('click', function (){ ytPlayer.pauseVideo();});
b_reload.addEventListener('click', function (){ goReload();});
b_previous.addEventListener('click', function (){ nextVid();});
b_next.addEventListener('click', function (){ prevVid();});
b_showoptions.addEventListener('click', function (){ showElement(document.getElementById('options'));});
b_hideoptions.addEventListener('click', function (){ hideElement(document.getElementById('options'));});
b_updatesearch.addEventListener('click', function (){ loadVidList(document.getElementById('searchPhrase').value);});
b_updatevideo.addEventListener('click', function (){ loadVideo(document.getElementById('ytId').value);});



function nextVid() {
	  var pl = ytPlayer.getPlaylist();
  	var ix = ytPlayer.getPlaylistIndex();
  	if (ix < (pl.length)-1){
       	ix++;
  		}
  		else {
  		ix = 0;
  		};
  
  	ytPlayer.playVideoAt(ix);
	}


function prevVid() {
  	var pl = ytPlayer.getPlaylist();
  	var ix = ytPlayer.getPlaylistIndex();
  	if (ix > 0){
       	ix--;
  		}
  		else {
  		ix = (pl.length - 1);
  		};
  	ytPlayer.playVideoAt(ix);
	}

 function goReload() {
     ytPlayer.seekTo(0, true);
    }
    
  function showElement(dis){
       dis.style.display = 'block';
  	}
  
 function hideElement(dis){
       dis.style.display = 'none';
  	}
  	
 function loadVidList(searchStr) {
			b_hideoptions.click();
			showElement(document.getElementById("buttonPrevious"));
			showElement(document.getElementById("buttonNext"));
			ytPlayer.loadPlaylist({list:searchStr,
								listType:"search"})
			ytPlayer.pauseVideo();
			document.getElementById("vidId").textContent = " a search for-> "+searchStr+" <-";
		 }
		 
function loadVideo(vid){
		b_hideoptions.click();
		hideElement(document.getElementById("buttonPrevious"));
		hideElement(document.getElementById("buttonNext"));	
		ytPlayer.loadVideoById({videoId:vid});				
		document.getElementById("vidId").textContent = vid;
}