//Test script. No server interaction has been implemented yet.

var loginTextbox = document.getElementById("login-textbox");

loginTextbox.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("login-confirm").click();
  }
}); 

function pushthebutton(){
 	update(1);
	//showLogin();
}

function update(progress) {
  if (progress == 0){
	document.getElementById("the-button").disabled = true;
  }
  else {
	document.getElementById("the-button").disabled = false;
  }
  document.getElementById("body").className = "body page-background-" + progress;
  document.getElementById("progress-bar").className = "progress-bar-" + progress;
  document.getElementById("progress-bar-anim").className = "progress-bar-anim-" + progress;
}

function showLogin() {
	document.getElementById("login-overlay").className = "login-overlay-enabled";
	document.getElementById("login-textbox").focus();
}

function showHelp() {
	document.getElementById("how-to-play-overlay").className = "how-to-play-overlay-enabled";
}

function hideHelp() {
	document.getElementById("how-to-play-overlay").className = "how-to-play-overlay";
}