var b_pause = document.getElementById('buttonPause');
var b_play = document.getElementById('buttonPlay');
var b_stop = document.getElementById('buttonStop');
var b_previous = document.getElementById('buttonPrevious');
var b_next = document.getElementById('buttonNext');
var b_showoptions = document.getElementById('showOptions');
var b_hideoptions = document.getElementById('hideOptions');
var b_updatevideo = document.getElementById("updateVideo");
var b_showYTPlayer = document.getElementById("showYTPlayer");
var b_hideYTPlayer = document.getElementById("hideYTPlayer");
var b_hideBtns = document.getElementById('hideBtns');
var b_showBtns = document.getElementById('showBtns');

var b_showinfo = document.getElementById('showInfo');
var b_hideinfo = document.getElementById('hideInfo');
var b_updateBtns = document.getElementById('updateBtns');
var b_saveSetup = document.getElementById('saveSetup');
var b_getSetup = document.getElementById('getSetup');
var s_theSetupList = document.getElementById('theSetupList');
var b_aboutinfo = document.getElementById('aboutInfo');
var b_editinginfo = document.getElementById('editingInfo');
var b_savinginfo = document.getElementById('savingInfo');
var b_useAsInitialSetup = document.getElementById('useAsInitialSetup');
var setupPrefix = getPrefix(document.getElementById('pageType').innerText);


function getPrefix(ptype) {
	switch (ptype) {
		case '8 choices': return ('qp8.'); break;
		case '4 choices': return ('qp4.'); break;
		case '2 choices': return ('qp2.'); break;
		case 'QP8 book of the month': return ('qp8bom.'); break;
	}
}

//alert(setupPrefix);
b_play.addEventListener('click', function (){ ytPlayerPlay();});
b_stop.addEventListener('click', function (){ ytStop();});
b_pause.addEventListener('click', function (){ ytPlayer.pauseVideo();});
b_previous.addEventListener('click', function (){ nextVid();});
b_next.addEventListener('click', function (){ prevVid();});
b_showYTPlayer.addEventListener('click', function () {f_showYTPlayer();});
b_hideYTPlayer.addEventListener('click', function () {f_hideYTPlayer();});
b_showBtns.addEventListener('click', function () { f_showBtns();});
b_hideBtns.addEventListener('click', function () {f_hideBtns();});
// b_updatesearch.addEventListener('click', function (){ loadVidList(document.getElementById('searchPhrase').value);});
b_updatevideo.addEventListener('click', function (){ loadVideo(document.getElementById('ytId').value);});


b_showoptions.addEventListener('click', function (){editOptions(); });
b_hideoptions.addEventListener('click', function (){ hideElement(document.getElementById('options'));});
b_showinfo.addEventListener('click', function (){showElement(document.getElementById('info')); hideElement(document.getElementById('tab_editing')); hideElement(document.getElementById('tab_saving')); hideElement(document.getElementById('tab_about')); });
b_hideinfo.addEventListener('click', function (){ hideElement(document.getElementById('info'));});
b_updateBtns.addEventListener('click', function() { updateBtns();});
b_saveSetup.addEventListener('click', function() { modalOpen();});
b_getSetup.addEventListener('click', function() { getSetup('0');});
s_theSetupList.addEventListener('change', function() { showSetupInfo(); getSetup('0');});
b_aboutinfo.addEventListener('click', function (){ hideElement(document.getElementById('tab_editing')); hideElement(document.getElementById('tab_saving')); showElement(document.getElementById('tab_about'));});
b_editinginfo.addEventListener('click', function (){ hideElement(document.getElementById('tab_about')); hideElement(document.getElementById('tab_saving')); showElement(document.getElementById('tab_editing'));});
b_savinginfo.addEventListener('click', function (){ hideElement(document.getElementById('tab_editing')); hideElement(document.getElementById('tab_about')); showElement(document.getElementById('tab_saving'));});
b_useAsInitialSetup.addEventListener('click', function() { setInitialSetup();});

window.addEventListener("load", function(event) {
						getInitialSetup();
					});
    
 
 
 function editOptions () {
	showElement(document.getElementById('options'));
	//alert(localStorage.length + " items stored");
 }
 
 function updateBtns(){
	 document.getElementById("btn1_Label").innerText = document.getElementById("btn1Label").value;
	 document.getElementById("btn2_Label").innerText = document.getElementById("btn2Label").value;
	 document.getElementById("btn3_Label").innerText = document.getElementById("btn3Label").value;
	 document.getElementById("btn4_Label").innerText = document.getElementById("btn4Label").value;
	 document.getElementById("btn5_Label").innerText = document.getElementById("btn5Label").value;
	 document.getElementById("btn6_Label").innerText = document.getElementById("btn6Label").value;
	 document.getElementById("btn7_Label").innerText = document.getElementById("btn7Label").value;
	 document.getElementById("btn8_Label").innerText = document.getElementById("btn8Label").value;
	 document.getElementById("btn1_Btn").setAttribute("data-msg", document.getElementById("btn1Msg").value);
	 document.getElementById("btn2_Btn").setAttribute("data-msg", document.getElementById("btn2Msg").value);
	 document.getElementById("btn3_Btn").setAttribute("data-msg", document.getElementById("btn3Msg").value);
	 document.getElementById("btn4_Btn").setAttribute("data-msg", document.getElementById("btn4Msg").value);
	 document.getElementById("btn5_Btn").setAttribute("data-msg", document.getElementById("btn5Msg").value);
	 document.getElementById("btn6_Btn").setAttribute("data-msg", document.getElementById("btn6Msg").value);
	 document.getElementById("btn7_Btn").setAttribute("data-msg", document.getElementById("btn7Msg").value);
	 document.getElementById("btn8_Btn").setAttribute("data-msg", document.getElementById("btn8Msg").value);
	 document.getElementById("btn1_Img").src = document.getElementById("btn1Img").value;
	 document.getElementById("btn2_Img").src = document.getElementById("btn2Img").value;
	 document.getElementById("btn3_Img").src = document.getElementById("btn3Img").value;
	 document.getElementById("btn4_Img").src = document.getElementById("btn4Img").value;
	 document.getElementById("btn5_Img").src = document.getElementById("btn5Img").value;
	 document.getElementById("btn6_Img").src = document.getElementById("btn6Img").value;
	 document.getElementById("btn7_Img").src = document.getElementById("btn7Img").value;
	 document.getElementById("btn8_Img").src = document.getElementById("btn8Img").value;
	 document.getElementById("btn1_Btn").setAttribute("data-r_action", document.getElementById("btn1Act").value);
	 document.getElementById("btn2_Btn").setAttribute("data-r_action", document.getElementById("btn2Act").value);
	 document.getElementById("btn3_Btn").setAttribute("data-r_action", document.getElementById("btn3Act").value);
	 document.getElementById("btn4_Btn").setAttribute("data-r_action", document.getElementById("btn4Act").value);
	 document.getElementById("btn5_Btn").setAttribute("data-r_action", document.getElementById("btn5Act").value);
	 document.getElementById("btn6_Btn").setAttribute("data-r_action", document.getElementById("btn6Act").value);
	 document.getElementById("btn7_Btn").setAttribute("data-r_action", document.getElementById("btn7Act").value);
	 document.getElementById("btn8_Btn").setAttribute("data-r_action", document.getElementById("btn8Act").value);
	 document.getElementById("btn1_Btn").setAttribute("data-src", document.getElementById("btn1Link").value);
	 document.getElementById("btn2_Btn").setAttribute("data-src", document.getElementById("btn2Link").value);
	 document.getElementById("btn3_Btn").setAttribute("data-src", document.getElementById("btn3Link").value);
	 document.getElementById("btn4_Btn").setAttribute("data-src", document.getElementById("btn4Link").value);
	 document.getElementById("btn5_Btn").setAttribute("data-src", document.getElementById("btn5Link").value);
	 document.getElementById("btn6_Btn").setAttribute("data-src", document.getElementById("btn6Link").value);
	 document.getElementById("btn7_Btn").setAttribute("data-src", document.getElementById("btn7Link").value);
	 document.getElementById("btn8_Btn").setAttribute("data-src", document.getElementById("btn8Link").value);
	 
 }
 
 function saveSetup(){
	 let setupName = document.getElementById("theSetupList").value;
	  //alert(setupName);
	 if (setupName != "Default") {
		 let keyPrefix1 = setupName + ".btn1.";
		 let keyPrefix2 = setupName + ".btn2.";
		 let keyPrefix3 = setupName + ".btn3.";
		 let keyPrefix4 = setupName + ".btn4.";
		 let keyPrefix5 = setupName + ".btn5.";
		 let keyPrefix6 = setupName + ".btn6.";
		 let keyPrefix7 = setupName + ".btn7.";
		 let keyPrefix8 = setupName + ".btn8.";
		 localStorage.setItem(keyPrefix1 + "label", document.getElementById("btn1Label").value );
		 localStorage.setItem(keyPrefix2 + "label", document.getElementById("btn2Label").value );
		 localStorage.setItem(keyPrefix3 + "label", document.getElementById("btn3Label").value );
		 localStorage.setItem(keyPrefix4 + "label", document.getElementById("btn4Label").value );
		 localStorage.setItem(keyPrefix5 + "label", document.getElementById("btn5Label").value );
		 localStorage.setItem(keyPrefix6 + "label", document.getElementById("btn6Label").value );
		 localStorage.setItem(keyPrefix7 + "label", document.getElementById("btn7Label").value );
		 localStorage.setItem(keyPrefix8 + "label", document.getElementById("btn8Label").value );
		 localStorage.setItem(keyPrefix1 + "msg", document.getElementById("btn1Msg").value );
		 localStorage.setItem(keyPrefix2 + "msg", document.getElementById("btn2Msg").value );
		 localStorage.setItem(keyPrefix3 + "msg", document.getElementById("btn3Msg").value );
		 localStorage.setItem(keyPrefix4 + "msg", document.getElementById("btn4Msg").value );
		 localStorage.setItem(keyPrefix5 + "msg", document.getElementById("btn5Msg").value );
		 localStorage.setItem(keyPrefix6 + "msg", document.getElementById("btn6Msg").value );
		 localStorage.setItem(keyPrefix7 + "msg", document.getElementById("btn7Msg").value );
		 localStorage.setItem(keyPrefix8 + "msg", document.getElementById("btn8Msg").value );
		 localStorage.setItem(keyPrefix1 + "img", document.getElementById("btn1Img").value );
		 localStorage.setItem(keyPrefix2 + "img", document.getElementById("btn2Img").value );
		 localStorage.setItem(keyPrefix3 + "img", document.getElementById("btn3Img").value );
		 localStorage.setItem(keyPrefix4 + "img", document.getElementById("btn4Img").value );
		 localStorage.setItem(keyPrefix5 + "img", document.getElementById("btn5Img").value );
		 localStorage.setItem(keyPrefix6 + "img", document.getElementById("btn6Img").value );
		 localStorage.setItem(keyPrefix7 + "img", document.getElementById("btn7Img").value );
		 localStorage.setItem(keyPrefix8 + "img", document.getElementById("btn8Img").value );
		 localStorage.setItem(keyPrefix1 + "act", document.getElementById("btn1Act").value );
		 localStorage.setItem(keyPrefix2 + "act", document.getElementById("btn2Act").value );
		 localStorage.setItem(keyPrefix3 + "act", document.getElementById("btn3Act").value );
		 localStorage.setItem(keyPrefix4 + "act", document.getElementById("btn4Act").value );
		 localStorage.setItem(keyPrefix5 + "act", document.getElementById("btn5Act").value );
		 localStorage.setItem(keyPrefix6 + "act", document.getElementById("btn6Act").value );
		 localStorage.setItem(keyPrefix7 + "act", document.getElementById("btn7Act").value );
		 localStorage.setItem(keyPrefix8 + "act", document.getElementById("btn8Act").value );
		 localStorage.setItem(keyPrefix1 + "link", document.getElementById("btn1Link").value );
		 localStorage.setItem(keyPrefix2 + "link", document.getElementById("btn2Link").value );
		 localStorage.setItem(keyPrefix3 + "link", document.getElementById("btn3Link").value );
		 localStorage.setItem(keyPrefix4 + "link", document.getElementById("btn4Link").value );
		 localStorage.setItem(keyPrefix5 + "link", document.getElementById("btn5Link").value );
		 localStorage.setItem(keyPrefix6 + "link", document.getElementById("btn6Link").value );
		 localStorage.setItem(keyPrefix7 + "link", document.getElementById("btn7Link").value );
		 localStorage.setItem(keyPrefix8 + "link", document.getElementById("btn8Link").value );
		 localStorage.setItem(setupName, document.getElementById("setupInfo").value ); 
	 } else {alert("The Default setup can not be saved.");};
	 
	 
 }
 
 function getSetup(su_index) {
	 let suNameModifier = "";
	 let setupName = "Default";
	 if (setupPrefix.includes('bom')) suNameModifier = "bom"; // pick up book of the month case.
	 if (su_index === '0') {
		 setupName = document.getElementById("theSetupList").value;
		 //alert(setupName);
	 } else { //change setup from button click
		 let test_str = "1_2_3_4_5_6_7_8_9"; // allows testing for setups numbered 1 - 9. Setup # above 9 don't require leading 0 in setupName
		 if (test_str.includes(su_index)) {
			 setupName = "C8" + suNameModifier + "_Setup" + "0" + su_index;
		 } else {
			 setupName = "C8" + suNameModifier + "_Setup" + su_index;
		 }
		 document.getElementById("theSetupList").value = setupName;
		 
	 }
	 //alert(setupName);
	 if (setupName != "Default") {	 
		 let keyPrefix1 = setupName + ".btn1.";
		 let keyPrefix2 = setupName + ".btn2.";
		 let keyPrefix3 = setupName + ".btn3.";
		 let keyPrefix4 = setupName + ".btn4.";
		 let keyPrefix5 = setupName + ".btn5.";
		 let keyPrefix6 = setupName + ".btn6.";
		 let keyPrefix7 = setupName + ".btn7.";
		 let keyPrefix8 = setupName + ".btn8.";
		 document.getElementById("btn1Label").value = localStorage.getItem(keyPrefix1 + "label");
		 document.getElementById("btn2Label").value = localStorage.getItem(keyPrefix2 + "label");
		 document.getElementById("btn3Label").value = localStorage.getItem(keyPrefix3 + "label");
		 document.getElementById("btn4Label").value = localStorage.getItem(keyPrefix4 + "label");
		 document.getElementById("btn5Label").value = localStorage.getItem(keyPrefix5 + "label");
		 document.getElementById("btn6Label").value = localStorage.getItem(keyPrefix6 + "label");
		 document.getElementById("btn7Label").value = localStorage.getItem(keyPrefix7 + "label");
		 document.getElementById("btn8Label").value = localStorage.getItem(keyPrefix8 + "label");
		 document.getElementById("btn1Msg").value = localStorage.getItem(keyPrefix1 + "msg");
		 document.getElementById("btn2Msg").value = localStorage.getItem(keyPrefix2 + "msg");
		 document.getElementById("btn3Msg").value = localStorage.getItem(keyPrefix3 + "msg");
		 document.getElementById("btn4Msg").value = localStorage.getItem(keyPrefix4 + "msg");
		 document.getElementById("btn5Msg").value = localStorage.getItem(keyPrefix5 + "msg");
		 document.getElementById("btn6Msg").value = localStorage.getItem(keyPrefix6 + "msg");
		 document.getElementById("btn7Msg").value = localStorage.getItem(keyPrefix7 + "msg");
		 document.getElementById("btn8Msg").value = localStorage.getItem(keyPrefix8 + "msg");
		 document.getElementById("btn1Img").value = localStorage.getItem(keyPrefix1 + "img");
		 document.getElementById("btn2Img").value = localStorage.getItem(keyPrefix2 + "img");
		 document.getElementById("btn3Img").value = localStorage.getItem(keyPrefix3 + "img");
		 document.getElementById("btn4Img").value = localStorage.getItem(keyPrefix4 + "img");
		 document.getElementById("btn5Img").value = localStorage.getItem(keyPrefix5 + "img");
		 document.getElementById("btn6Img").value = localStorage.getItem(keyPrefix6 + "img");
		 document.getElementById("btn7Img").value = localStorage.getItem(keyPrefix7 + "img");
		 document.getElementById("btn8Img").value = localStorage.getItem(keyPrefix8 + "img");
		 document.getElementById("btn1Act").value = localStorage.getItem(keyPrefix1 + "act");
		 document.getElementById("btn2Act").value = localStorage.getItem(keyPrefix2 + "act");
		 document.getElementById("btn3Act").value = localStorage.getItem(keyPrefix3 + "act");
		 document.getElementById("btn4Act").value = localStorage.getItem(keyPrefix4 + "act");
		 document.getElementById("btn5Act").value = localStorage.getItem(keyPrefix5 + "act");
		 document.getElementById("btn6Act").value = localStorage.getItem(keyPrefix6 + "act");
		 document.getElementById("btn7Act").value = localStorage.getItem(keyPrefix7 + "act");
		 document.getElementById("btn8Act").value = localStorage.getItem(keyPrefix8 + "act");
		 document.getElementById("btn1Link").value = localStorage.getItem(keyPrefix1 + "link");
		 document.getElementById("btn2Link").value = localStorage.getItem(keyPrefix2 + "link");
		 document.getElementById("btn3Link").value = localStorage.getItem(keyPrefix3 + "link");
		 document.getElementById("btn4Link").value = localStorage.getItem(keyPrefix4 + "link");
		 document.getElementById("btn5Link").value = localStorage.getItem(keyPrefix5 + "link");
		 document.getElementById("btn6Link").value = localStorage.getItem(keyPrefix6 + "link");
		 document.getElementById("btn7Link").value = localStorage.getItem(keyPrefix7 + "link");
		 document.getElementById("btn8Link").value = localStorage.getItem(keyPrefix8 + "link");
		 document.getElementById("setupInfo").value = localStorage.getItem(setupName);
		 updateBtns();
	 } else {
		 localStorage.removeItem(setupPrefix + "initialSetup");
		 alert("The initial setup will be reset to Default.");
		 location.reload();
		 };
 }
 
  function getInitialSetup() {
	 let initSetup = localStorage.getItem(setupPrefix + "initialSetup");
	 if (initSetup){
		 document.getElementById("theSetupList").value = initSetup;
		 getSetup('0'); 
	 }
 }
 
 function setInitialSetup() {
	 let initialSetup = document.getElementById("theSetupList").value;
	 
	 if(initialSetup != "Default"){
		 localStorage.setItem(setupPrefix + "initialSetup", initialSetup);
		 alert("Check your setup choice by reloading the page.");
	 } else {
		 localStorage.removeItem(setupPrefix + "initialSetup");
		 alert("The initial setup is reset to Default. Check your choice by reloading the page.");
	 }
 }
 
 
 function showSetupInfo() {
	 let setupName = document.getElementById("theSetupList").value;
	 document.getElementById("setupInfo").value = localStorage.getItem(setupName); 
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
 
 
function ytStop() {
	ytPlayer.stopVideo();
	b_hideYTPlayer.click();
	b_showBtns.click();
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
	   /* getPageData(); */
	  
  	}
	
 function showGridElement(dis){
       dis.style.display = 'grid';
	   /* getPageData(); */
	  
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
	showElement(document.getElementById('daBtns'));
	
}

function f_showYTPlayer() {
	scanActors.currIx = q4ActorsTotal;
	scanActorsMax = scanActorsTotal;
	showGridElement(document.getElementById('yt_strip'));	
}
 
function getLocalData() {
			document.getElementById('localStore').value = JSON.stringify(localStorage);
		}
		
function setLocalData() {
		var localDat = document.getElementById('localStore').value;
		var data = JSON.parse(localDat);
			Object.keys(data).forEach(function (k) {
			localStorage.setItem(k, data[k]);
			});
		}
 
  