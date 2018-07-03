const menubar = require('menubar')

var mb = menubar({
	index: "https://m.9gag.com",
	height: '60%',
	icon: __dirname + '/icon.png',
	preloadWindow: true,
});

mb.on('ready', function ready () {
	console.log('app is ready')
});

mb.on('after-create-window', () => {
	let html = mb.window.webContents;
	html.on('dom-ready', () => {
		html.executeJavaScript(`document.getElementsByClassName("salty-bottom-ad")[0].style='height:0px !important;'`);
	});
});
