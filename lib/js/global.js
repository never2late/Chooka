var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var canvasWidth = 736;	//iphone6+
var canvasHeight = 414;	//iphone6+
var canvasLeft = -canvasWidth / 2;
var canvasRight = -canvasLeft;
var canvasTop = canvasHeight / 2;
var canvasBottom = -canvasTop

var container;
var mapContainer;
var controls;
var camera;
var scene;
var renderer;
var projector;
var loader = new THREE.JSONLoader();
var box3 = new THREE.Box3();

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
,	mapBox : 'mapBox'
,	cloud : 'cloud'
,	bg : 'bg'
};

var statusType = {
	normal : 'normal'
,	mapOpen : 'mapOpen'
};

var status = statusType.normal;

var boxState = {
    normal : 'normal'
,   movingUp : 'movingUp'
,   movingDown : 'movingDown'
};

var boxMoveDistance = 30;		//pixels
var boxMoveTime = 500;			//milliseconds
var boxMoveSpeed = boxMoveDistance / boxMoveTime;