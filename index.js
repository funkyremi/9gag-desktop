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
