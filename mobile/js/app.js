/**
 * Open a new appworks enabled webview using another html file in the local filesystem
 */
function openUrl() {
  // The URL to open
  var url = document.getElementById("url").value;
  // The target to open the webview with
  var target = "_blank";
  // A string of comma separated options
  var options = "";

  // Set location bar visibility
  if(isLocationChecked()) {
    options += "location=yes";
  } else {
    options += "location=no";
  }

  // Set the custom close caption
  if(isCustomCloseChecked()) {
    options += ",closebuttoncaption="+getCustomCloseText();
  }

  // Create a new AWWebView instance
  var webview = new Appworks.AWWebView();

  // Call AWWebView.open passing in the url, target and options
  // Retain this in a reference if further functions need to be applied to it.
  var ref = webview.open(url, target, options);

  // We can add event handlers to the reference of the opened webview
  // These events you can listen for are: loadstart, loadstop, loaderror, exit
  ref.addEventListener("exit", function() {
    out("WebView closed!");
  });
}

/************************
 * Methods for checking *
 * options properties   *
 ************************/
function isLocationChecked() {
  var el = document.getElementById("location");
  return el.checked;
}

function isCustomCloseChecked() {
  var el = document.getElementById("custom-close");
  return el.checked;
}

function getCustomCloseText() {
  var el = document.getElementById("custom-close-text");
  return el.value;
}

/********************
** Utility methods **
********************/
function out(message) {
  var el = document.getElementById("result");
  el.innerHTML = message;
}

function toggleCustomClose(checkbox) {
  var el = document.getElementById("custom-close-text-wrapper");
  el.style.display = (checkbox.checked) ? "block" : "none";
}
