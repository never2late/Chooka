
var config = new Config();

function Config() {
	this.dev = true;
	this.defaultPage = '/index.html';
	this.kakaoKey = '47e62a1dbeb0b3bfda53287384a706c5';
	this.fbAppId = '856772727693113';

    if (this.dev == true) {
    	this.domain = 'http://172.30.1.18:8000';
    } else {
    	this.domain = 'http://www.chooka.co.kr';
    } 
}

Config.prototype.init = function() {
    
};