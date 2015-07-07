var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var canvasWidth = 736;	//iphone6+
var canvasHeight = 414;	//iphone6+
var canvasLeft = -canvasWidth / 2;
var canvasRight = -canvasLeft;
var canvasTop = canvasHeight / 2;
var canvasBottom = -canvasTop

var browserType;
var browserVersion;
var deviceType;
var isMobile = false;
var isAndroid = false;
var isIos = false;
var isWindow = false;

var container;
var mapContainer;
var controls;
var camera;
var scene;
var renderer;
var projector;
var loader = new THREE.JSONLoader();
var box3 = new THREE.Box3();
var clock = new THREE.Clock();

var meshes = [];
var animatableList = [];
var touchableList = [];

var mouse = { x: 0, y: 0 };
var assetPath = "/lib/assets/";

var isPortrait = false;

var objType = {
	groom : 'groom'
,	bride : 'bride'
,	kakaoBox : 'kakaoBox'
,	facebookBox : 'facebookBox'
,	twitterBox : 'twitterBox'
,	mapBox : 'mapBox'
,	cloud : 'cloud'
,	flower : 'flower'
,	bg : 'bg'
};

var statusType = {
	normal : 'normal'
,	mapOpen : 'mapOpen'
};

var status = statusType.normal;

var boxState = {
    normal : 'normal'
,   bouncingUp : 'bouncingUp'
,   bouncingDown : 'bouncingDown'
};

var boxMoveDistance = 30;		//pixels
var boxMoveTime = 100;			//milliseconds
var boxMoveSpeed = boxMoveDistance / boxMoveTime;