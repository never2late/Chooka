var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;
var windowHalfX = SCREEN_WIDTH / 2;
var windowHalfY = SCREEN_HEIGHT / 2;

var container;
var mapContainer;
var controls;
var camera;
var scene;
var renderer;

var meshes = [];
var targetList = [];
var projector;
var mouse = { x: 0, y: 0 };

var loadingMesh;
var loadCount = 0;
var totalLoadCount = 0;

var assetPath = "/lib/assets/";

var isPortrait = false;

var left, right, bg;
var kakaoBox, facebookBox, mapBox;
var mapLoaded = false;
var naverLocationLabel;
var naverMapMarker

var objType = {
	left : 'left'
,	right : 'right'
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