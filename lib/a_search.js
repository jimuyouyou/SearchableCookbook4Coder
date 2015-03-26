function a_search() {
	$('a').hide();
	var stext = $.trim($('#a_search').val());
	var s1 = stext.toLowerCase();
	$('a').each(function() {
		var contains = true;
		var arr = s1.split(' ');
		var s2 = $.trim($(this).html().toLowerCase());
		for(var i = 0; i < arr.length; i++) {
			if (s2.indexOf($.trim(arr[i])) == -1) {
				contains = false;
				break;
			}
		}

		if(contains) {
			$(this).show();
		}
	});
}


$(document).ready(function() {
	var obj = "Search By <input type='text' id='a_search' size='40' onkeyup='a_search();'><p>";
	$('body').prepend(obj);
});