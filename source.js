// ==UserScript==
// @name        Happy International Men's Day
// @namespace   google sux
// @grant       none
// @version     1.0
// @author      delinsyl
// @description 11/19/2020, 11:58:09 AM
// @include     https://*.google.tld/
// ==/UserScript==

function isInternationalMensDay(date){
  var currentMonth = date.getMonth() + 1;
  return date.getDate() == 19 && currentMonth == 11;
}

var today = new Date();  

if (isInternationalMensDay(today)){
  var id = "lga";
  var element = document.getElementById(id);
  if (element == null) {
    console.error("[IMD]: Could not find element with id: " + id);
    return;
  }
  
  const spanGreeting = document.createElement("span");
  spanGreeting.innerHTML = "<br><span style='font-size:125%;font-weight:bold'>"
  + "Happy International Men's Day!</span>";
  element.appendChild(spanGreeting);
}
