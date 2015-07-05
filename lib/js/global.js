var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

var container;
var mapContainer;
var controls;
var camera;
var scene;
var renderer;
var loader = new THREE.JSONLoader();

var animatableList = [];

var meshes = [];
var touchableList = [];
var projector;
var mouse = { x: 0, y: 0 };

var loadingMesh;
var loadCount = 0;
var totalLoadCount = 0;

var assetPath = "/lib/assets/";

var isPortrait = false;

var left, right;


var clouds = [];

var objType = {
	left : 'left'
,	groom : 'groom'
,	bride : 'bride'
,	right : 'right'
,	cloud : 'cloud'
,	bg : 'bg'
,	kakaoBox : 'kakaoBox'
,	facebookBox : 'facebookBox'
,	mapBox : 'mapBox'
};

var statusType = {
	normal : 'normal'
,	mapOpen : 'mapOpen'
};

var status = statusType.normal;