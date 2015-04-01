function load_anchors() {
	var sAnchors = '';
	$('h1,h2,h3,h4,h5').each(function() {
		var htm = $(this).text();
		if (typeof(htm) != 'undefined' && htm != null && $.trim(htm).length > 0) {
			$(this).prepend("<a id='" + htm + "'> </a>");
			sAnchors += '<a style="text-decoration: underline; color: blue; cursor:pointer;" onclick="go2An(this);">' + htm + '</a><p>';
		}
	});
	$('body').prepend(sAnchors);
}

function go2An(obj) {
	location.href = '#' + $(obj).text();
}

$(document).ready(function() {
	load_anchors();
});