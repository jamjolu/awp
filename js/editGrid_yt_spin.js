var editActors = {};
var pageElmt = document.getElementById("thisPage");
	editActors.elmts =  pageElmt.getElementsByClassName("actor");
	editActors.currIx = 0;
	editActors.copied = {};
	
var b_pause = document.getElementById('buttonPause');
var b_play = document.getElementById('buttonPlay');
var b_stop = document.getElementById('buttonStop');
// var b_previous = document.getElementById('buttonPrevious');
// var b_next = document.getElementById('buttonNext');
var b_updatevideo = document.getElementById("updateVideo");
var b_showYTPlayer = document.getElementById("showYTPlayer");
var b_hideYTPlayer = document.getElementById("hideYTPlayer");
var b_hideBtns = document.getElementById('hideBtns');
var b_showBtns = document.getElementById('showBtns');

var pageNotPrepped = true; // used for cleaning YT player up prior to updating and saving a modified page.
var b_makenewyt = document.getElementById("makeNewYt");	
	
var b_showoptions = document.getElementById('showOptions');
var b_hideoptions = document.getElementById('hideOptions');
var b_prevactor = document.getElementById('prevAct');
var b_nextactor = document.getElementById('nextAct');
var b_copyactor = document.getElementById('copyAct');
var b_insertactor = document.getElementById('insertAct');
var b_cutactor = document.getElementById('cutAct');
var b_showinfo = document.getElementById('showInfo');
var b_hideinfo = document.getElementById('hideInfo');
var b_datasetter = document.getElementById('dataSetter');
var b_spinIt = document.getElementById('spinIt');

var cb_showEditCB = document.getElementById('showEditCB');
var cb_spinYes = document.getElementById('spinYes');
var cb_spinDownYes = document.getElementById('spinDownYes');
var wrap_cb_spinDownYes = document.getElementById('wrapSpinD');
var b_useSpin = document.getElementById('useSpin');
var b_useSpinD = document.getElementById('useSpinD');
var b_showEdit = document.getElementById('showEdit');

b_play.addEventListener('click', function (){ ytPlayerPlay();});
b_stop.addEventListener('click', function (){ ytStop();});
b_pause.addEventListener('click', function (){ ytPlayer.pauseVideo();});
// b_previous.addEventListener('click', function (){ nextVid();});
// b_next.addEventListener('click', function (){ prevVid();});

b_showYTPlayer.addEventListener('click', function () {f_showYTPlayer();});
b_hideYTPlayer.addEventListener('click', function () {f_hideYTPlayer();});
b_showBtns.addEventListener('click', function () { f_showBtns();});
b_hideBtns.addEventListener('click', function () {f_hideBtns();});
b_updatevideo.addEventListener('click', function (){ loadVideo(document.getElementById('ytId').value);});

b_showoptions.addEventListener('click', function (){editorInit(); });
b_hideoptions.addEventListener('click', function (){ arrowScan = true; hideElement(document.getElementById('options')); setDefaultLook();});
b_prevactor.addEventListener('click', function (){prevActor(); });
b_nextactor.addEventListener('click', function (){nextActor(); });
b_copyactor.addEventListener('click', function (){copyActor(); });
b_insertactor.addEventListener('click', function (){insertClone(); });
b_cutactor.addEventListener('click', function (){cutActor(); });
b_showinfo.addEventListener('click', function (){showElement(document.getElementById('info')); });
b_hideinfo.addEventListener('click', function (){hideElement(document.getElementById('info'));});
b_datasetter.addEventListener('click', function (){setActorDat(); });

b_makenewyt.addEventListener('click', function () {newYTDiv();});
b_spinIt.addEventListener('click', function () {spinScan();});
b_useSpin.addEventListener('click', function () {setSpinner();});
b_useSpinD.addEventListener('click', function () {setSpinDown();});
b_showEdit.addEventListener('click', function () {toggleEditButton();});


function toggleEditButton(){
	let chkd = "true";
	if (cb_showEditCB.checked) {
		cb_showEditCB.checked = false;
		hideElement(b_showoptions);
		chkd = "false";
	} else {
		cb_showEditCB.checked = true;
		showElement(b_showoptions);
	}
	localStorage.setItem("showEditBtn",chkd);
}

function setSpinner(){
	let chkd = "true";
	if (cb_spinYes.checked) {
		cb_spinYes.checked = false;
		hideElement(wrap_cb_spinDownYes);
		hideElement(b_spinIt);
		chkd = "false";
	} else {
		cb_spinYes.checked = true;
		showElement(wrap_cb_spinDownYes);
		showElement(b_spinIt);
	}
	localStorage.setItem("useSpin", chkd); 
}

function setSpinDown() {
	let chkd = "true";
	if (cb_spinDownYes.checked) {
		cb_spinDownYes.checked = false;
		chkd = "false";
		b_spinIt.innerText = "Spin";
	}else{
		cb_spinDownYes.checked = true;
		b_spinIt.innerText = "SpinDown";
	}
	localStorage.setItem("useSpinDown", chkd); 
}

function showElement(dis){
       dis.style.display = 'block';
  	}
  
 function hideElement(dis){
       dis.style.display = 'none';
 }
 
  function showGridElement(dis){
       dis.style.display = 'grid';
	   /* getPageData(); */  
  	}
 
 function editOptions () {
	showElement(document.getElementById('options'));
	
 }
		
			function editorInit(){
				arrowScan = false;
				setHilitedLook();
				getPageData();
				editOptions();
			}
			
			
			function nextActor(){
				setDefaultLook();
				editActors.currIx++;
				if (editActors.currIx == editActors.elmts.length) editActors.currIx = 0;
				setHilitedLook();
			}
			
			function prevActor(){
				setDefaultLook();
				editActors.currIx--;
				if (editActors.currIx == -1) editActors.currIx = editActors.elmts.length-1;
				setHilitedLook();
			}
			
			function setDefaultLook(){
				editActors.elmts[editActors.currIx].style.border = "";
				document.getElementById("basicLook").href = stylezPath + stylez[stylezIndex];
			}
			
			function setHilitedLook(){
				editActors.elmts[editActors.currIx].style.border = "10px solid orange";
				getActorData(editActors.elmts[editActors.currIx]);
			}
			
			function copyActor(){
				editActors.copied = editActors.elmts[editActors.currIx].cloneNode(true);
			}
			
			function insertClone(){
				setDefaultLook();
				editActors.elmts[editActors.currIx].parentNode.insertBefore(editActors.copied,editActors.elmts[editActors.currIx]);
				setHilitedLook();
			}
			
			function newButton(){
				newActor("newBtn");
			}
			
			function newLink(){
				newActor("newLink");
			}
			
			function newActor(atype) {
				setDefaultLook();
				editActors.copied = document.getElementById(atype).cloneNode(true);
				editActors.elmts[editActors.currIx].parentNode.insertBefore(editActors.copied,editActors.elmts[editActors.currIx]);
				editActors.elmts[editActors.currIx].removeAttribute("id");
				editActors.elmts[editActors.currIx].removeAttribute("onclick");
				setHilitedLook();
			}
			
			function cutActor(){
				setDefaultLook();
				if (editActors.elmts.length > 2) {
				    var currElmt = editActors.elmts[editActors.currIx];
					editActors.copied = editActors.elmts[editActors.currIx].parentNode.removeChild(currElmt);
					if (editActors.currIx == editActors.elmts.length) editActors.currIx = editActors.elmts.length - 1; //reset current element to last element when cutting the last element in the list.
				  }
				 setHilitedLook(); 
				 }  
			
			
			function getActorData(thisThing){
			
				let tagType = thisThing.tagName;
				let tagDescription = ((tagType === "A") ? "Link Actor" : "Button Actor");
				document.getElementById("tagXName").textContent = tagDescription;				
				document.getElementById("btnXMsg").value  = thisThing.getAttribute('data-msg');
				document.getElementById("btnXAct").value  = thisThing.getAttribute('data-r_action');
				if (tagType === "A") document.getElementById("btnXLink").value  = thisThing.getAttribute('href');
				if (tagType === "BUTTON") document.getElementById("btnXLink").value  = thisThing.getAttribute('data-src');
				document.getElementById("btnXLabel").value  = thisThing.textContent;
				document.getElementById("btnXImg").value  = thisThing.getElementsByClassName('actorImg')[0].getAttribute('src');
				document.getElementById("btnXAlt").value  = thisThing.getElementsByClassName('actorImg')[0].alt;
			}
					
			function setActorDat(){
				setActorData(editActors.elmts[editActors.currIx]);
			}
			
			function setActorData(thisThing){
				let tagType = thisThing.tagName;
				thisThing.setAttribute('data-msg',document.getElementById("btnXMsg").value);
				if (tagType === "BUTTON") {
					thisThing.setAttribute('data-r_action',document.getElementById("btnXAct").value);
					thisThing.setAttribute('data-src',document.getElementById("btnXLink").value);
				}
				if (tagType === "A") thisThing.setAttribute('href',document.getElementById("btnXLink").value);
				thisThing.getElementsByClassName('actorImg')[0].src = document.getElementById("btnXImg").value;
				thisThing.getElementsByClassName('actorImg')[0].alt = document.getElementById("btnXAlt").value;
				thisThing.getElementsByTagName('p')[0].textContent = document.getElementById("btnXLabel").value;
				getActorData(thisThing);
			}
			
			function setPageData(){
				document.getElementById("pageTitle").textContent = document.getElementById("pgTitle").value;
				document.getElementById("pageBanner").textContent = document.getElementById("pgBanner").value;
				document.getElementById("pageNote").textContent = document.getElementById("pgNote").value;
				document.getElementById("htmlName").textContent = document.getElementById("pgName").value;
				
			}
			
			function getPageData(){
				document.getElementById("pgTitle").value = document.getElementById("pageTitle").textContent;
				document.getElementById("pgBanner").value = document.getElementById("pageBanner").textContent;
				document.getElementById("pgNote").value = document.getElementById("pageNote").textContent;
				document.getElementById("pgName").value = document.getElementById("htmlName").textContent;
				
			}
			
			function ytPlayerPlay() {
				 ytPlayer.playVideo();
				 if (mediaTimer > 0){
					 setTimeout(function(){ pauseMedia();}, mediaTimer*1000);
				 }
			 }
			 
			 function ytStop() {
				ytPlayer.stopVideo();
				b_hideYTPlayer.click();
				b_showBtns.click();
				skipSpin = false;
			}
			
			
			function f_hideBtns() {
				scanActorsMin = q4ActorsTotal;
				hideElement(document.getElementById('daBtns'));
				
			}

			function f_hideYTPlayer() {
				scanActorsMax = q4ActorsTotal;
				hideElement(document.getElementById('yt_strip'));
				
			}

			function f_showBtns() {
				scanActors.currIx = 0;
				scanActorsMin = 0;
				showGridElement(document.getElementById('daBtns'));
				
			}

			function f_showYTPlayer() {
				scanActors.currIx = q4ActorsTotal;
				scanActorsMax = scanActorsTotal;
				showGridElement(document.getElementById('yt_strip'));	
			}
			
			function loadVideo(vid){
				// alert("this is the YT ID: ",vid);
				//b_hideoptions.click();
				// hideElement(document.getElementById("buttonPrevious"));
				// hideElement(document.getElementById("buttonNext"));	
				//ytPlayer.loadVideoById({videoId:vid});				
				//document.getElementById("vidId").textContent = vid;
				getYTVideo(vid);
			}

			function getYTVideo(vid) {
				// alert("this is the YT ID: ",vid);
					ytPlayer.loadVideoById({videoId:vid});
					b_hideoptions.click();
					b_hideBtns.click();
					b_showYTPlayer.click();
					ytPlayer.playVideo();
					//document.getElementById("vidId").textContent = vid;
			}
			
			function stopMedia() {
				 mediaTimer = 0;
				 ytStop();
				 audioPlayer.pause();
			 }
			 
			 function ytPlayerPlay() {
				 ytPlayer.playVideo();
				 if (mediaTimer > 0){
					 setTimeout(function(){ pauseMedia();}, mediaTimer*1000);
				 }
			 }
			 
			 function pauseMedia() {
				 
				 ytPlayer.pauseVideo();
				 audioPlayer.pause();
			 }
			 
			 function newYTDiv(){
				 if (pageNotPrepped)
				 {
						alert("This will appear to remove the YouTube video element, but when you load your new page the videos will appear and work properly. After doing this you will not be able to test YouTube links until you save and reload the page.")
						var ytWrap = document.getElementById("yt_wrapper");
						ytWrap.removeChild(document.getElementById("yt_placeholder")); //remove youtube api - it gets replaced with new parameters upon reloading.
						var newYt = document.createElement('div');
						newYt.setAttribute('id','yt_placeholder'); // add back the  empty div for the youtube api.
						ytWrap.appendChild(newYt);
						var apiScript = document.getElementById("www-widgetapi-script");
						apiScript.parentNode.removeChild(apiScript); //further cleanup to avoid accumulating redundant js references.
						pageNotPrepped = false;
				 }
				b_hideoptions.click();
				b_hideYTPlayer.click();
				b_showBtns.click();
				
				
			}