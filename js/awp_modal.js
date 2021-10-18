// Get the modal
var setupModal = document.getElementById("setupModal");

// Get the button that opens the modal
var b_modal_btn = document.getElementById("modalSaveBtn");

// Get the <span> element that closes the modal


var b_modal_saveSetup = document.getElementById("modal_saveSetup");
var b_modal_noSaveSetup = document.getElementById("modal_noSaveSetup");


b_modal_btn.addEventListener('click', function (){modalOpen();});
b_modal_saveSetup.addEventListener('click', function (){modalSaveSetup();});
b_modal_noSaveSetup.addEventListener('click', function (){ document.getElementById("setupModal").style.display = "none";});

function modalOpen() {
	let daList = document.getElementById("theSetupList");
	let setupMsg = "Do you really want to save this set of buttons as " + daList.options[daList.selectedIndex].text + " ?" ;
	document.getElementById("modalMsg").innerText = setupMsg;
	document.getElementById("setupModal").style.display = "block";
	
}

function modalSaveSetup() {
	saveSetup();
	document.getElementById("setupModal").style.display = "none";
}


