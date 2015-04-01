function load_anchors() {
	var sAnchors = '';
	$('a').each(function() {
		var aid = $(this).attr("id");
		if (aid != null && aid != 'undefined ' && $.trim(aid).length > 0) {
			sAnchors += '<span style="text-decoration: underline; color: blue; cursor:pointer;" onclick="go2An(this);">' + aid + '</span>&nbsp;<br>';
		}
	});
	$('body').prepend(sAnchors);
}

function go2An(obj) {
	location.href = '#' + unescape($(obj).html());
}

$(document).ready(function() {
	load_anchors();
});