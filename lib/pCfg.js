function loadCfg() {
	if (cfg != null && cfg.labels != null) {
		var sResult = '';
		for(var i = 0; i < cfg.labels.length; i++) {
			sResult += '<b onclick="alterKey(this);">' + cfg.labels[i] + '</b>&nbsp;';
		}
		$('body').prepend(sResult);
	}
}

function alterKey(obj) {
	$('#k_search').val($(obj).html());
	$('#k_search').keyup();
	$('#k_search').focus();
}

$(document).ready(function(){
	loadCfg();
});