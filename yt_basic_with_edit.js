
var b_pause = document.getElementById('buttonPause');
var b_play = document.getElementById('buttonPlay');   
var b_reload = document.getElementById('buttonReload');
var b_previous = document.getElementById('buttonPrevious');
var b_next = document.getElementById('buttonNext');
var b_showoptions = document.getElementById('showOptions');
var b_hideoptions = document.getElementById('hideOptions');
var b_updatesearch = document.getElementById('updateSearch');
var b_updatevideo = document.getElementById("updateVideo");
var b_makenewyt = document.getElementById("makeNewYt");
var b_showYTPlayer = document.getElementById("showYTPlayer");
var b_hideYTPlayer = document.getElementById("hideYTPlayer");
var b_setpagedata = document.getElementById("pageDataSetter");
var yt_player = document.getElementById("yt_wrapper");
b_play.addEventListener('click', function (){playVid();});
b_pause.addEventListener('click', function (){ ytPlayer.pauseVideo();});
b_reload.addEventListener('click', function (){ goReload();});
b_previous.addEventListener('click', function (){ nextVid();});
b_next.addEventListener('click', function (){ prevVid();});
b_showoptions.addEventListener('click', function (){ showElement(document.getElementById('options'));});
b_hideoptions.addEventListener('click', function (){ hideElement(document.getElementById('options'));});
b_updatesearch.addEventListener('click', function (){ loadVidList(document.getElementById('searchPhrase').value);});
b_updatevideo.addEventListener('click', function (){ loadVideo(document.getElementById('ytId').value);});
b_makenewyt.addEventListener('click', function () {newYTDiv();});
b_setpagedata.addEventListener('click', function () {setPageData();});
hideElement(yt_player);
var firstTime = true;


function playVid () {
	if (firstTime){
		showElement(yt_player);
		loadVideo(document.getElementById('vidId').textContent);
		firstTime = false;
	}
	ytPlayer.playVideo();
}


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
	 loadVideo(document.getElementById('vidId').textContent)
     ytPlayer.seekTo(0, true);
    }
	
function showHide(dis) {
	if (dis.style.display == 'block') {
		dis.style.display = 'none';
	} else {
		dis.stle.display = 'block';
	};
}
    
  function showElement(dis){
       dis.style.display = 'block';
	   getPageData(); 
	  
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

function getPageData(){
				
				document.getElementById("pgTitle").value = document.getElementById("pageTitle").textContent;
				document.getElementById("pgNote").value = document.getElementById("pageNote").textContent;
				document.getElementById("pgName").value = document.getElementById("htmlName").textContent;
				document.getElementById("returnUrl").value = document.getElementById("returnLink").getAttribute('href');
			}
			
function setPageData(){
				
				document.getElementById("pageTitle").textContent = document.getElementById("pgTitle").value;
				document.getElementById("pageNote").textContent = document.getElementById("pgNote").value;
				document.getElementById("htmlName").textContent = document.getElementById("pgName").value;
				document.getElementById("returnLink").setAttribute('href',document.getElementById("returnUrl").value);
			}
			
function newYTDiv(){
			alert("This will appear to remove the YouTube video, but your new page will show a video when opened.")
			var ytWrap = document.getElementById("yt_wrapper");
			ytWrap.removeChild(document.getElementById("yt_placeholder")); //remove youtube api - it gets replaced with new parameters upon reloading.
			var newYt = document.createElement('div');
			newYt.setAttribute('id','yt_placeholder'); // add back the  empty div for the youtube api.
			ytWrap.appendChild(newYt);
			var apiScript = document.getElementById("www-widgetapi-script");
			apiScript.parentNode.removeChild(apiScript); //further cleanup to avoid accumulating redundant js references. 
			hideElement(document.getElementById('options'));
		}