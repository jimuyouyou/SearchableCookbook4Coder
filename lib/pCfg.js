function loadCfg() {
	var sResult = '';
	for(var i = 0; i < cfg.labels; i++) {
		sResult += '<h5>' + cfg.labels[i] + '</h5>&nbsp;';
	}
	$(body).prepend(sResult);
}