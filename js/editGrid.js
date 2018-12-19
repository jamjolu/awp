var editActors = {};
var pageElmt = document.getElementById("thisPage");
	editActors.elmts =  pageElmt.getElementsByClassName("actor");
	editActors.currIx = 0;
	editActors.copied = {};
	
var b_showoptions = document.getElementById('showOptions');
var b_hideoptions = document.getElementById('hideOptions');
var b_prevactor = document.getElementById('prevAct');
var b_nextactor = document.getElementById('nextAct');
var b_copyactor = document.getElementById('copyAct');
var b_insertactor = document.getElementById('insertAct');
var b_cutactor = document.getElementById('cutAct');
var b_showinfo = document.getElementById('showInfo');
var b_hideinfo = document.getElementById('hideInfo');

b_showoptions.addEventListener('click', function (){editorInit(); });
b_hideoptions.addEventListener('click', function (){ hideElement(document.getElementById('options')); setDefaultLook();});
b_prevactor.addEventListener('click', function (){prevActor(); });
b_nextactor.addEventListener('click', function (){nextActor(); });
b_copyactor.addEventListener('click', function (){copyActor(); });
b_insertactor.addEventListener('click', function (){insertClone(); });
b_cutactor.addEventListener('click', function (){cutActor(); });
b_showinfo.addEventListener('click', function (){showElement(document.getElementById('info')); });
b_hideinfo.addEventListener('click', function (){hideElement(document.getElementById('info'));});

function showElement(dis){
       dis.style.display = 'block';
  	}
  
 function hideElement(dis){
       dis.style.display = 'none';
 }
 
 function editOptions () {
	showElement(document.getElementById('options'));
	
 }
		
			function editorInit(){
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
				document.getElementById("btnXLink").value  = thisThing.getAttribute('href');
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
				if (tagType === "BUTTON") thisThing.setAttribute('data-r_action',document.getElementById("btnXAct").value);
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