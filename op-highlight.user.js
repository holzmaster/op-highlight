// ==UserScript==
// @name		OP-Highlight
// @author		holzmaster
// @namespace	holzmaster
// @include		http://pr0gramm.com*
// @include		https://pr0gramm.com*
// @version		1.2.0
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

	const cssRule = ".extension-is-op .user:before { content: 'OP'; color: #FFF; padding: 1px 6px; vertical-align: baseline; text-align: center; font-weight: bold; border-radius: 0.25em; background-color: rgb(238, 77, 46); margin-right: 5px; }";
	p.View.Stream.Comments.prototype.template =
	p.View.Stream.Comments.prototype.template
		.replace('<?js if(c.name == itemUser){?> <span class="user-comment-op">OP</span><?js}?>', '') /* remove features that uses span element */
		.replace('class="comment{p.voteClass(c.vote)}',
				 'class="comment{p.voteClass(c.vote)}<?js if(c.name == itemUser){?> extension-is-op<?js}?>'); /* use css-content instead */

	addGlobalStyle(cssRule);
});

