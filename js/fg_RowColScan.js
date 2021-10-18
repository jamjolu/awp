var rowz = document.getElementsByClassName("actorRow");
var rowzIx = 0;
var noRowLit = true;
var noElemLit = true;
var colScanLoopLimit = 3;
var rowScanning = true;
var colScanning = false;
 var scanRowActorz = rowz[rowzIx].getElementsByClassName("actor");
 var colElmtIx = 0;
 const rowActorCount = scanRowActorz.length;
 const rowCount = rowz.length;
 document.addEventListener('keydown', function(event) {
	if (event.key == 'ArrowUp') {
		event.preventDefault();
	  if (rowScanning) {nextRowHilight();
	  } else { nextColElmtHilight();
	  }
	  ;
	}
 });
		 
 document.addEventListener('keydown', function(event) {
	if (event.key == 'ArrowDown') {
		event.preventDefault();
	  if (noRowLit) {
		activateColElmt();
		return;
	  }
	  if (rowScanning) {
	   rowScanning = false;
	   noElemLit = true;
	   colScanCount = 0;
	   colElmtIx = 0;
	   scanRowActorz = rowz[rowzIx].getElementsByClassName("actor");
	   nextColElmtHilight();
	  } else {
	   rowScanning = true;
	   activateColElmt();
	   lolightRow();
	   noRowLit = true;
	  }
	}
});
		 
		 function nextColElmtHilight() {
			if (noElemLit) {
			 scanRowActorz[colElmtIx].focus();
			 let labelText = document.activeElement.textContent;
			 if (labelText.length > 0) {tts.ReadText(labelText)};
			 noElemLit = false;
			} else {
			 scanRowActorz[colElmtIx].blur();
			 colElmtIx++;
			 if (colElmtIx === scanRowActorz.length) {colElmtIx = 0;};
			 scanRowActorz[colElmtIx].focus();
			 let labelText = document.activeElement.textContent;
			 if (labelText.length > 0) {tts.ReadText(labelText)};
			}
		 }
		 
		 function activateColElmt () {
		   scanRowActorz[colElmtIx].click();
		 }
		 
		 function nextRowHilight() {
			if (noRowLit) {
				hilightRow();
				scanRowActorz[colElmtIx].blur();
				noRowLit = false;
				} else {
				lolightRow();
				rowzIx++;
				if (rowzIx == (rowCount)) { rowzIx = 0;};
				scanRowActorz[colElmtIx].blur();
				hilightRow();
				}
		 }
		 
		 function hilightRow() {
			rowz[rowzIx].style.backgroundColor = 'yellow';
			
		 }
		 
		 function lolightRow() {
			rowz[rowzIx].style.backgroundColor = '';
			
		 }