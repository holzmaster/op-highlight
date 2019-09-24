// ==UserScript==
// @name		OP-Highlight
// @author		holzmaster
// @namespace		holzmaster
// @include		http://pr0gramm.com*
// @include		https://pr0gramm.com*
// @version		1.2.1
// @updateURL	https://holzmaster.github.io/op-highlight/op-highlight.user.js
// @downloadURL	https://holzmaster.github.io/op-highlight/op-highlight.user.js
// @copyright	2014+, holzmaster
// @description	Hebt den OP eines Bildes in den Kommentaren hervor.
// @icon		http://pr0gramm.com/media/pr0gramm-favicon.png
// @grant		none
// ==/UserScript==

function addGlobalStyle(css) {
	const style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = css;
	document.head.appendChild(style);
}

document.addEventListener("DOMContentLoaded", () => {
	"use strict";

	const cssRule = `span.user-comment-op { 
				border-radius: 4px;
				padding: 1px 5px;
				vertical-align: baseline;
				text-align: center;
				font-weight: bold;
				border-radius: 0.25em;
			}`;
	addGlobalStyle(cssRule);
});

