var b_showoptions = document.getElementById('showOptions');
var b_hideoptions = document.getElementById('hideOptions');
var b_updateBtns = document.getElementById('updateBtns');
var b_saveSetup = document.getElementById('saveSetup');
var b_getSetup = document.getElementById('getSetup');
var s_theSetupList = document.getElementById('theSetupList');

b_showoptions.addEventListener('click', function (){editOptions(); });
b_hideoptions.addEventListener('click', function (){ hideElement(document.getElementById('options'));});
b_updateBtns.addEventListener('click', function() { updateBtns();});
b_saveSetup.addEventListener('click', function() { saveSetup();});
b_getSetup.addEventListener('click', function() { getSetup();});
s_theSetupList.addEventListener('change', function() { showSetupInfo();});

    
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
	 document.getElementById("btn1_Btn").setAttribute("data-msg", document.getElementById("btn1Msg").value);
	 document.getElementById("btn2_Btn").setAttribute("data-msg", document.getElementById("btn2Msg").value);
	 document.getElementById("btn1_Img").src = document.getElementById("btn1Img").value;
	 document.getElementById("btn2_Img").src = document.getElementById("btn2Img").value;
 }
 
 function saveSetup(){
	 let setupName = document.getElementById("theSetupList").value;
	 if (setupName != "Default") {
		 let keyPrefix1 = setupName + ".btn1.";
		 let keyPrefix2 = setupName + ".btn2.";
		 localStorage.setItem(keyPrefix1 + "label", document.getElementById("btn1Label").value );
		 localStorage.setItem(keyPrefix2 + "label", document.getElementById("btn2Label").value );
		 localStorage.setItem(keyPrefix1 + "msg", document.getElementById("btn1Msg").value );
		 localStorage.setItem(keyPrefix2 + "msg", document.getElementById("btn2Msg").value );
		 localStorage.setItem(keyPrefix1 + "img", document.getElementById("btn1Img").value );
		 localStorage.setItem(keyPrefix2 + "img", document.getElementById("btn2Img").value );
		 localStorage.setItem(setupName, document.getElementById("setupInfo").value ); 
	 } else {alert("The Default setup can not be saved.");};
	 
	 
 }
 
 function getSetup() {
	 let setupName = document.getElementById("theSetupList").value;
	 if (setupName != "Default") {	 
		 let keyPrefix1 = setupName + ".btn1.";
		 let keyPrefix2 = setupName + ".btn2.";
		 document.getElementById("btn1Label").value = localStorage.getItem(keyPrefix1 + "label");
		 document.getElementById("btn2Label").value = localStorage.getItem(keyPrefix2 + "label");
		 document.getElementById("btn1Msg").value = localStorage.getItem(keyPrefix1 + "msg");
		 document.getElementById("btn2Msg").value = localStorage.getItem(keyPrefix2 + "msg");
		 document.getElementById("btn1Img").value = localStorage.getItem(keyPrefix1 + "img");
		 document.getElementById("btn2Img").value = localStorage.getItem(keyPrefix2 + "img");
		 document.getElementById("setupInfo").value = localStorage.getItem(setupName);
		 updateBtns();
	 } else {location.reload();};
 }
 
 function showSetupInfo() {
	 let setupName = document.getElementById("theSetupList").value;
	 document.getElementById("setupInfo").value = localStorage.getItem(setupName); 
 }
 
  