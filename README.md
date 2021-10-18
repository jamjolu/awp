# awp
Accessible Web Pages with Text-to-Speech

This project consists of a set of web pages along with associated css, and js resources that offer simple low clutter layouts, easy tab/enter  and improved right-arrow/enter navigation, and text-to-speech output. In addition, the pages have a built-in editor offering users with limited technical skills means to construct customized pages. Together the page set was intended to offer simple alternative communication means, or a way for producing and presenting accessible curricula. I envisioned the set as a quick way to provide students at our school with easy-access materials that were very local, timely, compelling for them, and not covered by more full featured subscription services like Unique Learning and News2You. 

The pages now allows editors to change fonts/sizes/case for button labels. Changes to fonts are saved in local storage and changes are applied across all AWP pages in a given domain.

The web page tempates in the collection can be used to construct a static website. All that is needed is a web browser, an editor like Geany, and a place to host the pages like Neocities, or even your hard drive. The simplest method for saving a page like the gridBuilder is to use "Save as webpage complete" which would store the page and resources on your computer. The gridBuilder pages can be printed and used as an offline picture based communication strategy. 

Also included in the set are simple 2, 4, and 8 button communications pages (Quick Pages) that use local storage to store up to 12 setups. These might come in handy when a user's communication device is unavailable but the Internet and a browser are. Quick Pages include a method for sharing saved setups, and include button actions that allow linking between setups, control of an mp3 audio player, and a YouTube player with basic controls. The YouTube videos play full screen automatically when a user selects a button that is programmed to do so. The YouTube played is hidden when the video concludes, or if the user selects the Stop button in the player screen. 

Now, every template can support audio and YouTube playing. Also, the old YouTube player page has been deleted because loading it required a user to select Play to begin playing, a requirement that Web Standards now encourage and most browsers require. Because my pages already require a user to choose a button, the YouTube player embedded in every template can commence playing - no extra page load required.

I've added a support for right-arrow key scanning that (unlike the tab key) only scans visible buttons that are intended for users (and not facilitators or editors.)

I've added 2 fixed grid templates that have 7 columns and 6 rows of buttons. The fixed grid pages support row column scanning where up-arrow scans rows/items, and down-arrow selects a row/item. These pages are my attempt to support "The 36 Location Universal Core Communication Board." My implementation includes an extra column. In the template "fixed36RCScan_MB.html" I use the added column to include buttons to enable sentence construction and editing. The Universal Core Project is part of the University of North Carolina's Center for Literacy and Disability Studies.

I have also included a random selection template I call the 1_through_6_spinner.html. This template is an example and can be edited the same way the grid template can.  If, when you open this page, you don't see a small button with the letter 'E', or another button that says either 'Spin' or 'Spindown' then press alt-e to open the page editor and set the spin mode, or dsiplay the edit button as desired. Alternatively, the alt-r key combo can toggle through the spin options. The Spindown mode subtracts buttons from the set of spinner buttons until every button has been selected. This mode is intended for making sure every student is selected once - for example.  

The templates work best in up-to-date browsers that support text-to-speech, flexbox and grid css layout standards, and on most platforms. The Google Chrome and Microsoft Edge browsers offer the best support for text-to-speech across platforms. Text-to-speech does have some issues. English is the default lanuage. Other languages should be possible by resetting the <html lang="xx"> definition on each template to refer to the 2 letter code of the target language. In some cases the text-to-speech in English may sound funny because it may be generated by a speech engine in another language in spite of my (inadequate) attempts to only use speech engines that comply with the web page's lang definition. In this case, you can see if another, more appropriate, voice is available by pressing alt-v on the keyboard. Another concession I had to make was to break long sections of text into puntuation teminated sentences and phrases in an attempt to avoid the length limits set by the Google speech engines. This causes the speech to pause in places where a human reader would not, as in Mr. (pause) Magoo. Also, tts speech engines don't always get it right when there is more than one pronounciation for a word like "read." And, abbreviations can cause the tts engine confusion as in St. Nicholas versus Elm St., or Dr. Strange versus Elm Dr.. So, it is better to test your text and maybe avoid some abbreviations. There are still some restrictions on the length of text passages that can be converted to speech depending on the text-to-speech service used. For long text passages it is best to use text-to-speech options that are available on your device rather than relying on web based services.
  
In browsers other than Chrome, like Firefox, or Opera, the text-to-speech will probably depend on platform local tts services. On a Linux device this can be pretty awful sounding. Setting a Linux machine up to have a good sounding tts voice is also a challenge. Again, Google Chrome or Microsoft Edge are likely the best and easiest choices for Linux users.
  
  Known but unresolved issues--
  1. Text to speech voices can still be glitchy - sometimes a non-English tts engine will get past my meager attempts at filtering for English only voices. And, sometimes a saved voice preference is not used causing an unexpected change in voice. The later is likely do to inadequate checking on my part to ensure that the voice used is congruent with the preference saved.
  2. Page themes (background/foreground colors) may flash between themes as the page loads. Again this is happening because a saved prefered theme that is loaded via script differs from the default theme that was set at the time the page was created. 

Check out the sample pages at my website (not all the pages use the latest templates): [link to jamjolu.neocities.org](https://jamjolu.neocities.org/)
The neocities site may not have everything up-to-date, and not everything found there is on this site.
