
function table_search() {
	var ts = $.trim($('#table_search').val()).toLowerCase();
	var arr = ts.split(' ');
	var table = $('table')[0];
	var trs = $(table).find('tr');
	for(var i = 0; i < trs.length; i++) {
		var td = $(trs[i]).find('td')[0];
		var contains = true;
		tdv = $.trim($(td).html()).toLowerCase();
		for(var p = 0; p < arr.length; p++) {
			if (tdv.indexOf($.trim(arr[p])) == -1) {
				contains = false;
				break;
			}
		}
		if (contains) {
			$(trs[i]).show();
		} else {
			$(trs[i]).hide();
		}

	}
}

$(document).ready(function(){
	var obj = "Search By <input type='text' id='table_search' size='40' onkeyup='table_search();'><p>";
	$('body').prepend(obj);
});