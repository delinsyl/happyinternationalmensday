// ==UserScript==
// @name        Happy International Men's Day
// @namespace   google sux
// @grant       none
// @version     1.0
// @author      delinsyl
// @description Exchanges google's logo to also celebrate the International Men's Day.
// @include     https://*.google.tld/*
// ==/UserScript==

function isInternationalMensDay(date){
  var currentMonth = date.getMonth() + 1;
  return date.getDate() == 19 && currentMonth == 11;
}

function logWhenElementNotFound(element, id) {
  if (element == null) {
    console.error("[IMD]: Could not find element with id: " + id);
    return true;
  }
  return false;
}

function exchangeLogo(today){
  const parentId = "lga";
  var parentElement = document.getElementById(parentId);
  if (logWhenElementNotFound(parentId)) {
    return;
  }
  
  const logoId = "hplogo";
  var logoElement = document.getElementById(logoId);
  if (logWhenElementNotFound(logoId)) {
    return;
  }
  
  // Delete logo
  parentElement.removeChild(parentElement.lastChild);
  
  const year = today.getFullYear();
  
  var linkA = document.createElement("a");
  linkA.href = "https://" + window.location.hostname + "/search?q=International+Men%27s+Day+" + year; 
  var logoImg = document.createElement("img");
  logoImg.style = "padding-top:109px;width:272px;height:101px;";
  logoImg.alt = "Google";
  logoImg.src = "https://media.githubusercontent.com/media/delinsyl/happyinternationalmensday/master/img/logo.png";
  logoImg.title = "International Men's Day " + year;
  
  linkA.appendChild(logoImg);
  parentElement.appendChild(linkA);
}

function addHolidayInfo() {
  const parentId = "prm";
  var prmDiv = document.getElementById(parentId);
  if (logWhenElementNotFound(parentId)) {
    return;
  }
  
  var infoA = document.createElement("a");
  infoA.href = "https://www.internationalmensday.info/";
  infoA.innerHTML = "Celebrating International Men's Day";
  prmDiv.appendChild(infoA);
}

function exchangeSmallLogo(date) {
  const logoClass = "logo";
  var elements = document.getElementsByClassName(logoClass);
  if (logWhenElementNotFound(logoClass) || elements.length < 1) {
    return;
  }
  
  var logoDiv = elements[0];
  // Delete logo
  logoDiv.removeChild(logoDiv.lastChild);
  
  var linkA = document.createElement("a");
  linkA.href = "https://" + window.location.hostname; 
  var logoImg = document.createElement("img");
  logoImg.style = "width:92px;height:34px;";
  logoImg.alt = "Google";
  logoImg.src = "https://media.githubusercontent.com/media/delinsyl/happyinternationalmensday/master/img/logo.png";
  logoImg.title = "International Men's Day " + date.getFullYear();
  
  linkA.appendChild(logoImg);
  logoDiv.appendChild(linkA);
}

function isHomePage() {
  return window.location.pathname == "/" || window.location.pathname == "/webhp";
}

function isSearchPage() {
  return window.location.pathname.startsWith("/search"); 
}

var today = new Date();  
if (!isInternationalMensDay(today)){
  return;
}

if (isHomePage()) {
  exchangeLogo(today);
  addHolidayInfo();
}

if (isSearchPage()) {
  exchangeSmallLogo(today);
}
