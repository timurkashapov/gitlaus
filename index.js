const {app, BrowserWindow} = require ('electron');
const url = require('url');

function boot() {
	window = new BrowserWindow();
	window.loadURL(url.format({
		pathname: 'index.html',
		slashes: true
	}));
}

app.on('ready', boot);