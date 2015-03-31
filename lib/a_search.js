function a_search() {
	var stext = $.trim($('#k_search').val());
	var s1 = stext.toLowerCase();
	$('a').each(function() {
		var contains = true;
		var arr = s1.split(' ');
		var s2 = $.trim($(this).html().toLowerCase());
		if (s2 != '') {
			for(var i = 0; i < arr.length; i++) {
				if (s2.indexOf($.trim(arr[i])) == -1) {
					contains = false;
					break;
				}
			}

			if(contains) {
				$(this).show();
			} else {
				$(this).hide();
			}
		}
	});
}


$(document).ready(function() {
	var obj = "Search By <input type='text' id='k_search' size='40' onkeyup='a_search();'><p>";
	$('body').prepend(obj);
	$('#k_search').focus();
});