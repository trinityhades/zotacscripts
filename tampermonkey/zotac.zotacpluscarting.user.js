// ==UserScript==
// @name         zotac.zotacpluscarting
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://localhost:8000/zotacpluscarting.html
// @icon         https://www.google.com/s2/favicons?domain=undefined.localhost
// @grant        none
// ==/UserScript==

// Get the form_key with the following command from a zotacpage:
// document.querySelector('input[name="form_key"]').value
// Browse to your local page and then set the form_key value
// with the following command
// localStorage.setItem("form_key","REPLACEWITHYOURFORMKEY");

(function() {
    'use strict';
    var pagetitle = String(document.title);
    console.log(pagetitle);
    if(pagetitle.includes("Zotac Cart Helper")) {
        var form_key = localStorage.getItem("form_key");
        document.querySelector('input[name="form_key"]').value = form_key
        document.getElementById("fk_button").click();
        console.log("Replacing form_key with " + form_key);
        console.log("If form_key is null you need to set it manually");
        console.log("Look at comments in code for instructions");
    }
})();
