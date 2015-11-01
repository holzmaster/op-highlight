// ==UserScript==
// @name		OP-Highlight
// @author		holzmaster
// @namespace	holzmaster
// @include		http://pr0gramm.com*
// @include		https://pr0gramm.com*
// @version		1.1.2
// @updateURL	https://raw.githubusercontent.com/holzmaster/op-highlight/master/op-highlight.user.js
// @downloadURL	https://raw.githubusercontent.com/holzmaster/op-highlight/master/op-highlight.user.js
// @copyright	2014+, holzmaster
// @description	Hebt den OP eines Bildes in den Kommentaren hervor.
// @icon		http://pr0gramm.com/media/pr0gramm-favicon.png
// @grant		none
// ==/UserScript==

(function() {
	var opClassName = "extension-is-op"
	var cssRule = "." + opClassName + " .user:before { content: 'OP'; color: #FFF; padding: 1px 6px; vertical-align: baseline; text-align: center; font-weight: bold; border-radius: 0.25em; background-color: rgb(238, 77, 46); margin-right: 5px; }";

	p.opClass = function(currentOp, currentUser) {
		if(!currentOp || !currentUser)
			return "";
		return currentOp == currentUser ? " " + opClassName : "";
	};

	function addGlobalStyle(css) {
		var head = document.getElementsByTagName("head")[0];
		if (!head)
			return;

		var style = document.createElement("style");
		style.type = "text/css";
		style.innerHTML = css;
		head.appendChild(style);
	}

	$(function() {
		p.View.Stream.Comments.prototype.template =
		p.View.Stream.Comments.prototype.template
			.replace('class="comment{p.voteClass(c.vote)}',
					 'class="comment{p.voteClass(c.vote)}{p.opClass(itemOp,c.name)}');

		addGlobalStyle(cssRule);

		var oldLoaded = p.View.Stream.Comments.prototype.loaded;
		p.View.Stream.Comments.prototype.loaded = function(item) {
			this.data.itemOp = this.data.itemOp || item.user || null;
			oldLoaded.apply(this, arguments);
		};
	});
})();
