var b_showoptions = document.getElementById('showOptions');
var b_hideoptions = document.getElementById('hideOptions');
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
var setupPrefix = "qp4.";

b_showoptions.addEventListener('click', function (){editOptions(); });
b_hideoptions.addEventListener('click', function (){ hideElement(document.getElementById('options'));});
b_showinfo.addEventListener('click', function (){showElement(document.getElementById('info')); hideElement(document.getElementById('tab_editing')); hideElement(document.getElementById('tab_saving')); hideElement(document.getElementById('tab_about')); });
b_hideinfo.addEventListener('click', function (){ hideElement(document.getElementById('info'));});
b_updateBtns.addEventListener('click', function() { updateBtns();});
b_saveSetup.addEventListener('click', function() { saveSetup();});
b_getSetup.addEventListener('click', function() { getSetup();});
s_theSetupList.addEventListener('change', function() { showSetupInfo();});
b_aboutinfo.addEventListener('click', function (){ hideElement(document.getElementById('tab_editing')); hideElement(document.getElementById('tab_saving')); showElement(document.getElementById('tab_about'));});
b_editinginfo.addEventListener('click', function (){ hideElement(document.getElementById('tab_about')); hideElement(document.getElementById('tab_saving')); showElement(document.getElementById('tab_editing'));});
b_savinginfo.addEventListener('click', function (){ hideElement(document.getElementById('tab_editing')); hideElement(document.getElementById('tab_about')); showElement(document.getElementById('tab_saving'));});
b_useAsInitialSetup.addEventListener('click', function() { setInitialSetup();});

window.addEventListener("load", function(event) {
						getInitialSetup();
					});
    
  function showElement(dis){
       dis.style.display = 'block';
  	}
  
 function hideElement(dis){
       dis.style.display = 'none';
 }
 
 function editOptions () {
	showElement(document.getElementById('options'));
	//alert(localStorage.length + " items stored");
 }
 
 function updateBtns(){
	 document.getElementById("btn1_Label").innerText = document.getElementById("btn1Label").value;
	 document.getElementById("btn2_Label").innerText = document.getElementById("btn2Label").value;
	 document.getElementById("btn3_Label").innerText = document.getElementById("btn3Label").value;
	 document.getElementById("btn4_Label").innerText = document.getElementById("btn4Label").value;
	 document.getElementById("btn1_Btn").setAttribute("data-msg", document.getElementById("btn1Msg").value);
	 document.getElementById("btn2_Btn").setAttribute("data-msg", document.getElementById("btn2Msg").value);
	 document.getElementById("btn3_Btn").setAttribute("data-msg", document.getElementById("btn3Msg").value);
	 document.getElementById("btn4_Btn").setAttribute("data-msg", document.getElementById("btn4Msg").value);
	 document.getElementById("btn1_Img").src = document.getElementById("btn1Img").value;
	 document.getElementById("btn2_Img").src = document.getElementById("btn2Img").value;
	 document.getElementById("btn3_Img").src = document.getElementById("btn3Img").value;
	 document.getElementById("btn4_Img").src = document.getElementById("btn4Img").value;
 }
 
 function saveSetup(){
	 let setupName = document.getElementById("theSetupList").value;
	 if (setupName != "Default") {
		 let keyPrefix1 = setupName + ".btn1.";
		 let keyPrefix2 = setupName + ".btn2.";
		 let keyPrefix3 = setupName + ".btn3.";
		 let keyPrefix4 = setupName + ".btn4.";
		 localStorage.setItem(keyPrefix1 + "label", document.getElementById("btn1Label").value );
		 localStorage.setItem(keyPrefix2 + "label", document.getElementById("btn2Label").value );
		 localStorage.setItem(keyPrefix3 + "label", document.getElementById("btn3Label").value );
		 localStorage.setItem(keyPrefix4 + "label", document.getElementById("btn4Label").value );
		 localStorage.setItem(keyPrefix1 + "msg", document.getElementById("btn1Msg").value );
		 localStorage.setItem(keyPrefix2 + "msg", document.getElementById("btn2Msg").value );
		 localStorage.setItem(keyPrefix3 + "msg", document.getElementById("btn3Msg").value );
		 localStorage.setItem(keyPrefix4 + "msg", document.getElementById("btn4Msg").value );
		 localStorage.setItem(keyPrefix1 + "img", document.getElementById("btn1Img").value );
		 localStorage.setItem(keyPrefix2 + "img", document.getElementById("btn2Img").value );
		 localStorage.setItem(keyPrefix3 + "img", document.getElementById("btn3Img").value );
		 localStorage.setItem(keyPrefix4 + "img", document.getElementById("btn4Img").value );
		 localStorage.setItem(setupName, document.getElementById("setupInfo").value ); 
	 } else {alert("The Default setup can not be saved.");};
	 
	 
 }
 
 function getSetup() {
	 let setupName = document.getElementById("theSetupList").value;
	 if (setupName != "Default") {	 
		 let keyPrefix1 = setupName + ".btn1.";
		 let keyPrefix2 = setupName + ".btn2.";
		 let keyPrefix3 = setupName + ".btn3.";
		 let keyPrefix4 = setupName + ".btn4.";
		 document.getElementById("btn1Label").value = localStorage.getItem(keyPrefix1 + "label");
		 document.getElementById("btn2Label").value = localStorage.getItem(keyPrefix2 + "label");
		 document.getElementById("btn3Label").value = localStorage.getItem(keyPrefix3 + "label");
		 document.getElementById("btn4Label").value = localStorage.getItem(keyPrefix4 + "label");
		 document.getElementById("btn1Msg").value = localStorage.getItem(keyPrefix1 + "msg");
		 document.getElementById("btn2Msg").value = localStorage.getItem(keyPrefix2 + "msg");
		 document.getElementById("btn3Msg").value = localStorage.getItem(keyPrefix3 + "msg");
		 document.getElementById("btn4Msg").value = localStorage.getItem(keyPrefix4 + "msg");
		 document.getElementById("btn1Img").value = localStorage.getItem(keyPrefix1 + "img");
		 document.getElementById("btn2Img").value = localStorage.getItem(keyPrefix2 + "img");
		 document.getElementById("btn3Img").value = localStorage.getItem(keyPrefix3 + "img");
		 document.getElementById("btn4Img").value = localStorage.getItem(keyPrefix4 + "img");
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
		 getSetup(); 
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
 
  