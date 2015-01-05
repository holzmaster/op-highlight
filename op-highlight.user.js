// ==UserScript==
// @name		OP-Highlight
// @author		holzmaster
// @namespace	holzmaster
// @include		http://pr0gramm.com*
// @version		1.0.0
// @updateURL	https://raw.githubusercontent.com/pr0nopoly/op-highlight/master/op-highlight.user.js
// @downloadURL	https://raw.githubusercontent.com/pr0nopoly/op-highlight/master/op-highlight.user.js
// @copyright	2014+, holzmaster
// @description	Hebt den OP eines Bildes in den Kommentaren hervor.
// @grant		none
// ==/UserScript==

(function() {
	var opClassName = "extension-is-op"
	var cssRule = "." + opClassName + " .user:before { content: '[OP] '; color: #EE4D2E; }";

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
			this.data.itemOp = item.user || null;
			oldLoaded.apply(this, arguments);
		};
	});
})();
