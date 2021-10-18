	var s_btnlabelsz = document.getElementById('btnLabelSz');
	var s_btnlabelfnt = document.getElementById('btnLabelFnt');
	var s_btnlabelcase = document.getElementById('btnLabelCase');
	var fontKeyPrefix = "actorQP8.";
	s_btnlabelsz.addEventListener('change', function() { setLabelStyles(); saveFontSettings();});
	s_btnlabelfnt.addEventListener('change', function() { setLabelStyles(); saveFontSettings();});
	s_btnlabelcase.addEventListener('change', function() { setLabelStyles(); saveFontSettings();});
	window.addEventListener("load", function(event) {
						getFontSettings();
					});
					
	function getFontSettings() {
	let fntSzIx = localStorage.getItem(fontKeyPrefix +"fntSzIx");
	 let fntCaseIx = localStorage.getItem(fontKeyPrefix + "fntCaseIx");
	 let fntFamIx = localStorage.getItem(fontKeyPrefix + "fntFamIx");
	 if (fntSzIx >= 0){
		 s_btnlabelsz.selectedIndex = fntSzIx;
	 }
	 if (fntCaseIx >= 0){
		 s_btnlabelcase.selectedIndex = fntCaseIx; 
	 }
	 if (fntFamIx >= 0){
		 s_btnlabelfnt.selectedIndex = fntFamIx; 
	 }
	 setLabelStyles();
 }
 
 function saveFontSettings() {
	 localStorage.setItem(fontKeyPrefix + "fntSzIx", s_btnlabelsz.selectedIndex );
	 localStorage.setItem(fontKeyPrefix + "fntCaseIx", s_btnlabelcase.selectedIndex );
	 localStorage.setItem(fontKeyPrefix + "fntFamIx", s_btnlabelfnt.selectedIndex );
 }
 
	function setLabelStyles() {
				let labelz = document.querySelectorAll('.actorQPLabel');
				let fntSz = s_btnlabelsz.value;
				let fntCase = s_btnlabelcase.value;
				let fntFamily = s_btnlabelfnt.value;
				
				labelz.forEach(function(userItem) {
					userItem.style.fontSize = fntSz;
					userItem.style.textTransform = fntCase;
					userItem.style.fontFamily = fntFamily;
				});
				
			}
	
	function resetLabelStyles() {
		let labelz = document.querySelectorAll('.actorQPLabel');
		labelz.forEach(function(userItem) {
					userItem.style.fontSize = "";
					userItem.style.textTransform = "";
					userItem.style.fontFamily = "";
		});
		s_btnlabelsz.selectedIndex = 0;
		s_btnlabelcase.selectedIndex = 0;
		s_btnlabelfnt.selectedIndex = 0;
		saveFontSettings();
		
	}
	
	