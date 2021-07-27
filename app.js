//Below, if the URL already has a #, run the getProject function
if(location.hash) {
	var hash = location.hash.substr(1); //Get the URL after the # sign
	getProject();
}

//Below, when the # in the URL changes, call the getProject function
window.onhashchange = function() {
	getProject();
}

function getProject() {
	if(document.getElementById('replaceContent')) {
		var hash = location.hash.substr(1); //Update the variable
		// Below, get the HTML file with a filename that matches the hash variable
		var xhr= new XMLHttpRequest();
		xhr.open('GET', `${hash}.html`, true);
		xhr.onreadystatechange= function() {
			if (this.readyState!==4) return;
			if (this.status!==200) return; // or whatever error handling you want
			document.getElementById('replaceContent').innerHTML= this.responseText;
		};
		xhr.send();
	}
};