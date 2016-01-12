function trace(label, value, opt) {

	if (typeof(opt) === 'number') {

		if (opt === 1) {
			opt = {
				color: '#94fbfe',  //Default #000
				backgroundColor: '#1b1a36', //Default #eee
				lineColor: '#2a2945' //Default #7ACEF5
			};
		}

		if (opt === 2) {
			opt = {
				color: '#a4ee52',  //Default #000
				backgroundColor: '#28351d', //Default #eee
				lineColor: '#334722' //Default #7ACEF5
			};
		}

		if (opt === 3) {
			opt = {
				color: '#5f5f5f',  //Default #000
				backgroundColor: '#d6d6d6', //Default #eee
				lineColor: '#cbcbcb', //Default #7ACEF5
				shadow: '3px 2px 3px rgba(0, 0, 0, 0.3)'
			};
		}

		if (opt === 4) {
			opt = {
				color: '#000000',  //Default #000
				backgroundColor: '#ffff00', //Default #eee
				lineColor: '#aaaa00', //Default #7ACEF5
				shadow: 'auto'
			};
		}

	}

	opt = opt || window.traceOpt || {};

	var position = {
		tr: 'right: ' + (opt.margin || 10) + 'px; top: ' + (opt.margin || 10) + 'px; ',
		br: 'right: ' + (opt.margin || 10) + 'px; bottom: ' + (opt.margin || 10) + 'px; ',
		tl: 'left: ' + (opt.margin || 10) + 'px; top: ' + (opt.margin || 10) + 'px; ',
		bl: 'left: ' + (opt.margin || 10) + 'px; bottom: ' + (opt.margin || 10) + 'px; '
	};

	if (!window.traceOpt) {

		window.traceOpt = opt;
		window.traceOpt.outs = {};
		window.traceOpt.position = opt.position || 'tr';
		window.traceOpt.margin = opt.margin || 10;

	}

	var code =	'<div id="traceOutContainer" style="' +
				position[window.traceOpt.position] +
				'	text-align: left; ' +
				'	z-index: ' + (opt.zIndex || 9999) + '; ' +
				'	position: fixed; ' +
				'	width: ' + (opt.width || 280) + 'px; ' +
				'	padding: ' + (opt.padding || 10) + 'px; ' +
				'	font-family: sans-serif;' +
				'	font-size: ' + (opt.fontSize || 12) + 'px; ' +
				'	color: ' + (opt.color || '#000') + ';' +
				'	background-color: ' + (opt.backgroundColor || '#eee') + ';' +
				'	-moz-box-shadow: ' + (opt.shadow || '1px 1px 10px rgba(0, 0, 0, 0.3)') + ';' +
				'	-webkit-box-shadow: ' + (opt.shadow || '1px 1px 10px rgba(0, 0, 0, 0.3)') + ';' +
				'	-ms-box-shadow: ' + (opt.shadow || '1px 1px 10px rgba(0, 0, 0, 0.3)') + ';' +
				'	-0-box-shadow: ' + (opt.shadow || '1px 1px 10px rgba(0, 0, 0, 0.3)') + ';' +
				'	box-shadow: ' + (opt.shadow || '1px 1px 10px rgba(0, 0, 0, 0.3)') + ';' +
				'"></div>';

	if (!window.traceOpt.container) {

		window.traceOpt.container = document.createElement("DIV");
		window.traceOpt.container.innerHTML = code;
		document.body.appendChild(window.traceOpt.container);
		window.traceOpt.container = document.getElementById('traceOutContainer');
	}

	var propName = label,
		outStr = label,
		currOut;

	if (typeof(value) !==  'undefined') outStr = '<b>' + label + ':</b> ' + value;
	else outStr = label;

	currOut = window.traceOpt.outs[propName];

	var rowCode = '<div style="' +
		'padding: 5px 0px;' +
		'border-bottom: 1px solid ' + (opt.lineColor || '#7ACEF5') + ';' +
		'margin-bottom: 0px;"' +
	'id="traceOutContainer_' + propName + '">' + outStr + '</div>';


	if (!currOut) {
		var newDiv = document.createElement("DIV");
		newDiv.innerHTML = rowCode;
		window.traceOpt.container.appendChild(newDiv);
		if (typeof(value) !==  'undefined')  window.traceOpt.outs[propName] = document.getElementById('traceOutContainer_' + propName);


	} else {
		window.traceOpt.outs[propName].innerHTML = outStr;
	}
}
