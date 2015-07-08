
var config = new Config();

function Config() {
	this.dev = true;
	this.defaultPage = '/index.html';
	this.kakaoKey = '06f513001428c7408f80302eb3583e6f';
	this.fbAppId = '856772727693113';

    if (this.dev == true) {
    	this.domain = 'http://172.30.1.18:8000';
    } else {
    	this.domain = 'http://www.chooka.co.kr';
    } 
}

Config.prototype.init = function() {
    
};