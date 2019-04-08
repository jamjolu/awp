var tts = {};
tts.Synth = speechSynthesis;
tts.Voices = []; // Used to collect voices that are compatable with the html language attribute.
tts.DvIndex = 0; //Used to help identify the default tts voice for Chrome or FF on the users platform.
tts.DvRate = 0.75; // used to set speech rate between 0 and 2, 1 = 'normal'- there are other seemingly optional parameters like pitch, language, volume.
tts.On = true; //Set to false to prevent tts production.
tts.Cancel = true; // Set to true if you want reading to stop with a slide change. Otherwise, all readable text is queued for speech output.
//tts.readFrags = true; //Set to true to read fragment text content as it appears.
tts.readNotes = true; //set to true to read text content of any <aside class="notes">text content</aside> tag in a slide section

tts.ReadText = function(txt){
	// Use tts to read text. A new speech synthesis utterance instance is required for each tts output for FF.
	// Chrome lets you redefine the SpeechSynthesizerUtterance.txt property-
	// as needed without having to create a new object every time you want speech.
	// the next few lines break up long text passages into sentences. This helps overcome text length limits imposed by some tts resources like Google's.
		var block = txt;
		const rgx = /\. /gi;
		const rgx1 = /, /gi;
		const rgx2 = /\? /gi;
		const rgx3 = /\! /gi;
		var sents = [];
		block = block.replace(rgx,".~"); // Add a delimiter to sentence and phrase punctuation.
		block = block.replace(rgx1,",~");
		block = block.replace(rgx2,"?~");
		block = block.replace(rgx3,"!~");
		sents = block.split("~"); // Break the block of text into smaller chunks.
		//alert(sents);
		for (let ix=0; ix<sents.length; ix++) {
			let ttsSpeechChunk = new SpeechSynthesisUtterance(sents[ix]);
			 ttsSpeechChunk.voice = tts.Voices[tts.DvIndex]; //use default voice -- some voice must be assigned for FF to work.
			 ttsSpeechChunk.rate = tts.DvRate; 
			 tts.Synth.speak(ttsSpeechChunk);
		}
};

tts.ReadVisElmts = function(){
	// Uses arguments[0] to denote a DOM element . Then read the innerText of the rest of the list of selectors that are contained in the arguments[0] element.
	// works in Chrome, Opera and FF.
	let focusElmt = arguments[0];
	for (let i=1; i < arguments.length; i++) {
		let xElmts = focusElmt.querySelectorAll(arguments[i]);
		for (let k=0; k < xElmts.length; k++){
			tts.ReadText(xElmts[k].innerText);
		}
	}
	
};

tts.ReadAnyElmts = function(){
	// Uses arguments[0] to denote a DOM element . Then read the textContent of the rest of the list of selectors, even hidden ones, that are contained in the arguments[0] element.
	// works in Chrome, Opera and FF.
	let focusElmt = arguments[0];
	for (let i=1; i < arguments.length; i++) {
		let xElmts = focusElmt.querySelectorAll(arguments[i]);
		for (let k=0; k < xElmts.length; k++){
			tts.ReadText(xElmts[k].textContent);
		}
	}
	
};

tts.ToggleSpeech = function(){
	// turn tts on/off with status announced
	tts.On = !(tts.On);
	if (tts.On) {
		tts.ReadText("speech On!")
	} else {
		tts.Synth.cancel();
		tts.ReadText("speech Off!")
	};
};

tts.docLang = document.getElementsByTagName('html')[0].getAttribute('lang'); // get the document's language attribute to set the default language
tts.docLangVoices = [];
tts.docLangVoices[0] = 0; //prime the appropriate voices index list for voices available in document's language
tts.docLangVoiceIx = 0;



// the code below builds a list of voices hopefully compatible with the langage attribute of the webpage.
// It is borrowed with modifications from https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices 
//
function populateVoiceList() {
  if(typeof speechSynthesis === 'undefined') {
    return;
  }
  let vix = 0;
  tts.Voices = speechSynthesis.getVoices(); // speechSynthesis thing method for getting available (and sometimes unhelpful) voices.
  for(i = 0; i < tts.Voices.length ; i++) {
	  
		if (tts.Voices[i].lang.includes(tts.docLang)){ 
			 tts.docLangVoices[vix] = i;  //note the indexes of voices that match the document's html language attribute. 
			 vix++;
		}
  }
  tts.DvIndex = tts.docLangVoices[0];
}

populateVoiceList();

// I am not sure why this is necessary, but it is. Perhaps the asynch nature of the speechSynthesis magic thing needs to call
// populateVoiceList when the onvoiceschanged event occurs (thus speechSynthesis is truly ready) rather than when the same thing called on the previous line.
// The voice list does not get built otherwise in my test environment.
if (typeof speechSynthesis !== 'undefined') {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}



 
									
