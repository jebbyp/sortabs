/*chrome.browserAction.onClicked.addListener(function(tab){
	var newUrl = "http://www.google.com";
	var Url2 = "http://www.yahoo.com";
	var array = [newUrl, Url2];
	for (var i = 0 ; i < array.length ; i++){
		chrome.tabs.create({
			url : array[i]
		});
	}
	
});
*/

chrome.browserAction.onClicked.addListener(function(getTabs){
	// gets all tabs in current window and sorts them by url in a new window
	chrome.tabs.query( {currentWindow:true} , function(tab_array){

		var array = [];

		for (var j = 0 ; j < tab_array.length ; j++){
			array.push(tab_array[j].url);
		}; 

		array = array.sort(); // sorting by urls is not complete -- different based on http, https

		var currentID = chrome.windows.WINDOW_ID_CURRENT;
		
		chrome.windows.create({
			url : array
		});

		// closes the window the extension was called from

		/**
		// this opens the urls in the same window
		for (var i = 0 ; i < array.length ; i++){
			chrome.tabs.create({
				url : array[i]
			});
		};
		*/
	});
});


	


