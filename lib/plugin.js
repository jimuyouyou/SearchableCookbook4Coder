var cfg = {
	showContent: '0'
}

function showIndex() {
	$('textarea').each(function() {
		var fname = $(this).attr('tt');
		var sIn = '<h3 onclick=\'openThis("' + fname + '");\'>'  + fname + '</h3>';
		//sIn += '<h4 tt="fopen" onclick="showElement(this);">' + 'View' + '</h4>';
		//var sIn = '<br/><a href="' + fname + '" target="_newtab">' + fname + '</a><br/>';
		$(sIn).insertBefore($(this));
	});
	$('h3').show();
	// $('h4').hide();
	// $('textarea').hide();
}

function openThis(fname) {
	//window.open(fname, "_newtab");
	window.open(fname);
	$(this).next().show();
}

function showElement(obj) {
	var tt = $(obj).html();
	$('textarea').each(function() {
		if($(this).attr('tt') == tt) {
			$(this).textareaAutoHeight();
			$(this).toggle();
		}
	});
}

function search() {
	$('h3').hide();
	// $('h4').hide();
	// $('textarea').hide();
	
	$('a').hide();
	var stext = $.trim($('#stext').val());
	var s1 = stext.toLowerCase();
	$('h3').each(function() {
		var s2 = $.trim($(this).html().toLowerCase());
		if(s2.indexOf(s1) != -1) {
			$(this).show();
		}
	});
	
	// var sc = cfg.showContent;
	// $('textarea').each(function() {
	// 	if(sc-- > 0 && $(this).attr('tt').indexOf(stext) != -1) {
	// 		$(this).show();
	// 	}
	// });
}

$.fn.extend({
	textareaAutoHeight: function (options) {
		this._options = {
			minHeight: 0,
			maxHeight: 1000
		}
		
		this.init = function () {
			for (var p in options) {
				this._options[p] = options[p];
			}
			if (this._options.minHeight == 0) {
				this._options.minHeight=parseFloat($(this).height());
			}
			for (var p in this._options) {
				if ($(this).attr(p) == null) {
					$(this).attr(p, this._options[p]);
				}
			}
			$(this).keyup(this.resetHeight).change(this.resetHeight)
			.focus(this.resetHeight);
		}
		this.resetHeight = function () {
			var _minHeight = parseFloat($(this).attr("minHeight"));
			var _maxHeight = parseFloat($(this).attr("maxHeight"));
			
			if (!$.browser.msie) {
				$(this).height(0);
			}
			var h = parseFloat(this.scrollHeight);
			h = h < _minHeight ? _minHeight :
			h > _maxHeight ? _maxHeight : h;
			$(this).height(h).scrollTop(h);
			if (h >= _maxHeight) {
				$(this).css("overflow-y", "scroll");
			}
			else {
				$(this).css("overflow-y", "hidden");
			}
		}
		this.init();
	}
});

$(document).ready(function() {
	showIndex();
});