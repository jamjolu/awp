// style lists, one for overall look, one for grid type pages affecting button sizes.
var stylez = ['tts_min_basic_fg.css', 'tts_min_basic_blues_fg.css', 'tts_min_basic_dark_fg.css', 'tts_min_basic_sunset_fg.css', 'tts_min_basic_forest_fg.css'];
var gridz = ['tts_min_grid.css','tts_min_grid_4max.css'];
var whatChanged = "nothing";
var preventDefault = function(e){e.preventDefault();};
var doOnce = false;
var audioPlayer = document.getElementById('audioPlayer');
if (audioPlayer) audioPlayer.volume = 0.5;


window.addEventListener("load", function(event) {
	var storedVoiceIx = localStorage.getItem("voiceIndex");
	var storedLookIx = localStorage.getItem("lookIndex");
	var storedGridIx = localStorage.getItem("gridIndex");
	if (storedVoiceIx) {
		tts.DvIndex = storedVoiceIx;
	};
	if (storedLookIx) {
		document.getElementById("basicLook").href = stylezPath + stylez[storedLookIx];
		stylezIndex = storedLookIx;
	};
	//if (storedGridIx) {
	//	document.getElementById("gridLook").href = stylezPath + gridz[storedGridIx];
		//gridzIndex = storedGridIx;
	//};
// if (tts.Synth.speaking) tts.Synth.cancel();
if (tts.On) {
		
		var thisEl = document.getElementById("thisPage");
		// Read the innerText for the listed elements of identified parent element after waiting 1 second to allow transitions to conclude.
		setTimeout(function(){tts.ReadVisElmts(thisEl,".readThis");}, 1000);
		// Read the textContent for the listed elements of the identified parent element, even hidden ones, after 1 second. In this case the notes class.
		if (tts.readNotes) setTimeout(function(){tts.ReadAnyElmts(thisEl,".notes");}, 1000);
	}
});
					
document.addEventListener('keydown', function(event) {
	if (event.key == 'l' && (event.altKey || event.metaKey)) {
		changeLook();		
	}
	if (event.key == 'g' && (event.altKey || event.metaKey)) {
		gridzIndex ++;
		if (gridzIndex >= gridz.length) gridzIndex = 0;
		document.getElementById("gridLook").href = stylezPath + gridz[gridzIndex];
		whatChanged = 'grid';
	}
	if (event.key == 'v' && (event.altKey || event.metaKey)) {
		changeVoice();		
	}
	if (event.key == 'S' && (event.altKey || event.metaKey)){
		localStorage.setItem("voiceIndex", tts.DvIndex ); 
		localStorage.setItem("lookIndex", stylezIndex ); 
		localStorage.setItem("gridIndex", gridzIndex ); 
		tts.ReadText("Basic page look, grid size and voice were saved.");
	}
	if (event.key == 's' && (event.altKey || event.metaKey)){
		saveChange();	
	}
	if (event.key == 'd' && (event.altKey || event.metaKey)){
		localStorage.removeItem("voiceIndex"); 
		localStorage.removeItem("lookIndex"); 
		localStorage.removeItem("gridIndex"); 
		tts.ReadText("Basic page look, grid size and voice were reset.");
		location.reload();
	}
	if (event.key == 'k' && (event.altKey || event.metaKey)) {
		 alert("Keyboard Shortcuts:\nAlt-v = change the voice\nAlt-l = change the page look\nAlt-g = change the grid size\nAlt-s = save the last changed page feature\nAlt-Shift-S = save all page features\nAlt-d = reset all page features to their defaults\nAlt-e = Open the page editor\nAlt-k = show these shortcuts\nThe effect these shortcuts have may depend on the page type, or on the availability of voices.")									
	}
	if (event.key == 'e' && (event.altKey || event.metaKey)) {
		
		editorInit(); 
		
	}
	
});


//document.getElementById('thisPage').addEventListener('tap',handleTouch);
//document.getElementById('thisPage').addEventListener('dbltap',handleTouch);
//document.getElementById('thisPage').addEventListener('longtap',handleTouch);
//document.getElementById('thisPage').addEventListener('swipeup',handleTouch);
//document.getElementById('thisPage').addEventListener('swipedown',handleTouch);
//document.getElementById('thisPage').addEventListener('swipeleft',handleTouch);
//document.getElementById('thisPage').addEventListener('swiperight',handleTouch);
//document.getElementById('thisPage').addEventListener('touchmove',preventDefault);
//document.getElementById('thisPage').addEventListener('touchstart',preventDefault);
//document.getElementById('thisPage').addEventListener('touchend',preventDefault);

function handleTouch (e){
	//e.preventDefault();
	//alert('touch event = ' + e.type + ' at coords: ' + e.x + ', ' + e.y);
	if (e.type == 'swipeleft'){
		editorInit();
	}
	if (e.type == 'tap'){
		let disTing =document.elementFromPoint(e.x,e.y);
		checkActions(disTing);
		//alert(document.elementFromPoint(e.x,e.y).className);
		//doOnce = true;
	}
	//distanceY.innerHTML = e.distance ? e.distance.y : 'not available';
	return false;
}

function saveChange() {
	
	switch (whatChanged) {
			case "voice" : 
					localStorage.setItem("voiceIndex", tts.DvIndex );
					break;
			case "look" :
					localStorage.setItem("lookIndex", stylezIndex );
					break;
			case "grid" :
					localStorage.setItem("gridIndex", gridzIndex ); 
					break;
		}
		tts.ReadText("The page " + whatChanged + "was saved.");
		whatChanged = 'nothing';
}

function changeVoice() {
	tts.docLangVoiceIx ++;
		if (tts.docLangVoiceIx >= (tts.docLangVoices.length)) tts.docLangVoiceIx = 0;
		tts.DvIndex = tts.docLangVoices[tts.docLangVoiceIx];
		tts.ReadText("does this sound different?");
		whatChanged = 'voice';
		//alert("the number of voices are: " + tts.docLangVoices.length + " the current voice index is: " + tts.docLangVoiceIx);
}

function changeLook() {
	
	stylezIndex ++;
		if (stylezIndex >= stylez.length) stylezIndex = 0;
		document.getElementById("basicLook").href = stylezPath + stylez[stylezIndex];
		whatChanged = 'look';
}
					
function checkActions(disThing){
	
	if (disThing.dataset.msg) {tts.ReadText(disThing.dataset.msg);
	} else {tts.ReadText(disThing.textContent);
		}
	if (disThing.dataset.r_action) {
		let r_string = disThing.dataset.r_action;
		let r_strings = r_string.split(','); // make an array of comma separated list of elements to read
		for (var ix = 0; ix < r_strings.length; ix++) {
			checkCommand(r_strings[ix], disThing);
			tts.ReadVisElmts(document.getElementById("thisPage"),r_strings[ix]);
			
		}
		tts.ReadVisElmts(document.getElementById("thisPage"),".readThis2"); // read class readThis2 for legacy compatibility
	}
	if (disThing.href) {
		setTimeout(function() {window.location.assign(disThing.href);}, 2000);
	}
}

function checkCommand(cmdStr, disThing) {
	switch (cmdStr.trim()) {
		case "_clearBanner": document.getElementById('pageBanner').textContent = "";
			break;
		case "_addMsgToBanner": document.getElementById('pageBanner').textContent +=  " "+ disThing.getAttribute('data-msg');
			break;
		case "_addLabelToBanner": document.getElementById('pageBanner').textContent +=  " "+ disThing.textContent;
			break;
		case "_removeWordFromBanner": lastIx = document.getElementById('pageBanner').textContent.lastIndexOf(' ');
				document.getElementById('pageBanner').textContent = document.getElementById('pageBanner').textContent.substring(0,lastIx);
			break;
		case "_removeCharacterFromBanner": strLen = document.getElementById('pageBanner').textContent.length;
				document.getElementById('pageBanner').textContent = document.getElementById('pageBanner').textContent.substring(0,strLen-1);
			break;
		case "_readDefault": tts.ReadVisElmts(document.getElementById("thisPage"),".readThis");
			break;
		case "_readBanner": tts.ReadVisElmts(document.getElementById("thisPage"),"#pageBanner");
			break;
		case "_readStoryText": tts.ReadVisElmts(document.getElementById("thisPage"),"#mainText");
			break;
		case "_readMiddle": tts.ReadVisElmts(document.getElementById("thisPage"),".f_row_qa");
			break;
		case "_readBottom": tts.ReadVisElmts(document.getElementById("navStrip"),".actorLabel");
			break;
		case "_readMain": tts.ReadVisElmts(document.getElementById("thisPage"),".readThis,.f_row_qa");
			break;
		case "_readWholePage": tts.ReadVisElmts(document.getElementById("thisPage"),".readThis,.f_row_qa,.grid,.actuators");
			break;
		case "_readNotes": tts.ReadAnyElmts(document.getElementById("thisPage"),".notes");
			break;
		case "_readEverything": tts.ReadVisElmts(document.getElementById("thisPage"),".readThis,.f_row_qa,.grid,.actuators"); 
				tts.ReadAnyElmts(document.getElementById("thisPage"),".notes");
			break;
		case "_readGrid": tts.ReadVisElmts(document.getElementById("commGrid"),".actorLabel");
			break;
		case "_playAudio": if (audioPlayer) audioPlayer.play();
			break;
		case "_pauseAudio": if (audioPlayer) audioPlayer.pause();
			break;
		case "_volumeUpAudio": if (audioPlayer.volume < 1) audioPlayer.volume = audioPlayer.volume + 0.1;
			break;
		case "_volumeDownAudio": if (audioPlayer.volume > 0) audioPlayer.volume = audioPlayer.volume - 0.1;;
			break;
		case "_muteAudio": if (audioPlayer) audioPlayer.muted = !(audioPlayer.muted);
			break;
		case "_setAudio": if (audioPlayer) audioPlayer.src = disThing.getAttribute('data-src');
			break;
		case "_changeSetup": getSetup(disThing.getAttribute('data-src'));
			break;
		case "_pauseAudioAfter30s": setTimeout(function(){audioPlayer.pause();}, 30*1000);
			break;
		case "_pauseAudioAfter30m": setTimeout(function(){audioPlayer.pause();}, 30*60*1000);
			break;
		case "_pauseAudioAfter60m": setTimeout(function(){audioPlayer.pause();}, 60*60*1000);
			break;
		case "_pauseAudioAfter120m": setTimeout(function(){audioPlayer.pause();}, 120*60*1000);
			break;
		case "_loadYTVideo": getYTVideo(disThing.getAttribute('data-src'));
			break;
		case "_stopMedia": stopMedia();
			break;
		case "_loadNewPage": window.location.href = disThing.getAttribute('data-src');
		
	}
	return;
}
// check to see if an actor was clicked
document.onclick = function( event ) {
	event.preventDefault();
	var thisThing = event.target;
	if (tts.Synth.speaking) tts.Synth.cancel();
	// check for clicks anywhere inside an 'actor' button including the label or image.
	if (thisThing.className == "actorLabel") thisThing = thisThing.parentElement;
	if (thisThing.className == "actorQPLabel") thisThing = thisThing.parentElement;
	if (thisThing.className == "actorImg") thisThing = thisThing.parentElement;
	// check for clicks anywhere inside a button holding div like those used in q/a or link pages including the text.
	if (thisThing.className == "f_row_qa") thisThing = thisThing.querySelector('.actor');
	if (thisThing.parentElement.className == "f_row_qa") thisThing = thisThing.parentElement.querySelector('.actor');
	if (thisThing.className.indexOf("actor") > -1)	checkActions(thisThing);
	if (thisThing.id == "changeVoice") changeVoice();
	if (thisThing.id == "changeLook") changeLook();
	if (thisThing.id == "saveChange") saveChange();
};
			
// check to see if the focus has moved to an actor via Tab key.
document.onkeyup = function( event ) {
	if (event.keyCode == 9){
		var thisThing = document.activeElement;
		if (thisThing.className.indexOf("actor") > -1)	{
			if (tts.Synth.speaking) tts.Synth.cancel();
			tts.ReadText(thisThing.textContent);
		}
	};
};
					
					
					
					
