
function table_search() {
	var ts = $.trim($('#table_search').val()).toLowerCase();
	var trs = $('tr');
	for(var i = 0; i < trs.length; i++) {
		var td = $(trs[i]).find('td')[0];
		tdv = $.trim($(td).html()).toLowerCase();
		if (tdv.indexOf(ts) != -1) {
			$(trs[i]).show();
		} else {
			$(trs[i]).hide();
		}

	}
}